import Link from "next/link";
/* Ovaro Commercial — Home Page
   Section order (per CLAUDE.md): Hero → Trust signals → Services → How it works → Testimonials → CTA band
   Primary goal: quote form submissions */

import type { Metadata } from "next";
import Image from "next/image";
import { NavDropdown } from "./components/NavDropdown";
import { FacilitiesDropdown } from "./components/FacilitiesDropdown";
import { MobileNav } from "./components/MobileNav";
import { LogoBubble } from "./components/LogoBubble";
import { Footer } from "./components/Footer";
import { LocalBusinessSchema } from "./components/LocalBusinessSchema";

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

// Verifiable commitments shown in the social-proof slot until real Google
// reviews are live. Every claim here is factual — nothing fabricated.
const commitments = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-6.219-8.56" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "The same crew, every visit",
    body: "No rotating strangers and no surprises. You get a consistent, trained team that learns your space and holds the standard on every scheduled visit.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "A direct line to ownership",
    body: "When you call Ovaro, you reach the family that runs it — not a call center or a ticket queue. Problems get answered the same day, by someone accountable.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 6v6c0 5.25 3.5 9.75 8 11 4.5-1.25 8-5.75 8-11V6L12 2z" />
      </svg>
    ),
    title: "Licensed, bonded & insured",
    body: "Family-owned and operated in Austin since 2017, fully covered on every visit, with a guaranteed 2-hour response on every quote request.",
  },
];

/* ── Component ─────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
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
          <Link href="/get-a-quote" className="btn-primary nav-cta-desktop" style={{ padding: "10px 22px", fontSize: "0.875rem" }}>
            Get a Quote
          </Link>
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
              <span className="hero-overline-text" style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue)", whiteSpace: "nowrap" }}>
                Commercial Cleaning · Austin, TX · Est. 2017
              </span>
            </div>

            {/* Left text + circle: flex row centered on the full text block */}
            <div style={{ display: "flex", alignItems: "center", gap: "56px", flexWrap: "wrap" }}>

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
                  <Link href="/get-a-quote" className="btn-primary">
                    Get a Free Quote{" "}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                  <Link href="/services" className="btn-ghost">Our Services</Link>
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

              {/* Hero photo — right (stacks below text on mobile/tablet) */}
              <div
                className="e2 float hero-photo"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: "460px" }}
              >
                <div className="hero-photo-inner" style={{ position: "relative", width: "420px", height: "520px", borderRadius: "14px", overflow: "hidden", boxShadow: "0 24px 72px rgba(27,61,47,0.16), 0 4px 16px rgba(27,61,47,0.08)" }}>
                  <Image
                    src="/images/Team Portrait 1.webp"
                    alt="The Ovaro Commercial team — friendly, professional cleaners serving Austin businesses"
                    fill
                    priority
                    sizes="(max-width: 1023px) 480px, 420px"
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                  />
                  {/* Glass badge overlay */}
                  <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px", background: "rgba(255,255,255,0.92)", borderRadius: "10px", padding: "14px 18px", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                    <div style={{ fontFamily: FS, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "3px" }}>
                      9 Years Serving Austin Businesses
                    </div>
                    <div style={{ fontFamily: FS, fontSize: "0.78rem", color: "var(--green)", opacity: 0.65 }}>
                      Licensed · Bonded · Family-Owned Since 2017
                    </div>
                  </div>
                </div>
              </div>{/* end photo wrapper */}
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
              <Link
                href="/facilities-served"
                className="btn-ghost"
                style={{ gap: "8px", paddingLeft: "36px", paddingRight: "36px" }}
              >
                More Facilities
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
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

        {/* ── About / Our Story ───────────────────── */}
        <section
          id="about"
          style={{
            background: "var(--green)",
            padding: "112px 0",
            borderTop: "1px solid var(--border)",
            scrollMarginTop: "68px",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <div
              className="about-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
            >

              {/* Photo */}
              <div
                className="about-photo"
                style={{ position: "relative", width: "100%", height: "520px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 24px 72px rgba(0,0,0,0.28)" }}
              >
                <Image
                  src="/images/Janitorial 9.jpg"
                  alt="The Ovaro Commercial team at work in an Austin office"
                  fill
                  sizes="(max-width: 900px) 100vw, 600px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>

              {/* Story */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                  <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                    Our Story
                  </span>
                </div>

                <h2 style={{ fontFamily: FD, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", letterSpacing: "-0.025em", color: "var(--cream)", lineHeight: 1.0, marginBottom: "28px" }}>
                  Family-owned.<br />
                  <span style={{ color: "var(--blue)" }}>Personally accountable.</span>
                </h2>

                <p style={{ fontFamily: FS, fontSize: "1.05rem", color: "var(--cream)", opacity: 0.78, lineHeight: 1.8, marginBottom: "20px" }}>
                  We started Ovaro in 2017 after hearing the same complaints from
                  Austin office managers and financial institutions, over and over:
                  corporate cleaning companies that under-delivered, went silent when
                  something went wrong, and treated their buildings like a number on
                  a route sheet.
                </p>
                <p style={{ fontFamily: FS, fontSize: "1.05rem", color: "var(--cream)", opacity: 0.78, lineHeight: 1.8, marginBottom: "36px" }}>
                  So we built the opposite. Nine years later, we&rsquo;re still
                  family-owned and operated — with consistent crews, clear standards,
                  and a direct line to the people who own the business. When you call
                  Ovaro, you reach someone who actually cares whether the job was done
                  right.
                </p>

                {/* Value points */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
                  {[
                    { title: "Consistency you can set a clock by", body: "The same trained crew, the same standard, every single visit." },
                    { title: "Communication that doesn't go dark", body: "A direct line to ownership — not a call center or a ticket queue." },
                    { title: "Accountability for the details", body: "Clear checklists and follow-through, so nothing gets skipped." },
                  ].map((v) => (
                    <div key={v.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <span style={{ flexShrink: 0, marginTop: "2px", color: "var(--blue)" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="8 12 11 15 16 9" />
                        </svg>
                      </span>
                      <div>
                        <div style={{ fontFamily: FS, fontSize: "0.95rem", fontWeight: 600, color: "var(--cream)", marginBottom: "2px" }}>{v.title}</div>
                        <div style={{ fontFamily: FS, fontSize: "0.9rem", color: "var(--cream)", opacity: 0.6, lineHeight: 1.6 }}>{v.body}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/get-a-quote" className="btn-white">
                  Get a Free Quote{" "}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>

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
                  The Ovaro Standard
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
                What you can count on.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {commitments.map((c, i) => (
                <div key={i} className="tcard">
                  {/* Icon */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "var(--blue-subtle)",
                      border: "1px solid var(--border-blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    {c.icon}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: FD,
                      fontSize: "1.35rem",
                      letterSpacing: "-0.015em",
                      color: "var(--green)",
                      lineHeight: 1.15,
                      marginBottom: "12px",
                    }}
                  >
                    {c.title}
                  </h3>

                  {/* Body */}
                  <p
                    style={{
                      fontFamily: FS,
                      fontSize: "0.925rem",
                      color: "var(--green)",
                      opacity: 0.7,
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {c.body}
                  </p>
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

            {/* Email capture — carries the typed email to the quote form */}
            <form
              action="/get-a-quote"
              method="get"
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
                name="email"
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
              <button type="submit" className="btn-white">
                Get a Free Quote
              </button>
            </form>

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

      <Footer />
    </>
  );
}
