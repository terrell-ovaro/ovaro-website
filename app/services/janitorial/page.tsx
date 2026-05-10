import type { Metadata } from "next";
import { NavDropdown } from "../../components/NavDropdown";
import { FacilitiesDropdown } from "../../components/FacilitiesDropdown";
import { Footer } from "../../components/Footer";
import { MobileNav } from "../../components/MobileNav";
import { LogoBubble } from "../../components/LogoBubble";

export const metadata: Metadata = {
  title: "Janitorial Services | Ovaro Commercial",
  description:
    "Professional commercial janitorial services in Austin, TX. Consistent, scheduled cleaning for offices, medical facilities, and professional spaces. Family-owned since 2017.",
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
    title: "Floor Care",
    desc: "Sweeping, mopping, and vacuuming — all floor types maintained to a consistent standard on every visit.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Restroom Sanitization",
    desc: "Full disinfecting of toilets, sinks, mirrors, and fixtures — plus restocking supplies on every scheduled visit.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" />
      </svg>
    ),
    title: "Trash Removal",
    desc: "All bins emptied and relined throughout your space, including break rooms, offices, and common areas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Surface Disinfecting",
    desc: "Desks, countertops, light switches, door handles, and high-touch areas wiped and disinfected.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Break Room Cleaning",
    desc: "Countertops, sinks, appliance exteriors, and tables cleaned and sanitized — keeping shared spaces fresh.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Interior Glass & Windows",
    desc: "Interior-facing glass, partition walls, and mirrors cleaned streak-free on every visit.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    ),
    title: "Dusting",
    desc: "Furniture surfaces, window sills, vents, blinds, and shelving dusted thoroughly throughout the space.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Final Walkthrough",
    desc: "Every visit concludes with a quality check to ensure nothing was missed before our team leaves your space.",
  },
];

const schedules = [
  {
    freq: "Nightly",
    icon: "🌙",
    best: "High-traffic offices, medical facilities, financial institutions",
    desc: "Your space is cleaned and reset every evening so your team arrives to a fresh, professionally maintained environment every morning without exception.",
  },
  {
    freq: "Weekly",
    icon: "📅",
    best: "Lower-traffic offices, co-working spaces, small professional suites",
    desc: "A thorough clean on a consistent weekly schedule — reliable, predictable, and built around your operating hours.",
  },
  {
    freq: "Custom",
    icon: "⚙️",
    best: "Unique schedules, multi-location, or specialty requirements",
    desc: "We build a plan around your specific needs. Whether it's three times a week or a custom rotation, we make it work for your operation.",
  },
];

const differentiators = [
  {
    num: "01",
    title: "Same Crew, Every Time",
    desc: "You'll know the names of the people cleaning your space. Consistency in personnel means consistency in results — and accountability when it matters.",
  },
  {
    num: "02",
    title: "Direct Communication",
    desc: "No call centers, no ticketing systems. When you have a concern, you reach a real person who can actually resolve it. That's how we've kept clients for years.",
  },
  {
    num: "03",
    title: "Scheduled Around You",
    desc: "We work after hours, early mornings, or weekends — whatever keeps our team out of your way and your operations running smoothly.",
  },
  {
    num: "04",
    title: "No Long-Term Contracts",
    desc: "We earn your business every visit. No lock-in, no penalties — just service good enough that you won't want to leave.",
  },
];

export default function JanitorialPage() {
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
                <span style={{ color: "var(--blue)", opacity: 1 }}>Janitorial Services</span>
              </div>

              {/* Label */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                  Core Service
                </span>
              </div>

              {/* Headline */}
              <h1 style={{ fontFamily: FD, fontSize: "clamp(2.5rem, 5vw, 4.75rem)", letterSpacing: "-0.025em", color: "var(--green)", lineHeight: 0.95, marginBottom: "24px" }}>
                The Last Cleaning<br />
                <span style={{ color: "var(--blue)" }}>Company You&rsquo;ll Switch From.</span>
              </h1>

              <p style={{ fontFamily: FS, fontSize: "1.05rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.75, marginBottom: "32px", margin: 0 }}>
                Ovaro&rsquo;s janitorial program delivers a consistent, thorough clean on every scheduled visit — because your workspace shouldn&rsquo;t depend on who showed up that day. Same team. Same standard. Every time.
              </p>

              {/* Trust chips — single line */}
              <div style={{ display: "flex", flexWrap: "nowrap", gap: "8px", marginTop: "28px" }}>
                {["Licensed & Insured", "Family-Owned", "No Contracts"].map((chip) => (
                  <span key={chip} style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Insured & Bonded badge */}
            <div className="hidden md:block" style={{ position: "absolute", top: "72px", right: "0", width: "280px" }}>
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

        {/* ── What We Cover ── */}
        <section style={{ background: "var(--white)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>What&rsquo;s Included</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "end" }}>
                <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                  Every visit. Every item.
                </h2>
                <p style={{ fontFamily: FS, fontSize: "0.95rem", color: "var(--green)", opacity: 0.55, lineHeight: 1.75, margin: 0 }}>
                  Our standard janitorial program covers your entire space — not a checklist of add-ons. Here&rsquo;s what&rsquo;s included on every scheduled visit.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
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

        {/* ── Scheduling Options ── */}
        <section style={{ background: "var(--cream)", padding: "96px 24px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>Scheduling</span>
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                Built around your hours.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {schedules.map((s) => (
                <div key={s.freq} className="service-card">
                  <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{s.icon}</div>
                  <h3 style={{ fontFamily: FD, fontSize: "1.75rem", letterSpacing: "-0.015em", color: "var(--green)", lineHeight: 1.1, marginBottom: "8px" }}>
                    {s.freq}
                  </h3>
                  <div style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "14px" }}>
                    Best for: {s.best}
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.9rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.75, margin: 0 }}>
                    {s.desc}
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
                What makes us different.
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
              Ready for janitorial service you can actually count on?
            </h2>
            <p style={{ fontFamily: FS, fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "36px" }}>
              Tell us about your space and we&rsquo;ll put together a custom cleaning plan. Response within 2 hours, no obligation.
            </p>
            <a href="/get-a-quote" className="btn-white">Get a Free Quote</a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
