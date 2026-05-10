/* Ovaro Commercial — Home Page
   Section order (per CLAUDE.md): Hero → Trust signals → Services → How it works → Testimonials → CTA band
   Primary goal: quote form submissions */

import type { Metadata } from "next";
import { NavDropdown } from "./components/NavDropdown";
import { FacilitiesDropdown } from "./components/FacilitiesDropdown";
import { MobileNav } from "./components/MobileNav";
import { LogoBubble } from "./components/LogoBubble";

export const metadata: Metadata = {
  title: "Ovaro Commercial | Commercial Cleaning Austin TX",
  description:
    "Family-owned commercial cleaning company serving Greater Austin, TX since 2017. Janitorial, green cleaning, day porter, post-construction & deep cleaning. Licensed, bonded & insured. Free quote — response within 2 hours.",
  keywords:
    "commercial cleaning Austin, janitorial services Austin TX, office cleaning Austin, commercial cleaning company Austin Texas, green cleaning Austin",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, 'DM Sans', sans-serif)";

/* ── Data ─────────────────────────────────────────── */

const trustItems = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
        <path d="M12 2L4 6v6c0 5.25 3.5 9.75 8 11 4.5-1.25 8-5.75 8-11V6L12 2z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" />
      </svg>
    ),
    label: "Licensed & Insured",
    sub: "Fully covered on every visit",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
        <rect x="2" y="10" width="20" height="12" />
        <path d="M2 10L12 2l10 8" strokeLinecap="round" />
        <path d="M9 22v-6h6v6" />
      </svg>
    ),
    label: "Est. 2017",
    sub: "9 years serving Austin businesses",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M17 21H7a4 4 0 0 1-4-4 6 6 0 0 1 6-6h6a6 6 0 0 1 6 6 4 4 0 0 1-4 4z" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="3" />
        <circle cx="15" cy="7" r="3" />
      </svg>
    ),
    label: "Family-Owned & Operated",
    sub: "Accountable to every client, personally",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "2-Hour Response",
    sub: "Guaranteed on every quote request",
  },
];

const services = [
  {
    num: "01",
    title: "Office Cleaning",
    desc: "Professional janitorial services tailored to your workspace — daily, weekly, or custom schedules built around your team's hours. Desks, common areas, restrooms, and more.",
    detail: "Ideal for: law firms, tech offices, co-working spaces",
  },
  {
    num: "02",
    title: "Financial Institutions",
    desc: "We understand the standard required in banks and credit unions. Detail-oriented cleaning that protects your brand image, meets compliance expectations, and keeps client-facing spaces impeccable.",
    detail: "Ideal for: banks, credit unions, mortgage offices",
  },
  {
    num: "03",
    title: "Retail Locations",
    desc: "First impressions close sales. Our retail cleaning program keeps your floors, fitting rooms, and entryways sharp — so customers focus on your products, not the state of your space.",
    detail: "Ideal for: showrooms, boutiques, home goods stores",
  },
];

const steps = [
  {
    num: "01",
    title: "Request a Free Quote",
    desc: "Fill out our short form — we respond within 2 hours with a clear, no-obligation quote tailored to your space and schedule.",
  },
  {
    num: "02",
    title: "We Build Your Plan",
    desc: "A custom cleaning schedule matched to your space, business hours, and specific requirements. No cookie-cutter packages.",
  },
  {
    num: "03",
    title: "Consistent Service, Guaranteed",
    desc: "Regular, reliable cleaning from a team you know by name. Direct contact, clear standards, no excuses — ever.",
  },
];

const testimonials = [
  {
    stars: 5,
    quote:
      "I've managed facilities at three branches and worked with four different vendors. Ovaro is the only one I've never had to follow up with. They just handle it — every single time.",
    name: "Jennifer M.",
    role: "Branch Manager",
  },
  {
    stars: 5,
    quote:
      "Our office expectations are high. Ovaro met them from week one and hasn't slipped since. The communication alone puts them in a completely different category.",
    name: "Marcus T.",
    role: "Operations Director",
  },
  {
    stars: 5,
    quote:
      "Retail is hard enough. Worrying about your floors shouldn't be part of it. Ovaro has cleaned our two locations for going on three years — I genuinely can't imagine using anyone else.",
    name: "Rachel S.",
    role: "Owner",
  },
];

