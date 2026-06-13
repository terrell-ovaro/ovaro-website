import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { NavDropdown } from "../../components/NavDropdown";
import { FacilitiesDropdown } from "../../components/FacilitiesDropdown";
import { Footer } from "../../components/Footer";
import { MobileNav } from "../../components/MobileNav";
import { LogoBubble } from "../../components/LogoBubble";

export const metadata: Metadata = {
  title: "Deep Cleaning | Ovaro Commercial",
  description:
    "Intensive top-to-bottom commercial deep cleaning in Austin, TX. We clean what routine maintenance skips — grout, vents, equipment, baseboards, and every surface in between.",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, 'DM Sans', sans-serif)";

const impact = [
  {
    heading: "What Accumulates",
    sub: "Between routine visits",
    body: "Grease builds behind appliances. Grout darkens. Vents collect layers of dust. Baseboards gather grime. Upholstery holds odors. None of it shows up on a regular cleaning checklist — but all of it affects how your space looks, smells, and feels to the people in it.",
  },
  {
    heading: "What Gets Missed",
    sub: "On every standard visit",
    body: "Under desks, behind equipment, inside cabinet doors, on top of shelving, inside refrigerator seals, along window tracks — routine cleaning is surface-level by design. Deep cleaning is the correction.",
  },
  {
    heading: "What Changes After",
    sub: "Following an Ovaro deep clean",
    body: "Your team notices. Your clients notice. Floors look restored. Restrooms smell genuinely clean. Common areas feel different. A deep clean isn't about making things look clean — it's about making them actually be clean.",
  },
];

const coverage = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Floors & Grout",
    desc: "Deep scrubbing, degreasing, and grout restoration across all floor types. Hard surfaces stripped and resealed where needed. Carpet deep-extracted and deodorized.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Kitchen & Break Room",
    desc: "Appliance interiors and exteriors degreased, drains cleared, inside cabinet doors wiped, undersides of counters cleaned — the areas that daily cleaning never reaches.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Restroom Restoration",
    desc: "Grout lines scrubbed, tile descaled, fixtures disassembled and deodorized, full disinfection behind and beneath every fixture. Leaves restrooms genuinely sanitized.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Windows & Glass",
    desc: "Interior and exterior glass deep cleaned — tracks, frames, seals, and sills included. Hard water stains and film removed from surfaces that standard cleaning skips.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1010 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
      </svg>
    ),
    title: "Vents & Air Returns",
    desc: "HVAC registers, vents, and air returns cleaned of accumulated dust and debris — improving air quality and preventing the redistribution of particles every time the system runs.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
    title: "Walls & Baseboards",
    desc: "Scuff marks, smudges, grease buildup, and accumulated grime wiped from walls, baseboards, door frames, and trim — the background details that define how clean a space actually feels.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Furniture & Upholstery",
    desc: "Fabric seating vacuumed and spot treated. Hard furniture undersides, legs, and frames cleaned. Cushions deodorized. The spaces under and behind furniture reached and addressed.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14" /><path d="M4.93 4.93a10 10 0 000 14.14" />
      </svg>
    ),
    title: "Equipment & Appliances",
    desc: "Commercial equipment, copiers, break room appliances, and shared devices cleaned inside and out — contact surfaces disinfected and hard-to-clean areas addressed.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Final Detail Walkthrough",
    desc: "Before we finish, we walk every room and check every surface. Light fixtures, switch plates, door handles, shelving tops — nothing is left unaddressed before we hand the space back.",
  },
];

const occasions = [
  {
    icon: "🗓️",
    title: "Seasonal Reset",
    freq: "Quarterly recommended",
    desc: "Every 90 days, accumulated grime reaches a threshold that routine cleaning can't reverse. A quarterly deep clean resets your space to a standard that daily maintenance can actually sustain.",
  },
  {
    icon: "🔑",
    title: "Pre-Opening Preparation",
    freq: "Before first day of business",
    desc: "Before your team or clients set foot in a new or newly renovated space, a deep clean ensures the environment is genuinely ready — not just swept and mopped.",
  },
  {
    icon: "⚡",
    title: "Post-Event or Heavy Use",
    freq: "After conferences, events, or peak periods",
    desc: "High-occupancy events leave a mark on floors, restrooms, furniture, and surfaces that regular service can't fully address. A deep clean restores everything to standard.",
  },
];

