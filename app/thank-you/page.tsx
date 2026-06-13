import type { Metadata } from "next";
import Link from "next/link";
import { NavDropdown } from "../components/NavDropdown";
import { FacilitiesDropdown } from "../components/FacilitiesDropdown";
import { Footer } from "../components/Footer";
import { MobileNav } from "../components/MobileNav";
import { LogoBubble } from "../components/LogoBubble";

export const metadata: Metadata = {
  title: "Thank You | Ovaro Commercial",
  description: "Your quote request has been received. We respond within 2 hours during business hours.",
  // Confirmation pages should never be indexed.
  robots: { index: false, follow: false },
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, 'DM Sans', sans-serif)";

const nextSteps = [
  {
    num: "01",
    title: "We review your request",
    desc: "A member of our team reads through the details of your space, schedule, and needs — personally, not through a queue.",
  },
  {
    num: "02",
    title: "You hear back within 2 hours",
    desc: "During business hours, we respond within 2 hours with a clear, no-obligation quote tailored to your facility.",
  },
  {
    num: "03",
    title: "We build your plan together",
    desc: "If it's a fit, we set up a walkthrough and a cleaning schedule that works around your operation — no contracts to trap you.",
  },
];

export default function ThankYouPage() {
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

        {/* ── Confirmation hero ── */}
        <section style={{ background: "var(--cream)", padding: "96px 24px 80px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>

            {/* Check badge */}
            <div
              style={{
                width: "76px", height: "76px", borderRadius: "50%",
                background: "var(--blue-subtle)", border: "1px solid var(--border-blue)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 28px",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
              <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                Request Received
              </span>
              <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
            </div>

            <h1 style={{ fontFamily: FD, fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.025em", color: "var(--green)", lineHeight: 1.0, marginBottom: "20px" }}>
              Thank you — we&rsquo;ve<br />
              <span style={{ color: "var(--blue)" }}>got your request.</span>
            </h1>

            <p style={{ fontFamily: FS, fontSize: "1.1rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.75, marginBottom: "36px", maxWidth: "540px", marginLeft: "auto", marginRight: "auto" }}>
              We&rsquo;ll respond within 2 hours during business hours with a custom,
              no-obligation quote. Keep an eye on your inbox — and your phone.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              <Link href="/" className="btn-primary">
                Back to Home{" "}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link href="/services" className="btn-ghost">Explore Our Services</Link>
            </div>
          </div>
        </section>

        {/* ── What happens next ── */}
        <section style={{ background: "var(--white)", padding: "88px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ marginBottom: "48px", textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>What Happens Next</span>
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                Here&rsquo;s how this goes.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {nextSteps.map((s) => (
                <div key={s.num} style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px 28px" }}>
                  <div style={{ fontFamily: FD, fontSize: "1.6rem", color: "var(--blue)", marginBottom: "14px" }}>{s.num}</div>
                  <div style={{ fontFamily: FS, fontSize: "1.05rem", fontWeight: 600, color: "var(--green)", marginBottom: "8px" }}>{s.title}</div>
                  <div style={{ fontFamily: FS, fontSize: "0.92rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            {/* Direct contact line */}
            <div style={{ marginTop: "48px", textAlign: "center" }}>
              <p style={{ fontFamily: FS, fontSize: "0.95rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7 }}>
                Need to reach us sooner? Call{" "}
                <a href="tel:2109046974" style={{ color: "var(--blue)", textDecoration: "none", fontWeight: 600 }}>(210) 904-6974</a>
                {" "}or email{" "}
                <a href="mailto:terrell@ovarocommercial.com" style={{ color: "var(--blue)", textDecoration: "none", fontWeight: 600 }}>terrell@ovarocommercial.com</a>.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
