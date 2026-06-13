import type { MetadataRoute } from "next";

const BASE_URL = "https://www.ovarocommercial.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep the API route out of the index — it only handles form POSTs.
      disallow: "/api/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