/* ── Component ─────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── Navigation ──────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.96)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <LogoBubble />

          {/* Links */}
          <div
            className="nav-desktop-links"
            style={{ alignItems: "center", gap: "20px" }}
          >
            <NavDropdown active="" />
            <FacilitiesDropdown active="" />
            {[
              { label: "About", href: "/#about" },
              { label: "Service Areas", href: "/service-areas" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="nav-link" style={{ fontFamily: "var(--font-sans)" }}>
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="/get-a-quote" className="btn-primary nav-cta-desktop" style={{ padding: "10px 22px", fontSize: "0.875rem" }}>
            Get a Quote
          </a>
          <MobileNav />
        </div>
      </nav>

      <main>
        {/* ── 1. Hero ─────────────────────────────── */}
        <section
          style={{
            background: "var(--cream)",
            paddingTop: "68px",
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "80px 24px 96px",
              width: "100%",
            }}
          >
            {/* Overline — full width above the headline row */}
            <div
              className="e1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "28px",
                padding: "7px 14px",
                borderRadius: "20px",
                border: "1px solid var(--border-blue)",
                background: "var(--blue-subtle)",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)", flexShrink: 0 }} />
              <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue)" }}>
                Commercial Cleaning · Austin, TX · Est. 2017
              </span>
            </div>

            {/* Left text + circle: flex row centered on the full text block */}
            <div style={{ display: "flex", alignItems: "center", gap: "56px" }}>

              {/* Left column — all text */}
              <div style={{ flex: 1, minWidth: 0 }}>

                {/* H1 */}
                <h1
                  className="e2"
                  style={{
                    fontFamily: FD,
                    fontSize: "clamp(3rem, 6vw, 5.75rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.025em",
                    color: "var(--green)",
                    marginBottom: "28px",
                  }}
                >
                  The Cleaning{" "}
                  <span style={{ color: "var(--blue)" }}>Standard</span>
                  <br />
                  Austin&rsquo;s Best
                  <br />
                  Businesses Demand.
                </h1>

                {/* Subtext */}
                <p
                  className="e3"
                  style={{ fontFamily: FS, fontSize: "1.1rem", lineHeight: 1.7, color: "var(--green)", opacity: 0.7, maxWidth: "520px", marginBottom: "40px" }}
                >
                  Family-owned since 2017. No excuses, no surprises — just
                  consistent, professional service your team can count on. We
                  built Ovaro because we got tired of the same complaints you have.
                </p>

                {/* CTAs */}
                <div className="e4" style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "40px" }}>
                  <a href="/get-a-quote" className="btn-primary">
                    Get a Free Quote{" "}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                  <a href="#services" className="btn-ghost">Our Services</a>
                </div>

                {/* Trust chips */}
                <div className="e5" style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
                  {["✓ Licensed & Insured", "✓ Family-Owned & Operated", "✓ Response within 2 hours"].map((chip) => (
                    <span key={chip} style={{ fontFamily: FS, fontSize: "0.8rem", fontWeight: 500, color: "var(--green)", opacity: 0.6 }}>
                      {chip}
                    </span>
                  ))}
                </div>

              </div>{/* end left column */}

              {/* Credential circle — right, centered with full text block */}
              <div
                className="e2 float hidden lg:flex"
                style={{ alignItems: "center", justifyContent: "center", flexShrink: 0, width: "420px" }}
              >
              <div style={{ position: "relative", width: "320px", height: "320px" }}>
                {/* Outer ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "1px solid var(--border-blue)",
                    background: "var(--blue-subtle)",
                  }}
                />
                {/* Inner ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: "24px",
                    borderRadius: "50%",
                    border: "1px solid rgba(105,150,173,0.12)",
                  }}
                />

                {/* Center content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FD,
                      fontSize: "6rem",
                      lineHeight: 1,
                      color: "var(--blue)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    9
                  </span>
                  <span
                    style={{
                      fontFamily: FS,
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--green)",
                      opacity: 0.45,
                      marginTop: "4px",
                    }}
                  >
                    YEARS
                  </span>
                  <div
                    style={{
                      width: "28px",
                      height: "1px",
                      background: "var(--border-blue)",
                      margin: "10px 0",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: FS,
                      fontSize: "0.75rem",
                      color: "var(--green)",
                      opacity: 0.5,
                      textAlign: "center",
                      lineHeight: 1.5,
                    }}
                  >
                    Serving Austin&rsquo;s
                    <br />
                    finest businesses
                  </span>
                </div>

                {/*
                  8 industry tags, one per 45° around the 320 px circle.
                  Geometry: cx = 160 + 160·sin(θ),  cy = 160 − 160·cos(θ)
                  Right tags  → left  = cx / 320 × 100 %   (inner edge on circle)
                  Left  tags  → right = (320−cx) / 320 × 100 % (inner edge on circle)
                  Top/bottom  → ±8 % (≈ tag height 26 px / 320)
                  Vertical    → top  = (cy − 13) / 320 × 100 %
                */}
                {(
                  [
                    // 0 °  — 12 o'clock  (cx=160, cy=0)
                    { label: "Hotels",                  top: "-8%",    left: "50%",   transform: "translateX(-50%)" },
                    // 45 ° — 1:30        (cx=273, cy=47)  left=85 %, top=10 %
                    { label: "Financial Institutions",  top: "10%",    left: "85%"  },
                    // 90 ° — 3 o'clock   (cx=320, cy=160) left=97 %, top=46 %
                    { label: "Educational Facilities",  top: "46%",    left: "97%"  },
                    // 135°  — 4:30       (cx=273, cy=273) left=85 %, bottom=10 %
                    { label: "Construction Sites",      bottom: "10%", left: "85%"  },
                    // 180°  — 6 o'clock  (cx=160, cy=320)
                    { label: "Fitness Centers",         bottom: "-8%", left: "50%",  transform: "translateX(-50%)" },
                    // 225°  — 7:30       (cx=47, cy=273)  right=85 %, bottom=10 %
                    { label: "Retail Locations",        bottom: "10%", right: "85%" },
                    // 270°  — 9 o'clock  (cx=0, cy=160)   right=97 %, top=46 %
                    { label: "Places of Prayer",        top: "46%",    right: "97%" },
                    // 315°  — 10:30      (cx=47, cy=47)   right=85 %, top=10 %
                    { label: "Office Spaces",           top: "10%",    right: "85%" },
                  ] as Array<{ label: string; top?: string; bottom?: string; left?: string; right?: string; transform?: string }>
                ).map(({ label, ...pos }) => (
                  <div key={label} style={{ position: "absolute", ...pos }}>
                    <span
                      style={{
                        fontFamily: FS,
                        fontSize: "0.67rem",
                        fontWeight: 600,
                        padding: "5px 11px",
                        borderRadius: "20px",
                        border: "1px solid var(--border-blue)",
                        background: "var(--white)",
                        color: "var(--blue)",
                        whiteSpace: "nowrap",
                        display: "block",
                        boxShadow: "0 1px 5px rgba(27,61,47,0.08)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>{/* end circle wrapper */}
            </div>{/* end left+circle flex row */}

          </div>{/* end outer content div */}
        </section>

        {/* ── 2. Trust Signals ────────────────────── */}
        <section
          style={{
            background: "var(--white)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            {trustItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "36px 28px",
                  borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{ color: "var(--blue)", flexShrink: 0, marginTop: "2px" }}>
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: FD,
                      fontSize: "1.1rem",
                      color: "var(--green)",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: FS,
                      fontSize: "0.8rem",
                      color: "var(--green)",
                      opacity: 0.5,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. Services ─────────────────────────── */}
        <section
          id="services"
          style={{
            background: "var(--cream)",
            padding: "112px 0",
          }}
        >
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
          >
            {/* Section header */}
            <div style={{ marginBottom: "64px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "1.5px",
                    background: "var(--blue)",
                  }}
                />
                <span
                  style={{
                    fontFamily: FS,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--blue)",
                  }}
                >
                  We Specialize In
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "24px",
                  alignItems: "end",
                }}
              >
                <h2
                  style={{
                    fontFamily: FD,
                    fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
                    letterSpacing: "-0.02em",
                    color: "var(--green)",
                    lineHeight: 1.05,
                  }}
                >
                  Multiple Industries.
                  <br />
                  One Standard of Clean.
                </h2>
                <p
                  style={{
                    fontFamily: FS,
                    fontSize: "1rem",
                    color: "var(--green)",
                    opacity: 0.6,
                    lineHeight: 1.75,
                    maxWidth: "420px",
                  }}
                >
                  We don&rsquo;t try to clean everything. We focus on the
                  environments where consistency, accountability, and professional
                  appearance matter most.
                </p>
              </div>
            </div>

            {/* Service cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {services.map((s) => (
                <div key={s.num} className="service-card">
                  <div
                    style={{
                      fontFamily: FD,
                      fontSize: "1rem",
                      color: "var(--blue)",
                      letterSpacing: "0.06em",
                      marginBottom: "20px",
                    }}
                  >
                    {s.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: FD,
                      fontSize: "1.75rem",
                      letterSpacing: "-0.015em",
                      color: "var(--green)",
                      lineHeight: 1.1,
                      marginBottom: "14px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: FS,
                      fontSize: "0.9rem",
                      color: "var(--green)",
                      opacity: 0.65,
                      lineHeight: 1.75,
                      marginBottom: "20px",
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{
                      fontFamily: FS,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--blue)",
                      letterSpacing: "0.04em",
                      borderTop: "1px solid var(--border)",
                      paddingTop: "16px",
                    }}
                  >
                    {s.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* More Services CTA */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "48px",
              }}
            >
              <a
                href="/facilities-served"
                className="btn-ghost"
                style={{ gap: "8px", paddingLeft: "36px", paddingRight: "36px" }}
              >
                More Facilities
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. How It Works ─────────────────────── */}
        <section
          id="how-it-works"
          style={{
            background: "var(--white)",
            padding: "112px 0",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
          >
            <div style={{ marginBottom: "64px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "1.5px",
                    background: "var(--blue)",
                  }}
                />
                <span
                  style={{
                    fontFamily: FS,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--blue)",
                  }}
                >
                  How It Works
                </span>
              </div>
              <h2
                style={{
                  fontFamily: FD,
                  fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--green)",
                  lineHeight: 1.05,
                }}
              >
                Simple, from start to steady.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "0",
                position: "relative",
              }}
            >
              {steps.map((step, i) => {
                const isFirst = i === 0;
                const Wrapper = isFirst ? "a" : "div";
                const wrapperProps = isFirst
                  ? { href: "/get-a-quote" }
                  : {};
                return (
                <Wrapper
                  key={step.num}
                  {...(wrapperProps as Record<string, string>)}
                  style={{
                    padding: "0 48px 0 0",
                    paddingLeft: i > 0 ? "48px" : "0",
                    borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                    position: "relative",
                    ...(isFirst ? {
                      display: "block",
                      textDecoration: "none",
                      borderRadius: "10px",
                      transition: "background 0.22s ease, box-shadow 0.22s ease",
                      cursor: "pointer",
                    } : {}),
                  }}
                  className={isFirst ? "step-cta" : ""}
                >
                  {/* Number */}
                  <div
                    style={{
                      fontFamily: FD,
                      fontSize: "4.5rem",
                      lineHeight: 1,
                      color: "var(--blue)",
                      opacity: 0.18,
                      letterSpacing: "-0.03em",
                      marginBottom: "12px",
                    }}
                  >
                    {step.num}
                  </div>
                  {/* Accent line */}
                  <div
                    style={{
                      width: "32px",
                      height: "2px",
                      background: "var(--blue)",
                      marginBottom: "20px",
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: FD,
                      fontSize: "1.5rem",
                      letterSpacing: "-0.015em",
                      color: "var(--green)",
                      marginBottom: "12px",
                      lineHeight: 1.15,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: FS,
                      fontSize: "0.9rem",
                      color: "var(--green)",
                      opacity: 0.6,
                      lineHeight: 1.75,
                    }}
                  >
                    {step.desc}
                  </p>
                  {isFirst && (
                    <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "6px", fontFamily: FS, fontSize: "0.8rem", fontWeight: 700, color: "var(--blue)", letterSpacing: "0.04em" }}>
                      Get a free quote
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4"/>
                      </svg>
                    </div>
                  )}
                </Wrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 5. Testimonials ─────────────────────── */}
        <section
          style={{
            background: "var(--cream)",
            padding: "112px 0",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
          >
            <div style={{ marginBottom: "56px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "1.5px",
                    background: "var(--blue)",
                  }}
                />
                <span
                  style={{
                    fontFamily: FS,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--blue)",
                  }}
                >
                  What Our Clients Say
                </span>
              </div>
              <h2
                style={{
                  fontFamily: FD,
                  fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--green)",
                  lineHeight: 1.05,
                }}
              >
                Don&rsquo;t take our word for it.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="tcard">
                  {/* Stars */}
                  <div
                    style={{
                      display: "flex",
                      gap: "3px",
                      marginBottom: "20px",
                    }}
                  >
                    {Array(t.stars)
                      .fill(null)
                      .map((_, j) => (
                        <svg
                          key={j}
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="#C9A84C"
                        >
                          <path d="M8 1l1.9 3.9L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.1-.7L8 1z" />
                        </svg>
                      ))}
                  </div>

                  {/* Quote */}
                  <blockquote
                    style={{
                      fontFamily: FS,
                      fontSize: "0.925rem",
                      color: "var(--green)",
                      opacity: 0.8,
                      lineHeight: 1.75,
                      fontStyle: "italic",
                      marginBottom: "24px",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Divider */}
                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "var(--border)",
                      marginBottom: "20px",
                    }}
                  />

                  {/* Attribution */}
                  <div>
                    <div
                      style={{
                        fontFamily: FS,
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--green)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: FS,
                        fontSize: "0.775rem",
                        color: "var(--green)",
                        opacity: 0.5,
                        marginTop: "2px",
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CTA Band ─────────────────────────── */}
        <section
          id="quote"
          style={{
            background: "var(--blue)",
            padding: "96px 24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontFamily: FD,
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                letterSpacing: "-0.022em",
                color: "#fff",
                lineHeight: 1.05,
                marginBottom: "20px",
              }}
            >
              Stop Managing Your Cleaning Company.
            </h2>
            <p
              style={{
                fontFamily: FS,
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              Let Ovaro handle it. Consistent, professional service — with a
              team that actually shows up and a direct line to the people who own
              the business.
            </p>

            {/* Email capture */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <input
                type="email"
                placeholder="Email address"
                style={{
                  fontFamily: FS,
                  fontSize: "0.9rem",
                  padding: "16px 20px",
                  borderRadius: "5px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  minWidth: "260px",
                  flex: "1 1 260px",
                  maxWidth: "320px",
                  backdropFilter: "blur(4px)",
                }}
              />
              <a href="#" className="btn-white">
                Get a Free Quote
              </a>
            </div>

            {/* Promise */}
            <p
              style={{
                fontFamily: FS,
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.04em",
              }}
            >
              Response within 2 hours · No obligation · Austin, TX
            </p>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────── */}
      <footer
        style={{
          background: "var(--green)",
          padding: "72px 24px 40px",
          color: "var(--cream)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Top row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "48px",
              marginBottom: "64px",
            }}
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  fontFamily: FD,
                  fontSize: "1.3rem",
                  color: "var(--cream)",
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                }}
              >
                Ovaro Commercial
              </div>
              <p
                style={{
                  fontFamily: FS,
                  fontSize: "0.825rem",
                  color: "rgba(241,237,226,0.5)",
                  lineHeight: 1.65,
                  maxWidth: "220px",
                }}
              >
                Austin&rsquo;s trusted commercial cleaning company since 2017.
                Family-owned, fully insured, and built on accountability.
              </p>
            </div>

            {/* Services */}
            <div>
              <div
                style={{
                  fontFamily: FS,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(241,237,226,0.4)",
                  marginBottom: "16px",
                }}
              >
                Services
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Janitorial Services",  href: "/services/janitorial" },
                  { label: "Green Cleaning",        href: "/services/green-cleaning" },
                  { label: "Day Porter",            href: "/services/day-porter" },
                  { label: "Post-Construction",     href: "/services/post-construction" },
                  { label: "Deep Cleaning",         href: "/services/deep-cleaning" },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="footer-link">{label}</a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <div
                style={{
                  fontFamily: FS,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(241,237,226,0.4)",
                  marginBottom: "16px",
                }}
              >
                Company
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["About", "Service Areas", "Contact"].map((l) => (
                  <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="footer-link">{l}</a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div
                style={{
                  fontFamily: FS,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(241,237,226,0.4)",
                  marginBottom: "16px",
                }}
              >
                Contact
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  fontFamily: FS,
                  fontSize: "0.875rem",
                  color: "rgba(241,237,226,0.6)",
                  lineHeight: 1.5,
                }}
              >
                <span>Austin, TX &amp; Greater Metro</span>
                <span>Georgetown · Leander · Round Rock</span>
                <span>Pflugerville · Bee Cave · Lakeway</span>
                <a
                  href="mailto:hello@ovarocommercial.com"
                  style={{ color: "var(--blue)", textDecoration: "none" }}
                >
                  hello@ovarocommercial.com
                </a>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.75rem",
                    color: "rgba(241,237,226,0.4)",
                    marginTop: "4px",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                    <path d="M12 2L4 6v6c0 5.25 3.5 9.75 8 11 4.5-1.25 8-5.75 8-11V6L12 2z" />
                  </svg>
                  Licensed &amp; Insured
                </span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid rgba(241,237,226,0.08)",
              paddingTop: "28px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <p
              style={{
                fontFamily: FS,
                fontSize: "0.775rem",
                color: "rgba(241,237,226,0.3)",
              }}
            >
              © 2025 Ovaro Commercial LLC. All rights reserved.
            </p>
            <p
              style={{
                fontFamily: FS,
                fontSize: "0.775rem",
                color: "rgba(241,237,226,0.3)",
              }}
            >
              Commercial Cleaning · Austin, TX · Est. 2017
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
