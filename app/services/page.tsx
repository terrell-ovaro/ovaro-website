import type { Metadata } from "next";
import { NavDropdown } from "../components/NavDropdown";
import { FacilitiesDropdown } from "../components/FacilitiesDropdown";
import { Footer } from "../components/Footer";
import { MobileNav } from "../components/MobileNav";
import { LogoBubble } from "../components/LogoBubble";

export const metadata: Metadata = {
  title: "Services | Ovaro Commercial",
  description:
    "Ovaro Commercial offers janitorial, green cleaning, day porter, post-construction, and deep cleaning services across Greater Austin, TX.",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, 'DM Sans', sans-serif)";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Janitorial Services",
    slug: "janitorial",
    tag: "Core Service",
    desc: "Scheduled, consistent cleaning for commercial spaces of all sizes — from nightly maintenance to custom weekly plans. We keep your facility presentable without you having to think about it.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
        <path d="M12 8c-2 0-4 1-5 3s-1 4 1 5" />
        <path d="M15 9c1 1.5 1 3.5 0 5" />
      </svg>
    ),
    title: "Green Cleaning",
    slug: "green-cleaning",
    tag: "Eco-Friendly",
    desc: "Professional cleaning with low-toxicity, environmentally responsible products that are safe for staff, clients, and sensitive spaces. Same thorough results — without the harsh chemicals.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: "Day Porter",
    slug: "day-porter",
    tag: "On-Site Staff",
    desc: "Dedicated on-site cleaning staff during business hours who maintain cleanliness in real time throughout the day. Ideal for high-traffic facilities where appearance can't wait until the next scheduled visit.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="1" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <path d="M8 12h8M8 16h5" />
      </svg>
    ),
    title: "Post-Construction",
    slug: "post-construction",
    tag: "Specialty Clean",
    desc: "Comprehensive cleanup after construction or renovation — removing dust, debris, adhesive residue, and construction materials. We prep your space for occupancy so you can open on schedule.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
      </svg>
    ),
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    tag: "Intensive",
    desc: "A top-to-bottom intensive clean that goes far beyond routine maintenance — surfaces, grout, vents, equipment, and hard-to-reach areas included. Perfect for seasonal resets, pre-opening prep, or recovering a neglected space.",
  },
];

