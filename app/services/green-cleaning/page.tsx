import type { Metadata } from "next";
import { NavDropdown } from "../../components/NavDropdown";
import { FacilitiesDropdown } from "../../components/FacilitiesDropdown";
import { Footer } from "../../components/Footer";
import { MobileNav } from "../../components/MobileNav";
import { LogoBubble } from "../../components/LogoBubble";

export const metadata: Metadata = {
  title: "Green Cleaning | Ovaro Commercial",
  description:
    "Eco-friendly commercial cleaning services in Austin, TX. Low-toxicity, environmentally responsible products that protect your staff, clients, and space — without compromising on results.",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, 'DM Sans', sans-serif)";

const coverage = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" /><path d="M12 8c-2 0-4 1-5 3s-1 4 1 5" /><path d="M15 9c1 1.5 1 3.5 0 5" />
      </svg>
    ),
    title: "Low-Toxicity Products",
    desc: "Every cleaning agent we use is selected for effectiveness and safety — free from harsh chemicals, synthetic fragrances, and compounds that degrade indoor air quality.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Indoor Air Quality",
    desc: "Conventional cleaners release VOCs that linger long after the team leaves. Our green formulas break down safely, leaving your space genuinely fresh — not just scented.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Safe for Sensitive Spaces",
    desc: "Ideal for healthcare offices, wellness studios, daycares, and schools where chemical exposure is a genuine concern for staff, clients, and visitors.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" />
      </svg>
    ),
    title: "Biodegradable Solutions",
    desc: "The products we use break down naturally, reducing environmental impact beyond your building — from your drains to the water supply.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "No Compromise on Clean",
    desc: "Green doesn't mean less effective. Our products are rigorously selected to match or exceed the disinfecting and cleaning power of conventional alternatives.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6M9 13h6M9 17h4" />
      </svg>
    ),
    title: "Full Transparency",
    desc: "We'll tell you exactly what products we use and why. No mystery chemicals, no undisclosed ingredients — just honest, informed cleaning.",
  },
];

const benefits = [
  {
    stat: "Better",
    label: "Indoor Air Quality",
    desc: "Staff report fewer headaches, allergy flare-ups, and respiratory issues when harsh chemical cleaners are removed from their daily environment.",
  },
  {
    stat: "Lower",
    label: "Chemical Exposure",
    desc: "Your team, clients, and visitors spend hours in your space. Green cleaning reduces cumulative exposure to compounds linked to long-term health concerns.",
  },
  {
    stat: "Equal",
    label: "Cleaning Results",
    desc: "The most common concern we hear — and the first thing clients stop worrying about. Our green program delivers the same thorough results as conventional cleaning.",
  },
];

const differentiators = [
  {
    num: "01",
    title: "Product Transparency",
    desc: "We share exactly what we use — no proprietary blends or undisclosed chemicals. You always know what's going into your space and why it was chosen.",
  },
  {
    num: "02",
    title: "Trained for Green",
    desc: "Green cleaning requires different application techniques to maximize effectiveness. Our team is specifically trained for eco-friendly protocols — not just handed different bottles.",
  },
  {
    num: "03",
    title: "No Scent Cover-Ups",
    desc: "We don't mask problems with heavy fragrances. Clean means clean — and after our team is done, your space will feel that way without the chemical aftermath.",
  },
  {
    num: "04",
    title: "Seamless Transition",
    desc: "Switching to green cleaning doesn't disrupt your schedule or require any changes on your end. We handle the product swap; you just show up to a cleaner space.",
  },
];

export default function GreenCleaningPage() {
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

            <div style={{ maxWidth: "580px" }}>

              {/* Breadcrumb */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px", fontFamily: FS, fontSize: "0.8rem", color: "var(--green)", opacity: 0.5 }}>
                <a href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</a>
                <span>/</span>
                <a href="/services" style={{ textDecoration: "none", color: "inherit" }}>Services</a>
                <span>/</span>
                <span style={{ color: "var(--blue)", opacity: 1 }}>Green Cleaning</span>
              </div>

              {/* Label */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                  Eco-Friendly Service
                </span>
              </div>

              {/* Headline */}
              <h1 style={{ fontFamily: FD, fontSize: "clamp(2.5rem, 5vw, 4.75rem)", letterSpacing: "-0.025em", color: "var(--green)", lineHeight: 0.95, marginBottom: "24px" }}>
                Clean Spaces.<br />
                <span style={{ color: "var(--blue)" }}>Cleaner Conscience.</span>
              </h1>

              <p style={{ fontFamily: FS, fontSize: "1.05rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.75, margin: 0 }}>
                Ovaro&rsquo;s green cleaning program uses low-toxicity, environmentally responsible products that protect your staff, clients, and the spaces they share — without sacrificing a single standard of cleanliness.
              </p>

              {/* Trust chips */}
              <div style={{ display: "flex", flexWrap: "nowrap", gap: "8px", marginTop: "28px" }}>
                {["Eco-Friendly", "Low-Toxicity", "No Harsh Chemicals"].map((chip) => (
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

        {/* ── What Makes It Green ── */}
        <section style={{ background: "var(--white)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>What&rsquo;s Different</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "end" }}>
                <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                  What makes it green.
                </h2>
                <p style={{ fontFamily: FS, fontSize: "0.95rem", color: "var(--green)", opacity: 0.55, lineHeight: 1.75, margin: 0 }}>
                  Green cleaning isn&rsquo;t just a label — it&rsquo;s a deliberate choice in every product, process, and protocol we use on every visit.
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

        {/* ── The Real Benefits ── */}
        <section style={{ background: "var(--cream)", padding: "96px 24px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>The Impact</span>
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                Why it matters for your business.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {benefits.map((b) => (
                <div key={b.label} className="service-card">
                  <div style={{ fontFamily: FD, fontSize: "2.5rem", letterSpacing: "-0.03em", color: "var(--blue)", lineHeight: 1, marginBottom: "8px" }}>
                    {b.stat}
                  </div>
                  <h3 style={{ fontFamily: FD, fontSize: "1.4rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "12px", lineHeight: 1.1 }}>
                    {b.label}
                  </h3>
                  <div style={{ height: "1px", background: "var(--border)", marginBottom: "16px" }} />
                  <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Ovaro ── */}
        <section style={{ background: "var(--white)", padding: "96px 24px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>Why Ovaro</span>
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                Green done properly.
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
            <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "#fff", lineHeight: 1.05, marginBottom: "16px" }}>
              Ready to clean smarter?
            </h2>
            <p style={{ fontFamily: FS, fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "36px" }}>
              Switch to green cleaning without changing your schedule or standards. Tell us about your space and we&rsquo;ll build a plan around it — response within 2 hours.
            </p>
            <a href="/get-a-quote" className="btn-white">Get a Free Quote</a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