const differentiators = [
  {
    num: "01",
    title: "Time-Blocked Scheduling",
    desc: "Deep cleaning requires access and uninterrupted time. We schedule around your off-hours, weekends, or between tenancies so your operation is never impacted.",
  },
  {
    num: "02",
    title: "Area-by-Area Accountability",
    desc: "We work through your space room by room, with a detailed scope for each area. Nothing is rushed, nothing is skipped — every zone is signed off before we move on.",
  },
  {
    num: "03",
    title: "Right Products for Every Surface",
    desc: "Not every surface responds to the same treatment. Our team uses surface-specific cleaners, tools, and techniques to protect your finishes while eliminating what's built up.",
  },
  {
    num: "04",
    title: "A Lasting Result",
    desc: "A deep clean done properly sets a new baseline — one that makes every routine maintenance visit more effective. It&rsquo;s not just a one-time refresh. It&rsquo;s a reset.",
  },
];

export default function DeepCleaningPage() {
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
              { label: "About",             href: "/#about" },
              { label: "Service Areas",     href: "/service-areas" },
              { label: "Contact",           href: "/contact" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="nav-link" style={{ fontFamily: FS }}>
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
        <section style={{ background: "var(--cream)", padding: "80px 24px 80px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", minHeight: "300px" }}>

            <div style={{ maxWidth: "580px" }}>

              {/* Breadcrumb */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px", fontFamily: FS, fontSize: "0.8rem", color: "var(--green)", opacity: 0.5 }}>
                <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
                <span>/</span>
                <Link href="/services" style={{ textDecoration: "none", color: "inherit" }}>Services</Link>
                <span>/</span>
                <span style={{ color: "var(--blue)", opacity: 1 }}>Deep Cleaning</span>
              </div>

              {/* Label */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                  Intensive Clean
                </span>
              </div>

              {/* Headline */}
              <h1 style={{ fontFamily: FD, fontSize: "clamp(2.5rem, 5vw, 4.75rem)", letterSpacing: "-0.025em", color: "var(--green)", lineHeight: 0.95, marginBottom: "24px" }}>
                Surface Clean<br />
                Is Not{" "}
                <span style={{ color: "var(--blue)" }}>Actually Clean.</span>
              </h1>

              <p style={{ fontFamily: FS, fontSize: "1.05rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.75, margin: 0 }}>
                Routine maintenance keeps your space presentable. Deep cleaning makes it genuinely clean — reaching the grout lines, the vents, the baseboards, the appliance interiors, and every surface that accumulates grime between standard visits. This is the reset your facility needs.
              </p>

              {/* Trust chips */}
              <div style={{ display: "flex", flexWrap: "nowrap", gap: "8px", marginTop: "28px" }}>
                {["Top-to-Bottom", "All Areas", "Every Surface"].map((chip) => (
                  <span key={chip} style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Insured & Bonded badge */}
            <div className="hidden md:block" style={{ position: "absolute", top: "16px", right: "0", width: "280px" }}>
              <div className="cred-card float" style={{ padding: "32px 24px" }}>
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
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div style={{ fontFamily: FD, fontSize: "1.4rem", letterSpacing: "-0.015em", color: "var(--green)", lineHeight: 1.1, marginBottom: "6px" }}>Insured &amp; Bonded</div>
                  <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, letterSpacing: "0.04em" }}>Licensed in the State of Texas</div>
                </div>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { cls: "check-pop-1", text: "General liability coverage" },
                    { cls: "check-pop-2", text: "Bonded — every team member" },
                    { cls: "check-pop-3", text: "Licensed — State of Texas" },
                  ].map(({ cls, text }) => (
                    <div key={text} className={cls} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6l3 3 5-5" /></svg>
                      </div>
                      <span style={{ fontFamily: FS, fontSize: "0.8rem", color: "var(--green)", opacity: 0.75 }}>{text}</span>
                    </div>
                  ))}
                </div>
                <div style={{ height: "1px", background: "var(--border)", margin: "18px 0 14px" }} />
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontFamily: FS, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--green)", opacity: 0.3 }}>
                    Est. 2017 &nbsp;·&nbsp; Austin, TX
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Hero Photo ── */}
        <div className="photo-strip">
          <Image
            src="/images/Janitorial 10.webp"
            alt="Commercial cleaner performing detailed deep cleaning in an Austin facility"
            fill
            sizes="(max-width: 1028px) 100vw, 980px"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(27,61,47,0.03), rgba(27,61,47,0.10))" }} />
        </div>

        {/* ── The Reality Section ── */}
        <section style={{ background: "var(--white)", padding: "96px 24px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>The Reality</span>
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                What routine cleaning can&rsquo;t fix.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              {impact.map((item) => (
                <div key={item.heading} style={{
                  padding: "40px 36px",
                  borderRadius: "12px",
                  background: "var(--cream)",
                  border: "1px solid var(--border)",
                  transition: "box-shadow 0.24s ease, transform 0.24s ease",
                }} className="service-card">
                  <div style={{ fontFamily: FS, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "10px" }}>
                    {item.sub}
                  </div>
                  <h3 style={{ fontFamily: FD, fontSize: "1.75rem", letterSpacing: "-0.015em", color: "var(--green)", lineHeight: 1.1, marginBottom: "16px" }}>
                    {item.heading}
                  </h3>
                  <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                  <p style={{ fontFamily: FS, fontSize: "0.9rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.8, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What We Address ── */}
        <section style={{ background: "var(--cream)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>Every Area</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "end" }}>
                <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                  We go where routine cleaning stops.
                </h2>
                <p style={{ fontFamily: FS, fontSize: "0.95rem", color: "var(--green)", opacity: 0.55, lineHeight: 1.75, margin: 0 }}>
                  A comprehensive deep clean covers nine distinct areas of your facility — each treated with the time, products, and technique the job actually requires.
                </p>
              </div>
            </div>

            <div className="mobile-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {coverage.map((item) => (
                <div key={item.title} className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.15rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── When to Schedule ── */}
        <section style={{ background: "var(--white)", padding: "96px 24px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>When To Book</span>
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                Three moments that call for a deep clean.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              {occasions.map((o) => (
                <div key={o.title} className="service-card">
                  <div style={{ fontSize: "2.25rem", marginBottom: "20px", lineHeight: 1 }}>{o.icon}</div>
                  <h3 style={{ fontFamily: FD, fontSize: "1.75rem", letterSpacing: "-0.015em", color: "var(--green)", lineHeight: 1.1, marginBottom: "6px" }}>
                    {o.title}
                  </h3>
                  <div style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "16px" }}>
                    {o.freq}
                  </div>
                  <div style={{ height: "1px", background: "var(--border)", marginBottom: "16px" }} />
                  <p style={{ fontFamily: FS, fontSize: "0.9rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.75, margin: 0 }}>
                    {o.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Ovaro ── */}
        <section style={{ background: "var(--cream)", padding: "96px 24px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>Why Ovaro</span>
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                The detail that makes it different.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0" }}>
              {differentiators.map((d, i) => (
                <div key={d.num} style={{ padding: "36px 40px 36px 0", paddingLeft: i > 0 ? "40px" : "0", borderLeft: i > 0 ? "1px solid var(--border)" : "none" }}>
                  <div style={{ fontFamily: FD, fontSize: "4rem", letterSpacing: "-0.03em", color: "rgba(105,150,173,0.12)", lineHeight: 1, marginBottom: "12px" }}>{d.num}</div>
                  <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                  <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>{d.title}</h3>
                  <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section style={{ background: "var(--blue)", padding: "88px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.022em", color: "#fff", lineHeight: 1.0, marginBottom: "16px" }}>
              Time to reset your space.
            </h2>
            <p style={{ fontFamily: FS, fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "36px" }}>
              Tell us about your facility and we&rsquo;ll build a deep clean scope around it — every area, every surface, on your schedule. Response within 2 hours, no obligation.
            </p>
            <Link href="/get-a-quote" className="btn-white">Get a Free Quote</Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
