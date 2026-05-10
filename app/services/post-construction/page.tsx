import type { Metadata } from "next";
import { NavDropdown } from "../../components/NavDropdown";
import { FacilitiesDropdown } from "../../components/FacilitiesDropdown";
import { Footer } from "../../components/Footer";
import { MobileNav } from "../../components/MobileNav";
import { LogoBubble } from "../../components/LogoBubble";

export const metadata: Metadata = {
  title: "Post-Construction Cleaning | Ovaro Commercial",
  description:
    "Professional post-construction cleaning in Austin, TX. We remove dust, debris, and residue so your finished space is move-in ready — on time, every time.",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, 'DM Sans', sans-serif)";

const coverage = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Construction Dust Removal",
    desc: "Fine drywall and concrete dust settles everywhere — surfaces, vents, fixtures, and inside cabinets. We remove it completely, not just from the obvious places.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" />
      </svg>
    ),
    title: "Debris & Material Cleanup",
    desc: "Leftover materials, packaging, tape, protective coverings, and construction waste removed and disposed of — leaving a clean slate for occupancy.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8l4 4-4 4" />
      </svg>
    ),
    title: "Adhesive & Residue Removal",
    desc: "Sticker residue, paint overspray, caulk smears, and adhesive left from protective films removed from floors, glass, fixtures, and hardware.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Window & Glass Cleaning",
    desc: "Interior and exterior glass cleaned streak-free — removing paint spots, construction film, silicone residue, and hard water deposits.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7" /><path d="M9 22V12h6v10" /><rect x="2" y="20" width="20" height="2" />
      </svg>
    ),
    title: "Floor Cleaning & Polish",
    desc: "Hard floors scrubbed, buffed, and polished. Carpet vacuumed and spot treated. Tile grout cleaned of construction residue and sealed where needed.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" /><path d="M8 12s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Fixture & Hardware Detail",
    desc: "Sinks, faucets, light fixtures, door handles, hinges, and switch plates cleaned of fingerprints, dust, and installation residue — shining and ready to use.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Restroom Deep Clean",
    desc: "New restrooms cleaned top to bottom — grout sealed, fixtures polished, and every surface sanitized before first use.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1010 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
      </svg>
    ),
    title: "HVAC Vent Cleaning",
    desc: "Vents and registers wiped clean of accumulated construction dust before the system runs — protecting your air quality and HVAC equipment from day one.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Inspection-Ready Final Pass",
    desc: "A complete final walkthrough before handover — every surface, corner, and fixture checked so your space is ready for occupancy inspection or client walkthrough.",
  },
];

const phases = [
  {
    num: "01",
    title: "Rough Clean",
    desc: "The first pass after construction wraps. Large debris removed, bulk dust cleared, and surfaces prepped for detail work. Sets the foundation for everything that follows.",
  },
  {
    num: "02",
    title: "Detail Clean",
    desc: "The core of the post-construction process. Every surface, fixture, window, floor, and hidden corner cleaned thoroughly — adhesive removed, dust eliminated, residue gone.",
  },
  {
    num: "03",
    title: "Final Polish",
    desc: "The touch-up pass before inspection or occupancy. A complete walkthrough to ensure every element meets handover standards — because the last impression is the one that matters.",
  },
];

const differentiators = [
  {
    num: "01",
    title: "Deadline-Driven",
    desc: "We work around your project timeline and handover date — not the other way around. When your general contractor needs the space ready, we make sure it is.",
  },
  {
    num: "02",
    title: "Construction Familiar",
    desc: "We know what construction leaves behind. Fine dust in vents, silicone on glass, adhesive on hardware, overspray on floors — we know where to look and how to remove it.",
  },
  {
    num: "03",
    title: "Inspection Ready",
    desc: "Our standard matches occupancy and inspection requirements. Clients and contractors walk through with confidence knowing the space is genuinely ready — not just surface-clean.",
  },
  {
    num: "04",
    title: "Fully Insured",
    desc: "Post-construction environments carry unique risks. We are fully licensed, bonded, and insured for construction site work — protecting your project and your peace of mind.",
  },
];

export default function PostConstructionPage() {
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
                <span style={{ color: "var(--blue)", opacity: 1 }}>Post-Construction</span>
              </div>

              {/* Label */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                  Specialty Clean
                </span>
              </div>

              {/* Headline */}
              <h1 style={{ fontFamily: FD, fontSize: "clamp(2.5rem, 5vw, 4.75rem)", letterSpacing: "-0.025em", color: "var(--green)", lineHeight: 0.95, marginBottom: "24px" }}>
                Built to Spec.<br />
                <span style={{ color: "var(--blue)" }}>Cleaned to Match.</span>
              </h1>

              <p style={{ fontFamily: FS, fontSize: "1.05rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.75, margin: 0 }}>
                Construction ends — but the job isn&rsquo;t done until the space is genuinely ready for occupancy. Ovaro handles the full post-construction clean, from rough debris removal through final inspection-ready polish, so you can hand over on time and on standard.
              </p>

              {/* Trust chips */}
              <div style={{ display: "flex", flexWrap: "nowrap", gap: "8px", marginTop: "28px" }}>
                {["Inspection Ready", "Deadline Driven", "Fully Insured"].map((chip) => (
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

        {/* ── What We Clean ── */}
        <section style={{ background: "var(--white)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>What We Clean</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "end" }}>
                <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                  Nothing left behind.
                </h2>
                <p style={{ fontFamily: FS, fontSize: "0.95rem", color: "var(--green)", opacity: 0.55, lineHeight: 1.75, margin: 0 }}>
                  Post-construction cleanup requires a different level of attention than standard cleaning. Here&rsquo;s every element we address before we hand the space back to you.
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

        {/* ── The Three Phases ── */}
        <section style={{ background: "var(--cream)", padding: "96px 24px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>How It Works</span>
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                Three phases. One standard.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0" }}>
              {phases.map((p, i) => (
                <div key={p.num} style={{ padding: "40px 48px 40px 0", paddingLeft: i > 0 ? "48px" : "0", borderLeft: i > 0 ? "1px solid var(--border)" : "none" }}>
                  <div style={{ fontFamily: FD, fontSize: "4.5rem", letterSpacing: "-0.03em", color: "rgba(105,150,173,0.12)", lineHeight: 1, marginBottom: "12px" }}>{p.num}</div>
                  <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                  <h3 style={{ fontFamily: FD, fontSize: "1.5rem", letterSpacing: "-0.015em", color: "var(--green)", marginBottom: "12px", lineHeight: 1.1 }}>{p.title}</h3>
                  <p style={{ fontFamily: FS, fontSize: "0.9rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
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
                The standard your project deserves.
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
              Ready to open on time?
            </h2>
            <p style={{ fontFamily: FS, fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "36px" }}>
              Tell us about your project — square footage, scope, and your target handover date. We&rsquo;ll build a post-construction cleaning plan around your timeline. Response within 2 hours.
            </p>
            <a href="/get-a-quote" className="btn-white">Get a Free Quote</a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
