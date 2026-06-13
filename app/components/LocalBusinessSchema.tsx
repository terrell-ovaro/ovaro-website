/* LocalBusiness structured data (JSON-LD) for rich results in Google Search.
   NOTE: aggregateRating is intentionally omitted until the Google Business
   Profile is verified and real reviews exist — see memory note. */

const BASE_URL = "https://www.ovarocommercial.com";

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#business`,
  name: "Ovaro Commercial",
  description:
    "Family-owned commercial cleaning company serving Greater Austin, TX since 2017. Janitorial, green cleaning, day porter, post-construction, and deep cleaning for offices, financial institutions, retail, and more.",
  url: BASE_URL,
  telephone: "+1-210-904-6974",
  email: "terrell@ovarocommercial.com",
  foundingDate: "2017",
  priceRange: "$$",
  image: `${BASE_URL}/opengraph-image`,
  logo: `${BASE_URL}/icon.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: [
    "Austin, TX",
    "Round Rock, TX",
    "Georgetown, TX",
    "Leander, TX",
    "Bee Cave, TX",
    "Lakeway, TX",
    "Pflugerville, TX",
    "Manor, TX",
  ].map((name) => ({ "@type": "City", name })),
  knowsAbout: [
    "Commercial cleaning",
    "Janitorial services",
    "Office cleaning",
    "Green cleaning",
    "Post-construction cleaning",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial Cleaning Services",
    itemListElement: [
      { service: "Janitorial Services", slug: "janitorial" },
      { service: "Green Cleaning", slug: "green-cleaning" },
      { service: "Day Porter", slug: "day-porter" },
      { service: "Post-Construction Cleaning", slug: "post-construction" },
      { service: "Deep Cleaning", slug: "deep-cleaning" },
    ].map(({ service, slug }) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        url: `${BASE_URL}/services/${slug}`,
      },
    })),
  },
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      // Schema is a static, trusted object — safe to inject.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
