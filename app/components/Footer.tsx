import Link from "next/link";
const FD = "var(--font-display)";
const FS = "var(--font-sans, 'DM Sans', sans-serif)";

const services = [
  { label: "Janitorial Services",  href: "/services/janitorial" },
  { label: "Green Cleaning",       href: "/services/green-cleaning" },
  { label: "Day Porter",           href: "/services/day-porter" },
  { label: "Post-Construction",    href: "/services/post-construction" },
  { label: "Deep Cleaning",        href: "/services/deep-cleaning" },
];

const facilities = [
  { label: "Office Cleaning",        href: "/facilities-served/office-cleaning" },
  { label: "Financial Institutions", href: "/facilities-served/financial-institutions" },
  { label: "Retail Locations",       href: "/facilities-served/retail-locations" },
  { label: "Hotels",                 href: "/facilities-served/hotels" },
  { label: "Construction Sites",     href: "/facilities-served/construction-sites" },
  { label: "Places of Prayer",       href: "/facilities-served/places-of-prayer" },
  { label: "Fitness Centers",        href: "/facilities-served/fitness-centers" },
  { label: "Educational Facilities", href: "/facilities-served/educational-facilities" },
];

const company = [
  { label: "About",         href: "/#about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact",       href: "/contact" },
  { label: "Get a Quote",   href: "/get-a-quote" },
];

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: FS, fontSize: "0.68rem", fontWeight: 700,
      letterSpacing: "0.16em", textTransform: "uppercase",
      color: "rgba(241,237,226,0.35)", marginBottom: "14px",
    }}>
      {children}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="footer-link"
      style={{ fontFamily: FS, fontSize: "0.875rem", display: "block", marginBottom: "10px" }}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--green)" }}>

      {/* ── Main content ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "72px 24px 0" }}>

        {/* Top: brand block + link columns */}
        <div className="footer-top">

          {/* Brand block */}
          <div className="footer-brand">
            <Link href="/" style={{ fontFamily: FD, fontSize: "1.5rem", letterSpacing: "-0.01em", color: "var(--cream)", textDecoration: "none", display: "inline-block", marginBottom: "14px" }}>
              Ovaro Commercial
            </Link>
            <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "rgba(241,237,226,0.5)", lineHeight: 1.7, marginBottom: "22px", maxWidth: "300px" }}>
              Austin&rsquo;s trusted commercial cleaning company since 2017 — family-owned, fully insured, and built on accountability.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
              <a href="tel:2109046974" style={{ fontFamily: FD, fontSize: "1.2rem", letterSpacing: "-0.01em", color: "var(--cream)", textDecoration: "none" }}>
                (210) 904-6974
              </a>
              <a href="mailto:terrell@ovarocommercial.com" style={{ fontFamily: FS, fontSize: "0.875rem", color: "rgba(105,150,173,0.9)", textDecoration: "none" }}>
                terrell@ovarocommercial.com
              </a>
            </div>

            {/* Trust badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "20px", border: "1px solid rgba(241,237,226,0.15)", background: "rgba(241,237,226,0.04)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(105,150,173,0.95)" strokeWidth="1.6" strokeLinejoin="round">
                <path d="M12 2L4 6v6c0 5.25 3.5 9.75 8 11 4.5-1.25 8-5.75 8-11V6L12 2z" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" />
              </svg>
              <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.05em", color: "rgba(241,237,226,0.72)" }}>
                Licensed · Bonded · Insured
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <ColLabel>Services</ColLabel>
            {services.map(({ label, href }) => <FooterLink key={label} href={href}>{label}</FooterLink>)}
          </div>

          {/* Facilities */}
          <div>
            <ColLabel>Facilities</ColLabel>
            {facilities.map(({ label, href }) => <FooterLink key={label} href={href}>{label}</FooterLink>)}
          </div>

          {/* Company */}
          <div>
            <ColLabel>Company</ColLabel>
            {company.map(({ label, href }) => <FooterLink key={label} href={href}>{label}</FooterLink>)}
          </div>

        </div>

        {/* Service-area line */}
        <div style={{ marginTop: "52px", paddingTop: "28px", borderTop: "1px solid rgba(241,237,226,0.08)" }}>
          <div style={{ fontFamily: FS, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(241,237,226,0.35)", marginBottom: "10px" }}>
            Proudly Serving Greater Austin
          </div>
          <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "rgba(241,237,226,0.55)", lineHeight: 1.7, margin: 0 }}>
            Austin &nbsp;·&nbsp; Round Rock &nbsp;·&nbsp; Georgetown &nbsp;·&nbsp; Leander &nbsp;·&nbsp; Bee Cave &nbsp;·&nbsp; Lakeway &nbsp;·&nbsp; Pflugerville &nbsp;·&nbsp; Manor
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(241,237,226,0.06)", marginTop: "48px", padding: "20px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }} className="footer-bottom-bar">
          <p style={{ fontFamily: FS, fontSize: "0.75rem", color: "rgba(241,237,226,0.28)" }}>
            © {new Date().getFullYear()} Ovaro Commercial LLC. All rights reserved.
          </p>
          <p style={{ fontFamily: FS, fontSize: "0.75rem", color: "rgba(241,237,226,0.28)" }}>
            Commercial Cleaning &nbsp;·&nbsp; Austin, TX &nbsp;·&nbsp; Est. 2017
          </p>
        </div>
      </div>

    </footer>
  );
}
