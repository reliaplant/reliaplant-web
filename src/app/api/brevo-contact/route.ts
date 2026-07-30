import { NextRequest, NextResponse } from "next/server";
import type { FormContactData } from "@/types/forms";

const BREVO_API = "https://api.brevo.com/v3";

// app.reliaplant.com llama a este endpoint cross-origin (solicitudes de
// upgrade), así que necesita CORS explícito - no es solo el sitio propio.
const ALLOWED_ORIGINS = new Set([
  "https://app.reliaplant.com",
  "https://reliaplant.com",
]);

function corsHeaders(origin: string | null): Record<string, string> {
  if (!origin || !ALLOWED_ORIGINS.has(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(req.headers.get("origin")),
  });
}

async function brevoFetch(apiKey: string, path: string, init?: RequestInit) {
  return fetch(`${BREVO_API}${path}`, {
    ...init,
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...init?.headers,
    },
  });
}

async function upsertContact(apiKey: string, data: FormContactData, listId?: string) {
  const [firstName, ...rest] = (data.nombre || "").trim().split(" ");
  const lastName = rest.join(" ");

  const body: Record<string, unknown> = {
    email: data.email,
    updateEnabled: true,
    attributes: {
      NOMBRE: firstName || undefined,
      APELLIDOS: lastName || undefined,
      JOB_TITLE: data.cargo || undefined,
      PAIS: data.pais || undefined,
      INTERES: data.interes || undefined,
      ORIGEN: data.origen || undefined,
    },
  };
  if (listId) body.listIds = [Number(listId)];

  const createRes = await brevoFetch(apiKey, "/contacts", {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!createRes.ok && createRes.status !== 204) {
    throw new Error(`create contact failed: ${createRes.status} ${await createRes.text()}`);
  }

  // Contacto nuevo -> el body trae { id }. Contacto existente actualizado -> 204 sin body,
  // hay que volver a pedirlo por email para obtener su id numérico.
  if (createRes.status === 204) {
    const getRes = await brevoFetch(apiKey, `/contacts/${encodeURIComponent(data.email)}`);
    if (!getRes.ok) throw new Error(`fetch existing contact failed: ${getRes.status}`);
    const contact = await getRes.json();
    return contact.id as number;
  }

  const created = await createRes.json();
  return created.id as number;
}

async function findCompanyByName(apiKey: string, name: string) {
  const res = await brevoFetch(
    apiKey,
    `/companies?filters[attributes.name]=${encodeURIComponent(name)}&limit=50`
  );
  if (!res.ok) throw new Error(`search company failed: ${res.status} ${await res.text()}`);
  const { items } = (await res.json()) as { items: { id: string; attributes: { name?: string }; linkedContactsIds?: number[] }[] };
  return items?.find((c) => (c.attributes?.name || "").toLowerCase() === name.toLowerCase());
}

async function linkContactToCompany(apiKey: string, empresa: string, contactId: number) {
  const existing = await findCompanyByName(apiKey, empresa);

  if (existing) {
    const linkedContactsIds = Array.from(new Set([...(existing.linkedContactsIds || []), contactId]));
    const res = await brevoFetch(apiKey, `/companies/${existing.id}`, {
      method: "PATCH",
      body: JSON.stringify({ linkedContactsIds }),
    });
    if (!res.ok) throw new Error(`link contact to company failed: ${res.status} ${await res.text()}`);
    return;
  }

  const res = await brevoFetch(apiKey, "/companies", {
    method: "POST",
    body: JSON.stringify({ name: empresa, linkedContactsIds: [contactId] }),
  });
  if (!res.ok) throw new Error(`create company failed: ${res.status} ${await res.text()}`);
}

export async function POST(req: NextRequest) {
  const headers = corsHeaders(req.headers.get("origin"));
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY no configurada; se omite sync con Brevo.");
    return NextResponse.json({ skipped: true }, { status: 200, headers });
  }

  const data = (await req.json()) as FormContactData;

  try {
    const contactId = await upsertContact(apiKey, data, process.env.BREVO_LIST_ID);

    if (data.empresa?.trim()) {
      await linkContactToCompany(apiKey, data.empresa.trim(), contactId);
    }

    return NextResponse.json({ ok: true }, { headers });
  } catch (err) {
    console.error("Brevo contact sync error:", err);
    // Nunca rompemos el flujo de guardado del formulario por un fallo de Brevo
    return NextResponse.json({ ok: false }, { status: 200, headers });
  }
}
