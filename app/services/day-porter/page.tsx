import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { NavDropdown } from "../../components/NavDropdown";
import { FacilitiesDropdown } from "../../components/FacilitiesDropdown";
import { Footer } from "../../components/Footer";
import { MobileNav } from "../../components/MobileNav";
import { LogoBubble } from "../../components/LogoBubble";

export const metadata: Metadata = {
  title: "Day Porter Services | Ovaro Commercial",
  description:
    "On-site day porter services in Austin, TX. Dedicated cleaning staff during your business hours to maintain your facility in real time — lobbies, restrooms, common areas, and more.",
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
    title: "Lobby & Entrance",
    desc: "Your first impression is maintained throughout the day — floors, glass doors, reception surfaces, and seating areas kept clean from open to close.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Restroom Monitoring",
    desc: "Restrooms checked and refreshed every 1–2 hours during business hours. Supplies restocked proactively — no waiting until something runs out.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Spill Response",
    desc: "Immediate cleanup of spills, tracked debris, and unexpected messes — handled the moment they happen, before they become a hazard or embarrassment.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Conference Room Turnover",
    desc: "Rooms reset between meetings — surfaces wiped, chairs arranged, trash removed, and whiteboards cleared so every session starts in a clean space.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Break Room Upkeep",
    desc: "Coffee stations, sinks, countertops, and tables maintained throughout the day — not just before or after hours when the real mess happens.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" />
      </svg>
    ),
    title: "Trash & Recycling",
    desc: "High-traffic bins emptied and monitored continuously throughout the day — no overflowing cans, no odors, no waiting until after close.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Common Area Maintenance",
    desc: "Hallways, elevators, stairwells, and shared spaces kept presentable during peak traffic hours — not just at the start of the day.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Guest & Visitor Readiness",
    desc: "Client-facing areas — lobbies, waiting rooms, and reception — maintained to a high standard throughout the day, not just for morning arrivals.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "End-of-Day Reset",
    desc: "A thorough final pass before close — every area set, restocked, and ready so your team arrives to a fresh, clean facility the next morning without lifting a finger.",
  },
];

const schedules = [
  {
    freq: "Part-Time",
    hours: "4 hrs / day",
    icon: "🌤️",
    best: "Moderate-traffic offices, boutique retail, small medical suites",
    desc: "Coverage during your busiest window — typically midday hours when your space sees the most foot traffic and needs the most attention.",
  },
  {
    freq: "Full-Time",
    hours: "8 hrs / day",
    icon: "☀️",
    best: "High-traffic facilities, financial institutions, large office buildings",
    desc: "A dedicated team member on-site for your full operating day. Continuous upkeep from open to close, handling every situation as it arises.",
  },
  {
    freq: "Custom",
    hours: "Flexible",
    icon: "⚙️",
    best: "Facilities with unique hours, split shifts, or multi-location needs",
    desc: "We build coverage around your specific schedule — including early morning arrivals, evening events, or facilities that operate on non-standard hours.",
  },
];

const differentiators = [
  {
    num: "01",
    title: "Uniformed & Professional",
    desc: "Our day porters arrive in uniform, represent your facility professionally, and operate as a seamless extension of your team — not a visible cleaning crew.",
  },
  {
    num: "02",
    title: "Trained for Your Facility",
    desc: "Before a day porter begins, we walk the space, learn your priorities, and build a site-specific routine. No generic checklists — just procedures built for your building.",
  },
  {
    num: "03",
    title: "Accountable Every Hour",
    desc: "Day porters log their rounds and are reachable in real time. If something needs attention, you tell us and it's handled — not added to tonight's after-hours list.",
  },
  {
    num: "04",
    title: "Consistent Coverage",
    desc: "We manage scheduling, coverage, and backup so you never have a gap day. If your regular porter is unavailable, we have you covered without any action on your part.",
  },
];

export default function DayPorterPage() {
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
                <span style={{ color: "var(--blue)", opacity: 1 }}>Day Porter</span>
              </div>

              {/* Label */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>
                  On-Site Staff
                </span>
              </div>

              {/* Headline */}
              <h1 style={{ fontFamily: FD, fontSize: "clamp(2.5rem, 5vw, 4.75rem)", letterSpacing: "-0.025em", color: "var(--green)", lineHeight: 0.95, marginBottom: "24px" }}>
                Clean Doesn&rsquo;t Wait.<br />
                <span style={{ color: "var(--blue)" }}>Neither Do We.</span>
              </h1>

              <p style={{ fontFamily: FS, fontSize: "1.05rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.75, margin: 0 }}>
                A dedicated on-site cleaning presence during your business hours — handling spills, restocking supplies, resetting rooms, and keeping your facility looking its best in real time, not just before and after the day.
              </p>

              {/* Trust chips */}
              <div style={{ display: "flex", flexWrap: "nowrap", gap: "8px", marginTop: "28px" }}>
                {["On-Site Staff", "Real-Time Upkeep", "Uniformed"].map((chip) => (
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
        <div style={{ position: "relative", height: "420px", overflow: "hidden" }}>
          <Image
            src="/images/Day Porter 1.webp"
            alt="Day porter cleaning a commercial lobby during business hours in Austin"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(27,61,47,0.03), rgba(27,61,47,0.10))" }} />
        </div>

        {/* ── What We Handle ── */}
        <section style={{ background: "var(--white)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>What We Handle</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "end" }}>
                <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                  Every hour. Every area.
                </h2>
                <p style={{ fontFamily: FS, fontSize: "0.95rem", color: "var(--green)", opacity: 0.55, lineHeight: 1.75, margin: 0 }}>
                  Day porter service covers the entire range of real-time needs that come up in a busy facility — not just the obvious ones.
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

        {/* ── Coverage Options ── */}
        <section style={{ background: "var(--cream)", padding: "96px 24px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
                <span style={{ fontFamily: FS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>Coverage Options</span>
              </div>
              <h2 style={{ fontFamily: FD, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.022em", color: "var(--green)", lineHeight: 1.05, margin: 0 }}>
                Coverage built for your day.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {schedules.map((s) => (
                <div key={s.freq} className="service-card">
                  <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{s.icon}</div>
                  <h3 style={{ fontFamily: FD, fontSize: "1.75rem", letterSpacing: "-0.015em", color: "var(--green)", lineHeight: 1.1, marginBottom: "4px" }}>
                    {s.freq}
                  </h3>
                  <div style={{ fontFamily: FD, fontSize: "1rem", color: "var(--blue)", letterSpacing: "-0.01em", marginBottom: "12px" }}>
                    {s.hours}
                  </div>
                  <div style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--green)", opacity: 0.45, marginBottom: "14px" }}>
                    Best for: {s.best}
                  </div>
                  <div style={{ height: "1px", background: "var(--border)", marginBottom: "16px" }} />
                  <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.65, lineHeight: 1.75, margin: 0 }}>
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
                On-site. On point. Every day.
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
              Keep your facility clean all day long.
            </h2>
            <p style={{ fontFamily: FS, fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "36px" }}>
              Tell us about your space, your hours, and your busiest areas. We&rsquo;ll design a day porter program around your operation — response within 2 hours, no obligation.
            </p>
            <Link href="/get-a-quote" className="btn-white">Get a Free Quote</Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
