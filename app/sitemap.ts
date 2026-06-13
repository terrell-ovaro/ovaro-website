import type { MetadataRoute } from "next";

// Production domain — update if the canonical host ever changes.
const BASE_URL = "https://www.ovarocommercial.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Route, priority, change frequency — ordered by conversion importance.
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/get-a-quote", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/janitorial", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/green-cleaning", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/day-porter", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/post-construction", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/deep-cleaning", priority: 0.7, changeFrequency: "monthly" },
    { path: "/facilities-served", priority: 0.8, changeFrequency: "monthly" },
    { path: "/facilities-served/financial-institutions", priority: 0.7, changeFrequency: "monthly" },
    { path: "/facilities-served/office-cleaning", priority: 0.7, changeFrequency: "monthly" },
    { path: "/facilities-served/retail-locations", priority: 0.7, changeFrequency: "monthly" },
    { path: "/facilities-served/hotels", priority: 0.7, changeFrequency: "monthly" },
    { path: "/facilities-served/construction-sites", priority: 0.7, changeFrequency: "monthly" },
    { path: "/facilities-served/places-of-prayer", priority: 0.7, changeFrequency: "monthly" },
    { path: "/facilities-served/fitness-centers", priority: 0.7, changeFrequency: "monthly" },
    { path: "/facilities-served/educational-facilities", priority: 0.7, changeFrequency: "monthly" },
    { path: "/service-areas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
