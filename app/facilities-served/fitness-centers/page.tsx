import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { NavDropdown } from "../../components/NavDropdown";
import { FacilitiesDropdown } from "../../components/FacilitiesDropdown";
import { Footer } from "../../components/Footer";
import { MobileNav } from "../../components/MobileNav";
import { LogoBubble } from "../../components/LogoBubble";

export const metadata: Metadata = {
  title: "Fitness Centers | Ovaro Commercial",
  description: "Gym and fitness center cleaning in Austin, TX. Sanitized equipment, locker rooms, and floors that protect your members and your reputation. Family-owned since 2017 — free quote in 2 hours.",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, \'DM Sans\', sans-serif)";

export default function FitnessCentersPage() {
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
                <span style={{ color:"var(--blue)",opacity:1 }}>Fitness Centers</span>
              </div>
              <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px" }}>
                <div style={{ width:"32px",height:"1.5px",background:"var(--blue)" }} />
                <span style={{ fontFamily:FS,fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--blue)" }}>Gyms & Studios</span>
              </div>
              <h1 style={{ fontFamily:FD,fontSize:"clamp(2.5rem,5vw,4.75rem)",letterSpacing:"-0.025em",color:"var(--green)",lineHeight:0.95,marginBottom:"24px" }}>
                Clean Spaces.<br /><span style={{ color:"var(--blue)" }}>Healthy Members.</span>
              </h1>
              <p style={{ fontFamily:FS,fontSize:"1.05rem",color:"var(--green)",opacity:0.65,lineHeight:1.75,margin:0 }}>
                Members cancel over dirty facilities. Ovaro keeps your equipment, locker rooms, and studio floors at a standard that protects your members&rsquo; health, drives retention, and reflects the commitment to wellness your facility stands for.
              </p>
              <div style={{ display:"flex",flexWrap:"nowrap",gap:"8px",marginTop:"28px" }}>
                <span key="Gyms & Studios" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>Gyms & Studios</span><span key="High-Touch Sanitation" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>High-Touch Sanitation</span><span key="Odor Control" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>Odor Control</span>
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
                <h3 style={{ fontFamily:FD,fontSize:"1.35rem",letterSpacing:"-0.015em",color:"var(--green)",lineHeight:1.1,marginBottom:"10px" }}>Ready to protect your membership?</h3>
                <p style={{ fontFamily:FS,fontSize:"0.82rem",color:"var(--green)",opacity:0.6,lineHeight:1.7,marginBottom:"20px" }}>Tell us about your facility and hours. We&rsquo;ll build a cleaning program around your peak traffic windows — response within 2 hours.</p>
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
        <div className="photo-strip">
          <Image
            src="/images/Bathroom Clean 1.jpg"
            alt="Sanitizing a fitness center locker room and restroom in Austin"
            fill
            sizes="(max-width: 1028px) 100vw, 980px"
            style={{ objectFit:"cover",objectPosition:"center 30%" }}
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
                <p style={{ fontFamily:FS,fontSize:"0.95rem",color:"var(--green)",opacity:0.55,lineHeight:1.75,margin:0 }}>Here&rsquo;s every element we address in your fitness centers on every scheduled visit.</p>
              </div>
            </div>
            <div className="mobile-grid-3" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px" }}>
              
                <div key="Equipment Surface Disinfection" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Equipment Surface Disinfection</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Every machine, bar, bench, and piece of shared equipment wiped and disinfected on every scheduled visit — reducing the spread of bacteria in your highest-contact areas.
                  </p>
                </div>
                <div key="Free Weight & Rack Area Cleaning" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Free Weight & Rack Area Cleaning</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Weight racks, dumbbells, cable machines, and surrounding flooring cleaned and sanitized — one of the most used and most neglected areas in any gym.
                  </p>
                </div>
                <div key="Locker Room & Shower Sanitization" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Locker Room & Shower Sanitization</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Full sanitization of locker room benches, shower stalls, floors, fixtures, and drains — the area members judge your facility most harshly on.
                  </p>
                </div>
                <div key="Studio & Group Fitness Floor Care" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Studio & Group Fitness Floor Care</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Yoga, cycling, HIIT, and group fitness studio floors deep-cleaned and sanitized between classes — protecting the health of every participant.
                  </p>
                </div>
                <div key="Restroom Deep Cleaning" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Restroom Deep Cleaning</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Restroom fixtures, surfaces, and supplies fully sanitized and restocked — maintained to the higher frequency that gym traffic demands.
                  </p>
                </div>
                <div key="Reception & Lobby Maintenance" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Reception & Lobby Maintenance</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Front desk surfaces, waiting areas, and lobby spaces cleaned and maintained so the first impression matches the standard inside.
                  </p>
                </div>
                <div key="Odor Management & Air Quality" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Odor Management & Air Quality</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Surface-level and airborne odor addressed with products that eliminate the source — not mask it with heavy fragrances that linger.
                  </p>
                </div>
                <div key="Final Walkthrough & Checklist" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Final Walkthrough & Checklist</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Every visit concludes with a systematic check of every area — equipment zones, locker rooms, studios, and restrooms all confirmed before we leave.
                  </p>
                </div>

                <div key="Sanitation Station Restocking" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Sanitation Station Restocking</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Sanitizing wipe dispensers, hand sanitizer stations, and paper towel holders monitored and restocked on every visit — keeping member self-service hygiene available throughout the day.
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
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>Members cancel over dirty facilities</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>Cleanliness is the top reason gym members cancel memberships. A visibly clean, well-maintained facility is one of your most effective retention tools.</p>
              </div>
              <div style={{ padding: "36px 40px 36px 0", paddingLeft: 1 > 0 ? "40px" : "0", borderLeft: 1 > 0 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: FD, fontSize: "4rem", letterSpacing: "-0.03em", color: "rgba(105,150,173,0.12)", lineHeight: 1, marginBottom: "12px" }}>02</div>
                <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>High-touch equipment spreads illness without daily disinfection</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>Shared equipment is a direct transmission vector for skin infections, colds, and flu. Daily disinfection isn&rsquo;t optional — it&rsquo;s a member health standard.</p>
              </div>
              <div style={{ padding: "36px 40px 36px 0", paddingLeft: 2 > 0 ? "40px" : "0", borderLeft: 2 > 0 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: FD, fontSize: "4rem", letterSpacing: "-0.03em", color: "rgba(105,150,173,0.12)", lineHeight: 1, marginBottom: "12px" }}>03</div>
                <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>Locker rooms make or break the experience</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>Members form their final impression of your facility in the locker room. Ovaro ensures it always reflects your commitment to their experience.</p>
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
              
              <div key="Angela R." className="review-card">
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
                  &ldquo;We switched to Ovaro&rsquo;s green cleaning program and our clients noticed immediately. The studio feels genuinely clean without the harsh chemical smell. It was absolutely the right call.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>AR</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>Angela R.</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>Owner &mdash; Cedar Park, TX</div>
                  </div>
                </div>
              </div>
              <div key="Marcus J." className="review-card">
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
                  &ldquo;Equipment cleanliness is a daily conversation in our industry. Since Ovaro took over, it&rsquo;s one less thing I have to manage — and our members have noticed.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>MJ</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>Marcus J.</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>Gym Manager &mdash; Austin, TX</div>
                  </div>
                </div>
              </div>
              <div key="Priya L." className="review-card">
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
                  &ldquo;Our yoga studio has a zero-tolerance policy for dirty floors and equipment. Ovaro has maintained that standard without exception for over a year.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>PL</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>Priya L.</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>Studio Director &mdash; Austin, TX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section style={{ background:"var(--blue)",padding:"88px 24px",textAlign:"center" }}>
          <div style={{ maxWidth:"600px",margin:"0 auto" }}>
            <h2 style={{ fontFamily:FD,fontSize:"clamp(2rem,4vw,3.25rem)",letterSpacing:"-0.022em",color:"#fff",lineHeight:1.05,marginBottom:"16px" }}>Your members&rsquo; health starts with your facility.</h2>
            <p style={{ fontFamily:FS,fontSize:"1rem",color:"rgba(255,255,255,0.75)",lineHeight:1.7,marginBottom:"36px" }}>High-touch equipment, shared spaces, and locker rooms require a cleaning standard that matches your commitment to member wellness. Ovaro delivers it.</p>
            <Link href="/get-a-quote" className="btn-white">Get a Free Quote</Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