export default function ServicesPage() {
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
            <NavDropdown active="Services" />
            <FacilitiesDropdown active="" />
            {[
              { label: "About", href: "/#about" },
              { label: "Service Areas", href: "/service-areas" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="nav-link" style={{ fontFamily: FS }}>
                {label}
              </a>
            ))}
          </div>
          <a href="/get-a-quote" className="btn-primary nav-cta-desktop" style={{ padding: "10px 22px", fontSize: "0.875rem" }}>
            Get a Quote
          </a>
          <MobileNav />
        </div>
      </nav>

      <main style={{ paddingTop: "68px" }}>

        {/* ── Page Header ── */}
        <section style={{ background: "var(--cream)", padding: "80px 24px 80px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", minHeight: "300px" }}>

            {/* Text — capped so it never slides under the badge */}
            <div style={{ maxWidth: "560px" }}>

              {/* Breadcrumb */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px", fontFamily: FS, fontSize: "0.8rem", color: "var(--green)", opacity: 0.5 }}>
                <a href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</a>
                <span>/</span>
                <span style={{ color: "var(--blue)", opacity: 1 }}>Services</span>
              </div>

              {/* Label */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                  What We Offer
                </span>
              </div>

              {/* Headline */}
              <h1 style={{ fontFamily: FD, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.025em", color: "var(--green)", lineHeight: 1, marginBottom: "20px" }}>
                Clean that goes<br />
                <span style={{ color: "var(--blue)" }}>beyond the surface.</span>
              </h1>

              <p style={{ fontFamily: FS, fontSize: "1.05rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>
                From daily janitorial maintenance to post-construction deep cleans, every service we offer is built around one goal — a consistently clean environment your team and clients can count on.
              </p>
            </div>

            {/* Badge — absolute northeast corner, same as facilities-served */}
            <div
              className="hidden md:block"
              style={{ position: "absolute", top: "0", right: "0", width: "280px" }}
            >
              <div className="cred-card float" style={{ padding: "32px 24px" }}>

                {/* Shield with pulsing rings */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
                  <div style={{ position: "relative", display: "inline-flex" }}>
                    <div className="pulse-ring" />
                    <div className="pulse-ring-2" />
                    <div style={{ width: "68px", height: "68px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1.5px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.4" strokeLinejoin="round">
                        <path d="M12 2L4 6v6c0 5.25 3.5 9.75 8 11 4.5-1.25 8-5.75 8-11V6L12 2z" />
                        <path d="M9 12l2 2 4-4" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div style={{ fontFamily: FD, fontSize: "1.4rem", letterSpacing: "-0.015em", color: "var(--green)", lineHeight: 1.1, marginBottom: "6px" }}>
                    Insured &amp; Bonded
                  </div>
                  <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, letterSpacing: "0.04em" }}>
                    Licensed in the State of Texas
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />

                {/* Credential items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { cls: "check-pop-1", text: "General liability coverage" },
                    { cls: "check-pop-2", text: "Bonded — every team member" },
                    { cls: "check-pop-3", text: "Licensed — State of Texas" },
                  ].map(({ cls, text }) => (
                    <div key={text} className={cls} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 6l3 3 5-5" />
                        </svg>
                      </div>
                      <span style={{ fontFamily: FS, fontSize: "0.8rem", color: "var(--green)", opacity: 0.75 }}>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border)", margin: "18px 0 14px" }} />

                {/* Footer stamp */}
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontFamily: FS, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--green)", opacity: 0.3 }}>
                    Est. 2017 &nbsp;·&nbsp; Austin, TX
                  </span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── Services Grid — 5 across, each card fully clickable ── */}
        <section style={{ background: "var(--white)", padding: "88px 24px 112px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div className="mobile-grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="service-card"
                  style={{
                    display: "flex", flexDirection: "column",
                    textDecoration: "none", color: "inherit",
                  }}
                >

                  {/* Icon */}
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "10px",
                    background: "var(--blue-subtle)", border: "1px solid var(--border-blue)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--blue)", marginBottom: "16px", flexShrink: 0,
                  }}>
                    {s.icon}
                  </div>

                  {/* Tag */}
                  <div style={{ marginBottom: "10px" }}>
                    <span style={{
                      fontFamily: FS, fontSize: "0.62rem", fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "var(--blue)", background: "var(--blue-subtle)",
                      border: "1px solid var(--border-blue)",
                      padding: "3px 8px", borderRadius: "12px",
                    }}>
                      {s.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.015em", color: "var(--green)", lineHeight: 1.15, marginBottom: "10px" }}>
                    {s.title}
                  </h2>

                  {/* Description */}
                  <p style={{ fontFamily: FS, fontSize: "0.82rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
                    {s.desc}
                  </p>

                  {/* CTA */}
                  <div
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      fontFamily: FS, fontSize: "0.78rem", fontWeight: 700,
                      color: "var(--blue)",
                      borderTop: "1px solid var(--border)", paddingTop: "14px",
                      letterSpacing: "0.02em", transition: "gap 0.18s ease",
                    }}
                  >
                    Learn more
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section style={{ background: "var(--cream)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            {/* Header */}
            <div style={{ marginBottom: "48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                  Client Reviews
                </span>
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                Trusted by Austin businesses.
              </h2>
            </div>

            {/* 3-column review grid */}
            <div className="mobile-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>

              {[
                {
                  initials: "TW",
                  name: "Thomas W.",
                  title: "Operations Manager",
                  location: "Austin, TX",
                  quote: "Ovaro's janitorial team has maintained our medical offices for over a year. The consistency is what sets them apart — same quality every single visit, no follow-up required.",
                },
                {
                  initials: "AR",
                  name: "Angela R.",
                  title: "Owner",
                  location: "Cedar Park, TX",
                  quote: "We switched to Ovaro's green cleaning program and our clients noticed immediately. The studio feels genuinely clean without the harsh chemical smell. It was absolutely the right call.",
                },
                {
                  initials: "BM",
                  name: "Brandon M.",
                  title: "Project Manager",
                  location: "Round Rock, TX",
                  quote: "Ovaro handled post-construction cleanup on two of our commercial builds this year. Detailed, thorough, and done before our handover deadline every time. Exactly what we needed.",
                },
              ].map((r) => (
                <div key={r.name} className="review-card">

                  {/* Background quote mark */}
                  <div className="review-quote-bg">&ldquo;</div>

                  {/* Stars */}
                  <div style={{ display: "flex", gap: "4px", marginBottom: "18px", position: "relative", zIndex: 1 }}>
                    {Array(5).fill(null).map((_, i) => (
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
                    <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
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
        <section style={{ background: "var(--blue)", padding: "80px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.022em", color: "#fff", lineHeight: 1.05, marginBottom: "16px" }}>
              Not sure which service fits?
            </h2>
            <p style={{ fontFamily: FS, fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "36px" }}>
              Tell us about your space and we&rsquo;ll recommend the right solution. Response within 2 hours, no obligation.
            </p>
            <a href="/get-a-quote" className="btn-white">Get a Free Quote</a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
