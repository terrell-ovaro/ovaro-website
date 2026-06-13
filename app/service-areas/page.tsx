import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { NavDropdown } from "../components/NavDropdown";
import { FacilitiesDropdown } from "../components/FacilitiesDropdown";
import { Footer } from "../components/Footer";
import { MobileNav } from "../components/MobileNav";
import { LogoBubble } from "../components/LogoBubble";

export const metadata: Metadata = {
  title: "Service Areas | Ovaro Commercial",
  description:
    "Ovaro Commercial provides professional cleaning services across Greater Austin — Round Rock, Georgetown, Leander, Bee Cave, Lakeway, Pflugerville, Manor, and Austin proper.",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, 'DM Sans', sans-serif)";

/* ── Data ─────────────────────────────────────── */

const areas = [
  {
    num: "01",
    city: "Round Rock",
    county: "Williamson County",
    tag: "Corporate & Medical",
    desc: "Home to Dell Technologies and a dense corridor of corporate offices, clinics, and financial branches. We serve businesses throughout Round Rock's rapidly expanding commercial districts.",
  },
  {
    num: "02",
    city: "Georgetown",
    county: "Williamson County",
    tag: "Historic & Financial",
    desc: "From the landmark courthouse square to the growing Williams Drive corridor, Georgetown businesses count on Ovaro for consistent, professional cleaning that matches the character of the community.",
  },
  {
    num: "03",
    city: "Leander",
    county: "Williamson County",
    tag: "Fast-Growing Suburb",
    desc: "One of Texas's fastest-growing cities. Ovaro serves Leander's expanding mix of medical offices, retail centers, and professional services with the same reliability since day one.",
  },
  {
    num: "04",
    city: "Bee Cave",
    county: "Travis County",
    tag: "Upscale Retail",
    desc: "An upscale retail and professional hub where client expectations are high. We maintain the elevated cleanliness standard that Bee Cave tenants and their clientele expect — every visit.",
  },
  {
    num: "05",
    city: "Lakeway",
    county: "Travis County",
    tag: "Resort & Professional",
    desc: "A premier lakefront community with a growing commercial district. Ovaro serves Lakeway's hotels, conference venues, and professional offices with care proportionate to the setting.",
  },
  {
    num: "06",
    city: "Pflugerville",
    county: "Travis County",
    tag: "Diverse Commercial",
    desc: "A diverse and growing suburb with a broad commercial mix. From fitness centers and dental offices to retail strips and light industrial support spaces, we've had Pflugerville covered since 2017.",
  },
  {
    num: "07",
    city: "Manor",
    county: "Travis County",
    tag: "Emerging Market",
    desc: "East Austin's most rapidly developing neighbor. As Manor's commercial footprint expands, Ovaro brings the same professional standard that established businesses in the area have relied on for years.",
  },
  {
    num: "08",
    city: "Austin",
    county: "Travis County",
    tag: "Our Home Base",
    desc: "From South Congress to The Domain, from East Austin to the Medical District — Ovaro has served Austin's offices, institutions, and retail locations since we opened our doors in 2017.",
  },
];

const reviews = [
  {
    initials: "MG",
    name: "Maria G.",
    title: "Office Manager",
    location: "Round Rock, TX",
    stars: 5,
    quote:
      "Ovaro handles two of our Round Rock office locations without a single issue. Scheduling is always effortless, and the team is professional every single visit. Staff have never had one complaint.",
  },
  {
    initials: "DK",
    name: "David K.",
    title: "Branch Manager",
    location: "Georgetown, TX",
    stars: 5,
    quote:
      "After years of dealing with unreliable vendors, Ovaro has been a breath of fresh air. Our lobby has never looked better, and they have not missed a scheduled day in over two years.",
  },
  {
    initials: "LT",
    name: "Lisa T.",
    title: "Owner",
    location: "Bee Cave, TX",
    stars: 5,
    quote:
      "Our Bee Cave clients expect a pristine studio environment — no exceptions. Ovaro delivers that every morning without us needing to check or follow up. They simply handle it and handle it well.",
  },
  {
    initials: "JR",
    name: "James R.",
    title: "Facilities Director",
    location: "Leander, TX",
    stars: 5,
    quote:
      "Managing a large athletic complex means constant traffic and real sanitation demands. Ovaro keeps our locker rooms and common areas at a standard our coaches, athletes, and parents genuinely appreciate.",
  },
  {
    initials: "PM",
    name: "Priya M.",
    title: "Practice Owner",
    location: "Pflugerville, TX",
    stars: 5,
    quote:
      "Healthcare cleanliness is non-negotiable for us. Ovaro treats our space with that same understanding. We have had zero concerns since switching to them, and our patients have noticed the difference.",
  },
  {
    initials: "CV",
    name: "Carlos V.",
    title: "General Manager",
    location: "Lakeway, TX",
    stars: 5,
    quote:
      "Ovaro manages our conference rooms, common areas, and event spaces. The consistency and attention to detail is exactly what a venue like ours requires. I recommend them without reservation.",
  },
];

