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
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 24px 0" }}>

        {/* Brand strip — always full width */}
        <div style={{ paddingBottom: "40px", borderBottom: "1px solid rgba(241,237,226,0.08)", marginBottom: "40px" }}>
          <Link href="/" style={{ fontFamily: FD, fontSize: "1.4rem", letterSpacing: "-0.01em", color: "var(--cream)", textDecoration: "none", display: "block", marginBottom: "8px" }}>
            Ovaro Commercial
          </Link>
          <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "rgba(241,237,226,0.5)", lineHeight: 1.6, marginBottom: "18px", maxWidth: "340px" }}>
            Family-owned commercial cleaning, serving Greater Austin since 2017.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
            <a href="tel:2109046974" style={{ fontFamily: FS, fontSize: "0.9rem", color: "rgba(241,237,226,0.75)", textDecoration: "none" }}>
              (210) 904-6974
            </a>
            <span style={{ color: "rgba(241,237,226,0.2)" }}>·</span>
            <a href="mailto:terrell@ovarocommercial.com" style={{ fontFamily: FS, fontSize: "0.9rem", color: "rgba(105,150,173,0.85)", textDecoration: "none" }}>
              terrell@ovarocommercial.com
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-cols">

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
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(241,237,226,0.06)", marginTop: "48px", padding: "20px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }} className="footer-bottom-bar">
          <p style={{ fontFamily: FS, fontSize: "0.75rem", color: "rgba(241,237,226,0.28)" }}>
            © 2025 Ovaro Commercial LLC. All rights reserved.
          </p>
          <p style={{ fontFamily: FS, fontSize: "0.75rem", color: "rgba(241,237,226,0.28)" }}>
            Licensed &amp; Insured &nbsp;·&nbsp; Austin, TX &nbsp;·&nbsp; Est. 2017
          </p>
        </div>
      </div>

    </footer>
  );
}
