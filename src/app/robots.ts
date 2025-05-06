import { MetadataRoute } from "next";

// Esta línea es necesaria para exportación estática
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy"],
      },
    ],
    sitemap: `${process.env.HOST_URL}/sitemap.xml`,
  };
}
