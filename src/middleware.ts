import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function generateCsp(nonce: string) {
  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' https: http: 'unsafe-inline'`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
    `img-src 'self' blob: data: https:`,
    `font-src 'self' data: https: https://fonts.gstatic.com`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `frame-src 'self' https://www.google.com`,
    `connect-src 'self' https://firestore.googleapis.com https://securetoken.googleapis.com`,
    `media-src 'self' blob:`,
    `worker-src 'self' blob:`,
  ];

  return csp.join("; ");
}

export async function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = generateCsp(nonce);

  // Clone the response and add the CSP header
  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}
