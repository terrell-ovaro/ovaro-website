import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { NavDropdown } from "../../components/NavDropdown";
import { FacilitiesDropdown } from "../../components/FacilitiesDropdown";
import { Footer } from "../../components/Footer";
import { MobileNav } from "../../components/MobileNav";
import { LogoBubble } from "../../components/LogoBubble";

export const metadata: Metadata = {
  title: "Educational Facilities | Ovaro Commercial",
  description: "School and educational facility cleaning in Austin, TX. Healthy, sanitized classrooms and common areas that support students and staff. Family-owned since 2017 — free quote, response in 2 hours.",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, \'DM Sans\', sans-serif)";

export default function EducationalFacilitiesPage() {
  return (
    <>
      {/* ── Navigation ── */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:50,background:"rgba(255,255,255,0.96)",borderBottom:"1px solid var(--border)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)" }}>
        <div style={{ maxWidth:"1280px",margin:"0 auto",padding:"0 24px",height:"68px",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
          <LogoBubble />
          <div className="nav-desktop-links" style={{ alignItems:"center",gap:"20px" }}>
            <NavDropdown active="" />
            <FacilitiesDropdown active="Facilities Served" />
            {[
              { label:"About", href:"/#about" },
              { label:"Service Areas", href:"/service-areas" },
              { label:"Contact", href:"/contact" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="nav-link" style={{ fontFamily:FS }}>{label}</a>
            ))}
          </div>
          <Link href="/get-a-quote" className="btn-primary nav-cta-desktop" style={{ padding:"10px 22px",fontSize:"0.875rem" }}>Get a Quote</Link>
          <MobileNav />
        </div>
      </nav>

      <main style={{ paddingTop:"68px" }}>

        {/* ── Header ── */}
        <section style={{ background:"var(--cream)",padding:"80px 24px",borderBottom:"1px solid var(--border)" }}>
          <div style={{ maxWidth:"1280px",margin:"0 auto",position:"relative",minHeight:"300px" }}>

            <div style={{ maxWidth:"580px" }}>
              <div style={{ display:"flex",alignItems:"center",gap:"8px",marginBottom:"28px",fontFamily:FS,fontSize:"0.8rem",color:"var(--green)",opacity:0.5 }}>
                <Link href="/" style={{ textDecoration:"none",color:"inherit" }}>Home</Link><span>/</span>
                <Link href="/facilities-served" style={{ textDecoration:"none",color:"inherit" }}>Facilities Served</Link><span>/</span>
                <span style={{ color:"var(--blue)",opacity:1 }}>Educational Facilities</span>
              </div>
              <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px" }}>
                <div style={{ width:"32px",height:"1.5px",background:"var(--blue)" }} />
                <span style={{ fontFamily:FS,fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--blue)" }}>Schools & Daycares</span>
              </div>
              <h1 style={{ fontFamily:FD,fontSize:"clamp(2.5rem,5vw,4.75rem)",letterSpacing:"-0.025em",color:"var(--green)",lineHeight:0.95,marginBottom:"24px" }}>
                Safe Spaces for<br /><span style={{ color:"var(--blue)" }}>the Next Generation.</span>
              </h1>
              <p style={{ fontFamily:FS,fontSize:"1.05rem",color:"var(--green)",opacity:0.65,lineHeight:1.75,margin:0 }}>
                Children spend 8 hours a day in your facility for 180+ days a year. Ovaro uses low-toxicity, family-safe cleaning products and schedules around school hours — so the space is always clean without ever disrupting what matters most.
              </p>
              <div style={{ display:"flex",flexWrap:"nowrap",gap:"8px",marginTop:"28px" }}>
                <span key="Schools & Daycares" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>Schools & Daycares</span><span key="Low-Toxicity" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>Low-Toxicity</span><span key="Child Safe" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>Child Safe</span>
              </div>
            </div>

            {/* CTA card — top right */}
            <div className="hidden md:block" style={{ position:"absolute",top:"84px",right:"0",width:"280px" }}>
              <div className="cta-top-card">
                <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px" }}>
                  <div style={{ width:"36px",height:"36px",borderRadius:"10px",background:"var(--blue-subtle)",border:"1px solid var(--border-blue)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--blue)",flexShrink:0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <span style={{ fontFamily:FS,fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--blue)" }}>Response within 2 hours</span>
                </div>
                <h3 style={{ fontFamily:FD,fontSize:"1.35rem",letterSpacing:"-0.015em",color:"var(--green)",lineHeight:1.1,marginBottom:"10px" }}>Ready for a safer learning environment?</h3>
                <p style={{ fontFamily:FS,fontSize:"0.82rem",color:"var(--green)",opacity:0.6,lineHeight:1.7,marginBottom:"20px" }}>Tell us about your facility, enrollment, and schedule. We&rsquo;ll build a cleaning plan that works around your school day — response within 2 hours.</p>
                <Link href="/get-a-quote" className="btn-primary" style={{ width:"100%",justifyContent:"center",fontSize:"0.85rem",padding:"13px 20px" }}>
                  Get a Free Quote
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </Link>
                <p style={{ fontFamily:FS,fontSize:"0.7rem",color:"var(--green)",opacity:0.35,textAlign:"center",marginTop:"10px" }}>No obligation &nbsp;·&nbsp; Licensed &amp; Insured</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Hero Photo ── */}
        <div style={{ position:"relative",height:"420px",overflow:"hidden" }}>
          <Image
            src="/images/Janitorial 6.jpg"
            alt="Cleaning a school common area and cafeteria in Austin"
            fill
            sizes="100vw"
            style={{ objectFit:"cover",objectPosition:"center 35%" }}
          />
          <div style={{ position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(27,61,47,0.03), rgba(27,61,47,0.10))" }} />
        </div>

        {/* ── What We Cover ── */}
        <section style={{ background:"var(--white)",padding:"88px 24px" }}>
          <div style={{ maxWidth:"1280px",margin:"0 auto" }}>
            <div style={{ marginBottom:"48px" }}>
              <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px" }}>
                <div style={{ width:"32px",height:"1.5px",background:"var(--blue)" }} />
                <span style={{ fontFamily:FS,fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--blue)" }}>What We Cover</span>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"24px",alignItems:"end" }}>
                <h2 style={{ fontFamily:FD,fontSize:"clamp(2rem,4vw,3.25rem)",letterSpacing:"-0.022em",color:"var(--green)",lineHeight:1.05,margin:0 }}>Every area. Every visit.</h2>
                <p style={{ fontFamily:FS,fontSize:"0.95rem",color:"var(--green)",opacity:0.55,lineHeight:1.75,margin:0 }}>Here&rsquo;s every element we address in your educational facilities on every scheduled visit.</p>
              </div>
            </div>
            <div className="mobile-grid-3" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px" }}>
              
                <div key="Classroom Cleaning & Sanitization" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Classroom Cleaning & Sanitization</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Desks, chairs, surfaces, whiteboards, and shared materials sanitized on every visit — using low-toxicity products safe for children of all ages.
                  </p>
                </div>
                <div key="Hallway & Common Area Maintenance" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Hallway & Common Area Maintenance</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Corridors, lockers, stairwells, and shared spaces cleaned and maintained — high-touch areas like door handles and handrails disinfected daily.
                  </p>
                </div>
                <div key="Cafeteria & Kitchen Cleaning" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Cafeteria & Kitchen Cleaning</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Cafeteria tables, floors, serving areas, and kitchen spaces cleaned after every meal period — maintained to the food safety standards your facility requires.
                  </p>
                </div>
                <div key="Restroom Sanitization" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Restroom Sanitization</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Restrooms fully disinfected and restocked throughout the day — maintained with the frequency that student traffic demands.
                  </p>
                </div>
                <div key="Administrative Office Cleaning" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Administrative Office Cleaning</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Staff offices, front desk areas, and administrative spaces cleaned on a schedule that supports your team and keeps the office professional.
                  </p>
                </div>
                <div key="Library & Computer Lab Care" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Library & Computer Lab Care</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Book shelves, reading surfaces, computer stations, and shared devices cleaned and disinfected — protecting the resources students depend on.
                  </p>
                </div>
                <div key="Gymnasium & Activity Space Cleaning" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Gymnasium & Activity Space Cleaning</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Gym floors, equipment, locker rooms, and activity spaces cleaned after use — maintained to the standard active spaces require.
                  </p>
                </div>
                <div key="Low-Toxicity Products Throughout" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 8c-2 0-4 1-5 3s-1 4 1 5"/><path d="M15 9c1 1.5 1 3.5 0 5"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Low-Toxicity Products Throughout</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Every product we use in your facility is selected for safety around children — no harsh chemicals, no heavy fragrances, no compromise on clean.
                  </p>
                </div>

                <div key="Entryway & Drop-Off Zone Care" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Entryway & Drop-Off Zone Care</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    School entrances, parent drop-off areas, and visitor-facing spaces maintained daily — setting the right tone before students and families step inside.
                  </p>
                </div>
            </div>
          </div>
        </section>

        {/* ── Why It Matters ── */}
        <section style={{ background:"var(--cream)",padding:"88px 24px",borderTop:"1px solid var(--border)" }}>
          <div style={{ maxWidth:"1280px",margin:"0 auto" }}>
            <div style={{ marginBottom:"48px" }}>
              <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px" }}>
                <div style={{ width:"32px",height:"1.5px",background:"var(--blue)" }} />
                <span style={{ fontFamily:FS,fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--blue)" }}>Why It Matters</span>
              </div>
              <h2 style={{ fontFamily:FD,fontSize:"clamp(2rem,4vw,3.25rem)",letterSpacing:"-0.022em",color:"var(--green)",lineHeight:1.05,margin:0 }}>The case for getting it right.</h2>
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"0" }}>
              
              <div style={{ padding: "36px 40px 36px 0", paddingLeft: 0 > 0 ? "40px" : "0", borderLeft: 0 > 0 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: FD, fontSize: "4rem", letterSpacing: "-0.03em", color: "rgba(105,150,173,0.12)", lineHeight: 1, marginBottom: "12px" }}>01</div>
                <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>Children&rsquo;s immune systems are still developing</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>Children are more vulnerable to the effects of both pathogens and chemical exposure than adults. Our products and protocols reflect that responsibility.</p>
              </div>
              <div style={{ padding: "36px 40px 36px 0", paddingLeft: 1 > 0 ? "40px" : "0", borderLeft: 1 > 0 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: FD, fontSize: "4rem", letterSpacing: "-0.03em", color: "rgba(105,150,173,0.12)", lineHeight: 1, marginBottom: "12px" }}>02</div>
                <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>Illness spreads fast in shared learning environments</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>Classrooms, cafeterias, and shared spaces are transmission vectors. Consistent disinfection directly reduces absenteeism for students and staff alike.</p>
              </div>
              <div style={{ padding: "36px 40px 36px 0", paddingLeft: 2 > 0 ? "40px" : "0", borderLeft: 2 > 0 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: FD, fontSize: "4rem", letterSpacing: "-0.03em", color: "rgba(105,150,173,0.12)", lineHeight: 1, marginBottom: "12px" }}>03</div>
                <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>Parents and administrators evaluate your environment</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>Families choose educational facilities in part based on how clean and safe the space feels. Ovaro helps you make that impression consistently.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Horizontal credential strip ── */}
        <section style={{ background:"var(--white)",padding:"56px 24px",borderTop:"1px solid var(--border)" }}>
          <div style={{ maxWidth:"1280px",margin:"0 auto" }}>
            <div className="cred-strip">
              {/* Shield + title */}
              <div style={{ display:"flex",alignItems:"center",gap:"16px",flexShrink:0 }}>
                <div style={{ width:"52px",height:"52px",borderRadius:"50%",background:"var(--blue-subtle)",border:"1.5px solid var(--border-blue)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.4" strokeLinejoin="round">
                    <path d="M12 2L4 6v6c0 5.25 3.5 9.75 8 11 4.5-1.25 8-5.75 8-11V6L12 2z"/>
                    <path d="M9 12l2 2 4-4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily:FD,fontSize:"1.25rem",letterSpacing:"-0.015em",color:"var(--green)",lineHeight:1.1 }}>Licensed &amp; Bonded</div>
                  <div style={{ fontFamily:FS,fontSize:"0.72rem",color:"var(--green)",opacity:0.45,letterSpacing:"0.04em",marginTop:"2px" }}>State of Texas</div>
                </div>
              </div>
              <div className="cred-strip-divider" />
              {/* Credential items — grouped for mobile layout */}
              <div className="cred-items-group">
                {[
                  "General liability coverage",
                  "Bonded — every team member",
                  "Licensed — State of Texas",
                ].map((item) => (
                  <div key={item} style={{ display:"flex",alignItems:"center",gap:"10px" }}>
                    <div style={{ width:"20px",height:"20px",borderRadius:"50%",background:"var(--blue-subtle)",border:"1px solid var(--border-blue)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6l3 3 5-5"/></svg>
                    </div>
                    <span style={{ fontFamily:FS,fontSize:"0.85rem",color:"var(--green)",opacity:0.75 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="cred-strip-divider" />
              {/* Est. stamp */}
              <div style={{ textAlign:"right",flexShrink:0 }}>
                <div style={{ fontFamily:FD,fontSize:"1.5rem",letterSpacing:"-0.02em",color:"var(--blue)",lineHeight:1 }}>2017</div>
                <div style={{ fontFamily:FS,fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--green)",opacity:0.35,marginTop:"2px" }}>Est. Austin, TX</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section style={{ background:"var(--cream)",padding:"88px 24px",borderTop:"1px solid var(--border)" }}>
          <div style={{ maxWidth:"1280px",margin:"0 auto" }}>
            <div style={{ marginBottom:"48px" }}>
              <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px" }}>
                <div style={{ width:"32px",height:"1.5px",background:"var(--blue)" }} />
                <span style={{ fontFamily:FS,fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--blue)" }}>Client Reviews</span>
              </div>
              <h2 style={{ fontFamily:FD,fontSize:"clamp(2rem,4vw,3.25rem)",letterSpacing:"-0.022em",color:"var(--green)",lineHeight:1.05,margin:0 }}>Heard from our clients.</h2>
            </div>
            <div className="mobile-grid-3" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px" }}>
              
              <div key="Dr. Sarah Kim" className="review-card">
                <div className="review-quote-bg">&ldquo;</div>
                <div style={{ display: "flex", gap: "4px", marginBottom: "18px", position: "relative", zIndex: 1 }}>
                  {Array(5).fill(null).map((_, i) => (
                    <span key={i} className="star">
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="#C9A84C">
                        <path d="M8 1l1.9 3.9L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.1-.7L8 1z" />
                      </svg>
                    </span>
                  ))}
                </div>
                <blockquote style={{ fontFamily: FS, fontSize: "0.9rem", color: "var(--green)", opacity: 0.8, lineHeight: 1.75, fontStyle: "italic", marginBottom: "24px", position: "relative", zIndex: 1 }}>
                  &ldquo;Since switching to Ovaro, our staff absenteeism due to illness has noticeably dropped. The quality of the clean — and the products they use — makes a real difference.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>SK</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>Dr. Sarah Kim</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>Principal &mdash; Leander, TX</div>
                  </div>
                </div>
              </div>
              <div key="Rebecca O." className="review-card">
                <div className="review-quote-bg">&ldquo;</div>
                <div style={{ display: "flex", gap: "4px", marginBottom: "18px", position: "relative", zIndex: 1 }}>
                  {Array(5).fill(null).map((_, i) => (
                    <span key={i} className="star">
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="#C9A84C">
                        <path d="M8 1l1.9 3.9L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.1-.7L8 1z" />
                      </svg>
                    </span>
                  ))}
                </div>
                <blockquote style={{ fontFamily: FS, fontSize: "0.9rem", color: "var(--green)", opacity: 0.8, lineHeight: 1.75, fontStyle: "italic", marginBottom: "24px", position: "relative", zIndex: 1 }}>
                  &ldquo;Families trust us with their children. Ovaro&rsquo;s low-toxicity approach and consistent quality helps us maintain that trust every single day.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>RO</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>Rebecca O.</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>Director &mdash; Pflugerville, TX</div>
                  </div>
                </div>
              </div>
              <div key="James F." className="review-card">
                <div className="review-quote-bg">&ldquo;</div>
                <div style={{ display: "flex", gap: "4px", marginBottom: "18px", position: "relative", zIndex: 1 }}>
                  {Array(5).fill(null).map((_, i) => (
                    <span key={i} className="star">
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="#C9A84C">
                        <path d="M8 1l1.9 3.9L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.1-.7L8 1z" />
                      </svg>
                    </span>
                  ))}
                </div>
                <blockquote style={{ fontFamily: FS, fontSize: "0.9rem", color: "var(--green)", opacity: 0.8, lineHeight: 1.75, fontStyle: "italic", marginBottom: "24px", position: "relative", zIndex: 1 }}>
                  &ldquo;We manage a large campus with a lot of moving parts. Ovaro simplifies the cleaning side of operations — consistent, professional, and completely scheduled around our calendar.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>JF</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>James F.</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>Facilities Director &mdash; Georgetown, TX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section style={{ background:"var(--blue)",padding:"88px 24px",textAlign:"center" }}>
          <div style={{ maxWidth:"600px",margin:"0 auto" }}>
            <h2 style={{ fontFamily:FD,fontSize:"clamp(2rem,4vw,3.25rem)",letterSpacing:"-0.022em",color:"#fff",lineHeight:1.05,marginBottom:"16px" }}>The children in your care deserve a clean, safe environment.</h2>
            <p style={{ fontFamily:FS,fontSize:"1rem",color:"rgba(255,255,255,0.75)",lineHeight:1.7,marginBottom:"36px" }}>Ovaro uses low-toxicity, family-safe products and schedules around your school hours — so learning is never interrupted and safety is never compromised.</p>
            <Link href="/get-a-quote" className="btn-white">Get a Free Quote</Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
