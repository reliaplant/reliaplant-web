import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function generateCsp(nonce: string, isBlog: boolean) {
  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' https: http: 'unsafe-inline'`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
    isBlog
      ? `img-src 'self' blob: data: https: http:`
      : `img-src 'self' blob: data: https: http://localhost:* blob:http://localhost:*`,
    `font-src 'self' data: https: https://fonts.gstatic.com`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `frame-src 'self' https://www.google.com`,
    `connect-src 'self' https://*.googleapis.com https://*.firebasestorage.googleapis.com https://securetoken.googleapis.com https://identitytoolkit.googleapis.com blob: blob:http://localhost:*`,
    isBlog
      ? `media-src 'self' blob:`
      : `media-src 'self' blob: blob:http://localhost:*`,
    isBlog
      ? `worker-src 'self' blob:`
      : `worker-src 'self' blob: blob:http://localhost:*`,
  ];

  return csp.join("; ");
}

export async function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isBlog = request.nextUrl.pathname.startsWith("/blog");
  const csp = generateCsp(nonce, isBlog);

  const response = NextResponse.next();
  // Add CORS headers
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}
