import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { NavDropdown } from "../../components/NavDropdown";
import { FacilitiesDropdown } from "../../components/FacilitiesDropdown";
import { Footer } from "../../components/Footer";
import { MobileNav } from "../../components/MobileNav";
import { LogoBubble } from "../../components/LogoBubble";

export const metadata: Metadata = {
  title: "Places of Prayer | Ovaro Commercial",
  description: "Cleaning for churches, mosques, temples, and places of worship in Austin, TX. Respectful, thorough care for sanctuaries and gathering spaces. Family-owned since 2017 — free quote in 2 hours.",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, \'DM Sans\', sans-serif)";

export default function PlacesOfPrayerPage() {
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
                <span style={{ color:"var(--blue)",opacity:1 }}>Places of Prayer</span>
              </div>
              <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px" }}>
                <div style={{ width:"32px",height:"1.5px",background:"var(--blue)" }} />
                <span style={{ fontFamily:FS,fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--blue)" }}>Faith Communities</span>
              </div>
              <h1 style={{ fontFamily:FD,fontSize:"clamp(2.5rem,5vw,4.75rem)",letterSpacing:"-0.025em",color:"var(--green)",lineHeight:0.95,marginBottom:"24px" }}>
                Spaces Worthy<br /><span style={{ color:"var(--blue)" }}>of the Occasion.</span>
              </h1>
              <p style={{ fontFamily:FS,fontSize:"1.05rem",color:"var(--green)",opacity:0.65,lineHeight:1.75,margin:0 }}>
                Your congregation trusts your stewardship of their space. Ovaro provides respectful, thorough cleaning for sanctuaries, fellowship halls, and restrooms — scheduled around your calendar, never interrupting services or events.
              </p>
              <div style={{ display:"flex",flexWrap:"nowrap",gap:"8px",marginTop:"28px" }}>
                <span key="Faith Communities" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>Faith Communities</span><span key="Respectful Service" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>Respectful Service</span><span key="Event Scheduling" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>Event Scheduling</span>
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
                <h3 style={{ fontFamily:FD,fontSize:"1.35rem",letterSpacing:"-0.015em",color:"var(--green)",lineHeight:1.1,marginBottom:"10px" }}>Ready to care for your congregation&rsquo;s space?</h3>
                <p style={{ fontFamily:FS,fontSize:"0.82rem",color:"var(--green)",opacity:0.6,lineHeight:1.7,marginBottom:"20px" }}>Tell us about your facility and schedule. We&rsquo;ll build a cleaning plan that works around your services and events — response within 2 hours.</p>
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
            src="/images/Janitorial 5.webp"
            alt="Clean, well-maintained corridor in an Austin place of worship"
            fill
            sizes="(max-width: 1028px) 100vw, 980px"
            style={{ objectFit:"cover",objectPosition:"center 40%" }}
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
                <p style={{ fontFamily:FS,fontSize:"0.95rem",color:"var(--green)",opacity:0.55,lineHeight:1.75,margin:0 }}>Here&rsquo;s every element we address in your places of prayer on every scheduled visit.</p>
              </div>
            </div>
            <div className="mobile-grid-3" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px" }}>
              
                <div key="Sanctuary & Worship Area Cleaning" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Sanctuary & Worship Area Cleaning</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Seating, floors, staging areas, and high-touch surfaces cleaned thoroughly after services — restoring the space to a standard worthy of every gathering.
                  </p>
                </div>
                <div key="Fellowship Hall Maintenance" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Fellowship Hall Maintenance</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Multi-purpose halls cleaned and reset after events — tables, chairs, floors, and surfaces addressed so every use starts fresh.
                  </p>
                </div>
                <div key="Nursery & Children&rsquo;s Area Sanitization" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Nursery & Children&rsquo;s Area Sanitization</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Children&rsquo;s areas cleaned with low-toxicity, family-safe products — high-touch surfaces disinfected to the standard young families deserve.
                  </p>
                </div>
                <div key="Restroom Cleaning & Restocking" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Restroom Cleaning & Restocking</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Restrooms fully sanitized and restocked on every scheduled visit — maintained to accommodate the usage spikes that come with large gatherings.
                  </p>
                </div>
                <div key="Kitchen & Hospitality Area Care" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Kitchen & Hospitality Area Care</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Commercial kitchens, serving areas, and hospitality spaces cleaned after use — countertops, appliances, sinks, and floors addressed thoroughly.
                  </p>
                </div>
                <div key="Entrance & Lobby Upkeep" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Entrance & Lobby Upkeep</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Entry areas, foyers, and lobby spaces maintained so every visitor&rsquo;s first impression reflects the care and welcome your community extends.
                  </p>
                </div>
                <div key="Office & Administrative Spaces" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Office & Administrative Spaces</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Staff offices, meeting rooms, and administrative areas cleaned on a schedule that supports your team without disrupting the work they do.
                  </p>
                </div>
                <div key="Pre & Post-Event Cleaning" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Pre & Post-Event Cleaning</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Preparation cleaning before major services or events, and thorough cleanup after — so your team can focus on the occasion, not the aftermath.
                  </p>
                </div>

                <div key="Outdoor & Pathway Upkeep" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Outdoor & Pathway Upkeep</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Steps, walkways, and exterior entry areas swept and maintained — ensuring a welcoming arrival for every member and visitor before they reach the door.
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
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>Your congregation trusts your stewardship</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>The people who gather in your space trust that it&rsquo;s being cared for. A consistently clean facility is an expression of that care — and Ovaro helps you deliver it.</p>
              </div>
              <div style={{ padding: "36px 40px 36px 0", paddingLeft: 1 > 0 ? "40px" : "0", borderLeft: 1 > 0 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: FD, fontSize: "4rem", letterSpacing: "-0.03em", color: "rgba(105,150,173,0.12)", lineHeight: 1, marginBottom: "12px" }}>02</div>
                <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>Children&rsquo;s areas have the highest standards</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>Families bring their children to your facility trusting their safety. Our cleaning protocols for nurseries and children&rsquo;s areas reflect that responsibility.</p>
              </div>
              <div style={{ padding: "36px 40px 36px 0", paddingLeft: 2 > 0 ? "40px" : "0", borderLeft: 2 > 0 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: FD, fontSize: "4rem", letterSpacing: "-0.03em", color: "rgba(105,150,173,0.12)", lineHeight: 1, marginBottom: "12px" }}>03</div>
                <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>Scheduling around your calendar is non-negotiable</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>We never disrupt services, events, or gatherings. Our schedule is built entirely around yours — not the other way around.</p>
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
              
              <div key="Pastor David R." className="review-card">
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
                  &ldquo;Ovaro has cleaned our church for two years. They&rsquo;re professional, respectful of the space, and have never once interfered with a service or event.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>DR</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>Pastor David R.</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>Lead Pastor &mdash; Leander, TX</div>
                  </div>
                </div>
              </div>
              <div key="Sister Maria O." className="review-card">
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
                  &ldquo;Our parish hosts events most weekends. Ovaro works around our calendar perfectly — the hall is always ready before our community arrives.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>MO</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>Sister Maria O.</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>Parish Administrator &mdash; Round Rock, TX</div>
                  </div>
                </div>
              </div>
              <div key="Ahmed K." className="review-card">
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
                  &ldquo;Finding a cleaning service that respects the nature of our space was important to us. Ovaro has been that service — consistent, professional, and discreet.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>AK</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>Ahmed K.</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>Facilities Chair &mdash; Austin, TX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section style={{ background:"var(--blue)",padding:"88px 24px",textAlign:"center" }}>
          <div style={{ maxWidth:"600px",margin:"0 auto" }}>
            <h2 style={{ fontFamily:FD,fontSize:"clamp(2rem,4vw,3.25rem)",letterSpacing:"-0.022em",color:"#fff",lineHeight:1.05,marginBottom:"16px" }}>Your space deserves the same care your community gives it.</h2>
            <p style={{ fontFamily:FS,fontSize:"1rem",color:"rgba(255,255,255,0.75)",lineHeight:1.7,marginBottom:"36px" }}>Ovaro brings the same respect and attention to your facility that your congregation brings to it. Consistent, professional, and always scheduled around you.</p>
            <Link href="/get-a-quote" className="btn-white">Get a Free Quote</Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
