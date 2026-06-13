import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { NavDropdown } from "../components/NavDropdown";
import { FacilitiesDropdown } from "../components/FacilitiesDropdown";
import { Footer } from "../components/Footer";
import { MobileNav } from "../components/MobileNav";
import { LogoBubble } from "../components/LogoBubble";

export const metadata: Metadata = {
  title: "Contact | Ovaro Commercial",
  description:
    "Get in touch with Ovaro Commercial. Call or email Terrell directly, or fill out our quote form — we respond within 2 hours.",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, 'DM Sans', sans-serif)";

const services = [
  "Office Cleaning",
  "Financial Institution",
  "Retail Location",
  "Hotel",
  "Construction Site",
  "Place of Prayer",
  "Fitness Center",
  "Educational Facility",
  "Other",
];

export default function ContactPage() {
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
              <a key={label} href={href} className="nav-link" style={{ fontFamily: FS, ...(label === "Contact" ? { color: "var(--blue)" } : {}) }}>
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

      {/* ── Split layout — cream left / white right ── */}
      <div style={{ display: "flex", minHeight: "100svh", paddingTop: "68px", flexWrap: "wrap" }}>

        {/* ═══ LEFT — Cream ═══ */}
        <div
          className="w-full lg:w-auto"
          style={{
            background: "var(--cream)",
            flex: "1 1 400px",
            display: "flex",
            justifyContent: "flex-end",
            borderRight: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "560px", width: "100%", padding: "72px 48px 72px 24px" }}>

            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px", fontFamily: FS, fontSize: "0.8rem", color: "var(--green)", opacity: 0.45 }}>
              <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "var(--blue)", opacity: 1 }}>Contact</span>
            </div>

            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
              <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                Get In Touch
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: FD, fontSize: "clamp(2.8rem, 5vw, 4.75rem)", letterSpacing: "-0.025em", color: "var(--green)", lineHeight: 0.95, marginBottom: "20px" }}>
              Let&rsquo;s talk<br />
              <span style={{ color: "var(--blue)" }}>clean spaces.</span>
            </h1>

            <p style={{ fontFamily: FS, fontSize: "1rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, marginBottom: "48px", maxWidth: "400px" }}>
              Reach out directly or fill out the form — either way, you&rsquo;ll hear from us within 2 hours. No sales scripts, no runaround. Just a straight answer from the people who do the work.
            </p>

            {/* ── Contact widgets ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>

              {/* Phone */}
              <a href="tel:2109046974" className="contact-widget phone-widget">
                <div className="widget-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 11.5a19.79 19.79 0 01-3.07-8.7A2 2 0 012.81 1h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 8.9a16 16 0 006 6l.96-.97a2 2 0 012.11-.44c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: FS, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--green)", opacity: 0.4, marginBottom: "3px" }}>
                    Phone
                  </div>
                  <div style={{ fontFamily: FD, fontSize: "1.45rem", letterSpacing: "-0.01em", color: "var(--green)", lineHeight: 1 }}>
                    (210) 904-6974
                  </div>
                  <div className="widget-cta" style={{ fontFamily: FS, marginTop: "5px" }}>
                    Tap to call →
                  </div>
                </div>
                {/* Live dot */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", alignSelf: "flex-start" }}>
                  <div className="status-dot" />
                  <span style={{ fontFamily: FS, fontSize: "0.68rem", color: "var(--green)", opacity: 0.35, fontWeight: 600 }}>Available</span>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:terrell@ovarocommercial.com" className="contact-widget email-widget">
                <div className="widget-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: FS, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--green)", opacity: 0.4, marginBottom: "3px" }}>
                    Email
                  </div>
                  <div style={{ fontFamily: FD, fontSize: "1.2rem", letterSpacing: "-0.01em", color: "var(--green)", lineHeight: 1 }}>
                    terrell@ovarocommercial.com
                  </div>
                  <div className="widget-cta" style={{ fontFamily: FS, marginTop: "5px" }}>
                    Send a message →
                  </div>
                </div>
              </a>

            </div>

            {/* ── Response guarantee ── */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "16px 20px",
              borderRadius: "10px",
              background: "rgba(105,150,173,0.07)",
              border: "1px solid var(--border-blue)",
              maxWidth: "380px",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 7v5l3 3"/>
              </svg>
              <div>
                <div style={{ fontFamily: FS, fontSize: "0.78rem", fontWeight: 700, color: "var(--green)", marginBottom: "1px" }}>
                  2-Hour Response Guarantee
                </div>
                <div style={{ fontFamily: FS, fontSize: "0.72rem", color: "var(--green)", opacity: 0.5 }}>
                  Every quote request, every time.
                </div>
              </div>
            </div>

            {/* Location note */}
            <div style={{ marginTop: "32px", display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span style={{ fontFamily: FS, fontSize: "0.8rem", color: "var(--green)", opacity: 0.4 }}>
                Serving Greater Austin, TX &mdash; Est. 2017
              </span>
            </div>

          </div>
        </div>

        {/* ═══ RIGHT — White (Form) ═══ */}
        <div
          style={{
            background: "var(--white)",
            flex: "1 1 400px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ maxWidth: "560px", width: "100%", padding: "72px 24px 72px 48px" }}>

            <div style={{ marginBottom: "40px" }}>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", letterSpacing: "-0.02em", color: "var(--green)", lineHeight: 1.05, marginBottom: "10px" }}>
                Request a Free Quote
              </h2>
              <p style={{ fontFamily: FS, fontSize: "0.9rem", color: "var(--green)", opacity: 0.5, lineHeight: 1.65 }}>
                Tell us about your space and we&rsquo;ll put together a custom cleaning plan — no obligation.
              </p>
            </div>

            <ContactForm services={services} />
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
