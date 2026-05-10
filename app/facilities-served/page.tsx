import type { Metadata } from "next";
import { NavDropdown } from "../components/NavDropdown";
import { FacilitiesDropdown } from "../components/FacilitiesDropdown";
import { Footer } from "../components/Footer";
import { MobileNav } from "../components/MobileNav";
import { LogoBubble } from "../components/LogoBubble";

export const metadata: Metadata = {
  title: "Facilities Served | Ovaro Commercial",
  description:
    "Ovaro Commercial serves offices, financial institutions, retail locations, hotels, construction sites, places of prayer, fitness centers, and educational facilities across Austin, TX.",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, 'DM Sans', sans-serif)";

/* ── Services data — content to be filled in ── */
const services = [
  { num: "01", slug: "office-cleaning",        title: "Office Cleaning",        description: "Professional janitorial services scheduled around your business hours — desks, common areas, restrooms, and break rooms maintained to a consistent standard. Daily, weekly, or custom frequency with no long-term contracts required.",        detail: "Ideal for: law firms, tech offices, co-working spaces" },
  { num: "02", slug: "financial-institutions", title: "Financial Institutions",  description: "Detail-oriented cleaning built for the elevated standards banks and credit unions demand, from teller lines to client-facing lobbies. We understand compliance expectations and show up on schedule, every time, without exception.",   detail: "Ideal for: banks, credit unions, mortgage offices" },
  { num: "03", slug: "retail-locations",       title: "Retail Locations",        description: "Spotless floors, clean fitting rooms, and sharp entryways that let your merchandise — not your maintenance — command attention. Scheduled around your store hours to minimize disruption during peak traffic.",                              detail: "Ideal for: showrooms, boutiques, home goods stores" },
  { num: "04", slug: "hotels",                 title: "Hotels",                  description: "Guest-ready common areas, pristine lobbies, and consistently clean facilities that protect your reputation and keep reviews positive. We coordinate around check-in and checkout windows to keep operations seamless.",                         detail: "Ideal for: boutique hotels, extended-stay properties" },
  { num: "05", slug: "construction-sites",     title: "Construction Sites",      description: "Post-construction cleanup that removes dust, debris, and residue so your finished space is ready for occupancy or inspection. We handle everything from rough clean through final polish before handover.",                                   detail: "Ideal for: post-construction, pre-occupancy clean-outs" },
  { num: "06", slug: "places-of-prayer",       title: "Places of Prayer",        description: "Respectful, thorough cleaning for sanctuaries, fellowship halls, and restrooms — maintained with the care these spaces deserve. Scheduled around your congregation's calendar to never interrupt services or events.",                       detail: "Ideal for: churches, mosques, synagogues, temples" },
  { num: "07", slug: "fitness-centers",        title: "Fitness Centers",         description: "High-touch surface sanitization, clean locker rooms, and spotless equipment areas that protect members and reinforce your facility's commitment to health. Odor control and floor care are included in every service plan.",                  detail: "Ideal for: gyms, yoga studios, athletic facilities" },
  { num: "08", slug: "educational-facilities", title: "Educational Facilities",  description: "Safe, thorough cleaning for classrooms, hallways, and restrooms that meets the hygiene standards students and staff deserve. We use low-toxicity products and work around school hours to keep learning uninterrupted.",                    detail: "Ideal for: schools, daycares, tutoring centers" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Navigation ── */}
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
          <LogoBubble />

          <div className="nav-desktop-links" style={{ alignItems: "center", gap: "20px" }}>
            <NavDropdown active="" />
            <FacilitiesDropdown active="Facilities Served" />
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

          <a href="/get-a-quote" className="btn-primary nav-cta-desktop" style={{ padding: "10px 22px", fontSize: "0.875rem" }}>
            Get a Quote
          </a>
          <MobileNav />
        </div>
      </nav>

      <main style={{ paddingTop: "68px" }}>

        {/* ── Page Header ── */}
        <section
          style={{
            background: "var(--cream)",
            padding: "80px 24px 80px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* position:relative so the badge can anchor to this box */}
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              position: "relative",
              minHeight: "300px",
            }}
          >
            {/* Text — capped width so it never slides under the badge */}
            <div style={{ maxWidth: "560px" }}>

              {/* Breadcrumb */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "28px",
                  fontFamily: FS,
                  fontSize: "0.8rem",
                  color: "var(--green)",
                  opacity: 0.5,
                }}
              >
                <a href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</a>
                <span>/</span>
                <span style={{ color: "var(--blue)", opacity: 1 }}>Facilities Served</span>
              </div>

              {/* Section label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "28px",
                }}
              >
                <div style={{ width: "32px", height: "1.5px", background: "var(--blue)" }} />
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
                  What We Do
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: FD,
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  letterSpacing: "-0.025em",
                  color: "var(--green)",
                  lineHeight: 1,
                  marginBottom: "20px",
                }}
              >
                Every Space.
                <br />
                <span style={{ color: "var(--blue)" }}>One Standard.</span>
              </h1>

              {/* Description */}
              <p
                style={{
                  fontFamily: FS,
                  fontSize: "1.05rem",
                  color: "var(--green)",
                  opacity: 0.6,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                From financial institution lobbies to fitness center floors, Ovaro
                delivers the same consistent, professional standard across every
                environment we serve.
              </p>
            </div>

            {/* Badge — absolute northeast corner, parallel with the title */}
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "280px",
              }}
            >
              <div className="cred-card float" style={{ padding: "32px 24px" }}>

                {/* Shield with pulsing rings */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
                  <div style={{ position: "relative", display: "inline-flex" }}>
                    <div className="pulse-ring" />
                    <div className="pulse-ring-2" />
                    <div
                      style={{
                        width: "68px",
                        height: "68px",
                        borderRadius: "50%",
                        background: "var(--blue-subtle)",
                        border: "1.5px solid var(--border-blue)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.4" strokeLinejoin="round">
                        <path d="M12 2L4 6v6c0 5.25 3.5 9.75 8 11 4.5-1.25 8-5.75 8-11V6L12 2z" />
                        <path d="M9 12l2 2 4-4" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      fontFamily: FD,
                      fontSize: "1.4rem",
                      letterSpacing: "-0.015em",
                      color: "var(--green)",
                      lineHeight: 1.1,
                      marginBottom: "6px",
                    }}
                  >
                    Insured &amp; Bonded
                  </div>
                  <div
                    style={{
                      fontFamily: FS,
                      fontSize: "0.75rem",
                      color: "var(--green)",
                      opacity: 0.45,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Licensed in the State of Texas
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />

                {/* Credential items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { cls: "check-pop-1", text: "General liability coverage" },
                    { cls: "check-pop-2", text: "Bonded — every team member" },
                    { cls: "check-pop-3", text: "Licensed — State of Texas" },
                  ].map(({ cls, text }) => (
                    <div key={text} className={cls} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "var(--blue-subtle)",
                          border: "1px solid var(--border-blue)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 6l3 3 5-5" />
                        </svg>
                      </div>
                      <span style={{ fontFamily: FS, fontSize: "0.8rem", color: "var(--green)", opacity: 0.75 }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border)", margin: "18px 0 14px" }} />

                {/* Footer stamp */}
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontFamily: FS,
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--green)",
                      opacity: 0.3,
                    }}
                  >
                    Est. 2017 &nbsp;·&nbsp; Austin, TX
                  </span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── Services Grid ── */}
        <section
          style={{
            background: "var(--white)",
            padding: "80px 24px 112px",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {services.map((s) => (
                <div key={s.num} className="service-card">
                  <div
                    style={{
                      fontFamily: FD,
                      fontSize: "0.95rem",
                      color: "var(--blue)",
                      letterSpacing: "0.06em",
                      marginBottom: "20px",
                    }}
                  >
                    {s.num}
                  </div>
                  <h2
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
                  </h2>
                  <p
                    style={{
                      fontFamily: FS,
                      fontSize: "0.9rem",
                      color: "var(--green)",
                      opacity: 0.65,
                      lineHeight: 1.75,
                      marginBottom: "20px",
                      minHeight: "80px",
                    }}
                  >
                    {s.description}
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
                      marginBottom: "16px",
                    }}
                  >
                    {s.detail}
                  </div>

                  {/* Learn more — same pill style as the logo bubble */}
                  <a
                    href={`/facilities-served/${s.slug}`}
                    className="logo-bubble"
                    style={{
                      fontFamily: FS,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--green)",
                      padding: "6px 14px",
                      gap: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section
          style={{
            background: "var(--blue)",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: FD,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.022em",
                color: "#fff",
                lineHeight: 1.05,
                marginBottom: "16px",
              }}
            >
              Don&rsquo;t see your space?
            </h2>
            <p
              style={{
                fontFamily: FS,
                fontSize: "1rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                marginBottom: "36px",
              }}
            >
              If your environment isn&rsquo;t listed above, reach out anyway. We&rsquo;ll
              tell you honestly whether we&rsquo;re the right fit.
            </p>
            <a href="/get-a-quote" className="btn-white">
              Get a Free Quote
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