const stats = [
  { value: "8", label: "Cities Covered" },
  { value: "50+", label: "Mile Service Radius" },
  { value: "9 yrs", label: "Serving Austin" },
  { value: "2 hr", label: "Quote Response" },
];

const cities = [
  "Austin", "Round Rock", "Georgetown", "Leander",
  "Bee Cave", "Lakeway", "Pflugerville", "Manor",
];

/* ── Page ─────────────────────────────────────── */

export default function ServiceAreasPage() {
  return (
    <>
      {/* ── Navigation ── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: "rgba(255,255,255,0.96)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <LogoBubble />
          <div className="nav-desktop-links" style={{ alignItems: "center", gap: "20px" }}>
            <NavDropdown active="" />
            <FacilitiesDropdown active="" />
            {[
              { label: "About", href: "/#about" },
              { label: "Service Areas", href: "/service-areas" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="nav-link" style={{ fontFamily: FS, ...(label === "Service Areas" ? { color: "var(--blue)" } : {}) }}>
                {label}
              </a>
            ))}
          </div>
          <Link href="/get-a-quote" className="btn-primary nav-cta-desktop" style={{ padding: "10px 22px", fontSize: "0.875rem" }}>
            Get a Quote
          </Link>
          <MobileNav />
        </div>
      </nav>

      <main style={{ paddingTop: "68px" }}>

        {/* ── Page Header ── */}
        <section style={{ background: "var(--cream)", padding: "80px 24px 72px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px", fontFamily: FS, fontSize: "0.8rem", color: "var(--green)", opacity: 0.5 }}>
              <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "var(--blue)", opacity: 1 }}>Service Areas</span>
            </div>

            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
              <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                Where We Work
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: FD, fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.025em", color: "var(--green)", lineHeight: 0.95, marginBottom: "24px" }}>
              Greater Austin,
              <br />
              <span style={{ color: "var(--blue)" }}>Fully Covered.</span>
            </h1>

            <p style={{ fontFamily: FS, fontSize: "1.05rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, maxWidth: "580px", marginBottom: "48px" }}>
              Ovaro Commercial has served the Austin metro since 2017 — not just the city, but the
              communities surrounding it. If your business is in Greater Austin, chances are we&rsquo;re
              already in your neighborhood.
            </p>

            {/* City pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {cities.map((city) => (
                <span key={city} className="city-pill" style={{ fontFamily: FS }}>
                  <svg width="6" height="6" viewBox="0 0 8 8" fill="var(--blue)">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hero Photo ── */}
        <div className="photo-strip">
          <Image
            src="/images/Commercial Cleaning 1.webp"
            alt="Ovaro Commercial team cleaning an office in the Greater Austin area"
            fill
            sizes="(max-width: 1028px) 100vw, 980px"
            style={{ objectFit:"cover",objectPosition:"center 40%" }}
          />
          <div style={{ position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(27,61,47,0.03), rgba(27,61,47,0.10))" }} />
        </div>

        {/* ── Coverage Stats ── */}
        <section style={{ background: "var(--white)", padding: "48px 24px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}>
            {stats.map((s) => (
              <div key={s.label} className="cov-stat">
                <div style={{ fontFamily: FD, fontSize: "2.5rem", letterSpacing: "-0.03em", color: "var(--blue)", lineHeight: 1, marginBottom: "6px" }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--green)", opacity: 0.45 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Areas We Serve ── */}
        <section style={{ background: "var(--cream)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                  Service Coverage
                </span>
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.02em", color: "var(--green)", lineHeight: 1.05 }}>
                Every Area. Same Standard.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(268px, 1fr))", gap: "16px" }}>
              {areas.map((a) => (
                <div key={a.city} className="area-card">
                  {/* Tag */}
                  <div style={{ marginBottom: "16px" }}>
                    <span className="area-tag" style={{ fontFamily: FS }}>{a.tag}</span>
                  </div>

                  {/* City + county */}
                  <h3 style={{ fontFamily: FD, fontSize: "1.75rem", letterSpacing: "-0.015em", color: "var(--green)", lineHeight: 1.1, marginBottom: "6px" }}>
                    {a.city}
                  </h3>
                  <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.4, marginBottom: "16px", letterSpacing: "0.04em" }}>
                    {a.county}
                  </div>

                  {/* Description */}
                  <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.75, margin: 0 }}>
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Info Band ── */}
        <section style={{ background: "var(--white)", padding: "72px 24px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em", color: "var(--green)", lineHeight: 1.05, marginBottom: "16px" }}>
                Don&rsquo;t see your city?
              </h2>
              <p style={{ fontFamily: FS, fontSize: "1rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>
                Our service radius continues to grow. If your location isn&rsquo;t listed, reach out — we
                may already be operating in your area or can extend coverage to serve you.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginLeft: "auto" }}>
              {[
                { icon: "📍", text: "Serving the Greater Austin metro since 2017" },
                { icon: "🏢", text: "Offices, retail, financial institutions & more" },
                { icon: "📞", text: "Quote response guaranteed within 2 hours" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                  <span style={{ fontFamily: FS, fontSize: "0.9rem", color: "var(--green)", opacity: 0.7 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section style={{ background: "var(--cream)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                  Client Reviews
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", alignItems: "end" }}>
                <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.02em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                  Heard Across the Metro.
                </h2>
                <p style={{ fontFamily: FS, fontSize: "0.95rem", color: "var(--green)", opacity: 0.55, lineHeight: 1.75, margin: 0 }}>
                  Real businesses. Real locations. Real results — hover a card to see for yourself.
                </p>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ gap: "20px" }}
            >
              {reviews.map((r) => (
                <div key={r.name} className="review-card">

                  {/* Background quote mark */}
                  <div className="review-quote-bg">&ldquo;</div>

                  {/* Stars */}
                  <div style={{ display: "flex", gap: "4px", marginBottom: "18px", position: "relative", zIndex: 1 }}>
                    {Array(r.stars).fill(null).map((_, i) => (
                      <span key={i} className="star">
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="#C9A84C">
                          <path d="M8 1l1.9 3.9L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.1-.7L8 1z" />
                        </svg>
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote style={{ fontFamily: FS, fontSize: "0.9rem", color: "var(--green)", opacity: 0.8, lineHeight: 1.75, fontStyle: "italic", marginBottom: "24px", position: "relative", zIndex: 1 }}>
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />

                  {/* Attribution */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {/* Avatar */}
                    <div style={{
                      width: "38px", height: "38px", borderRadius: "50%",
                      background: "var(--blue-subtle)", border: "1px solid var(--border-blue)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)", letterSpacing: "0.04em" }}>
                        {r.initials}
                      </span>
                    </div>
                    <div>
                      <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>
                        {r.name}
                      </div>
                      <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>
                        {r.title} &mdash; {r.location}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section style={{ background: "var(--blue)", padding: "88px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "#fff", lineHeight: 1.05, marginBottom: "16px" }}>
              Ready for a cleaner workspace?
            </h2>
            <p style={{ fontFamily: FS, fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "36px" }}>
              Tell us your location and what you need. We&rsquo;ll respond within 2 hours with
              a clear, no-obligation quote built for your space.
            </p>
            <Link href="/get-a-quote" className="btn-white">
              Get a Free Quote
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
