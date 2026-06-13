import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { NavDropdown } from "../../components/NavDropdown";
import { FacilitiesDropdown } from "../../components/FacilitiesDropdown";
import { Footer } from "../../components/Footer";
import { MobileNav } from "../../components/MobileNav";
import { LogoBubble } from "../../components/LogoBubble";

export const metadata: Metadata = {
  title: "Construction Sites | Ovaro Commercial",
  description: "Construction site and post-build cleaning in Austin, TX. We clear dust, debris, and residue so your finished space is move-in ready on schedule. Family-owned since 2017 — free quote in 2 hours.",
};

const FD = "var(--font-display)";
const FS = "var(--font-sans, \'DM Sans\', sans-serif)";

export default function ConstructionSitesPage() {
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
                <span style={{ color:"var(--blue)",opacity:1 }}>Construction Sites</span>
              </div>
              <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px" }}>
                <div style={{ width:"32px",height:"1.5px",background:"var(--blue)" }} />
                <span style={{ fontFamily:FS,fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--blue)" }}>Post-Construction</span>
              </div>
              <h1 style={{ fontFamily:FD,fontSize:"clamp(2.5rem,5vw,4.75rem)",letterSpacing:"-0.025em",color:"var(--green)",lineHeight:0.95,marginBottom:"24px" }}>
                Done Building.<br /><span style={{ color:"var(--blue)" }}>Time to Clean.</span>
              </h1>
              <p style={{ fontFamily:FS,fontSize:"1.05rem",color:"var(--green)",opacity:0.65,lineHeight:1.75,margin:0 }}>
                Construction ends — but the job isn&rsquo;t done until the space is genuinely ready for handover. Ovaro handles post-construction cleanup from rough debris removal through final inspection-ready polish, so you hit your deadline.
              </p>
              <div style={{ display:"flex",flexWrap:"nowrap",gap:"8px",marginTop:"28px" }}>
                <span key="Post-Construction" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>Post-Construction</span><span key="Deadline Driven" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>Deadline Driven</span><span key="Inspection Ready" style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 600, padding: "5px 11px", borderRadius: "20px", border: "1px solid var(--border-blue)", background: "var(--blue-subtle)", color: "var(--blue)", whiteSpace: "nowrap" }}>Inspection Ready</span>
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
                <h3 style={{ fontFamily:FD,fontSize:"1.35rem",letterSpacing:"-0.015em",color:"var(--green)",lineHeight:1.1,marginBottom:"10px" }}>Ready to hand over on time?</h3>
                <p style={{ fontFamily:FS,fontSize:"0.82rem",color:"var(--green)",opacity:0.6,lineHeight:1.7,marginBottom:"20px" }}>Tell us your project scope, square footage, and target handover date. We&rsquo;ll build a cleanup plan around it — response within 2 hours.</p>
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
            src="/images/Construction Debris 1.webp"
            alt="Ovaro crew removing construction debris and dust from a commercial build-out in Austin"
            fill
            sizes="(max-width: 1028px) 100vw, 980px"
            style={{ objectFit:"cover",objectPosition:"center 45%" }}
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
                <p style={{ fontFamily:FS,fontSize:"0.95rem",color:"var(--green)",opacity:0.55,lineHeight:1.75,margin:0 }}>Here&rsquo;s every element we address in your construction sites on every scheduled visit.</p>
              </div>
            </div>
            <div className="mobile-grid-3" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px" }}>
              
                <div key="Bulk Debris Removal" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Bulk Debris Removal</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Leftover materials, packaging, protective coverings, and construction waste removed and disposed of so the detailed cleaning can begin.
                  </p>
                </div>
                <div key="Construction Dust Elimination" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1010 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Construction Dust Elimination</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Fine drywall and concrete dust removed from all surfaces, vents, fixtures, and inside cabinets — not just the visible areas.
                  </p>
                </div>
                <div key="Adhesive & Residue Removal" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Adhesive & Residue Removal</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Sticker residue, paint overspray, caulk smears, and protective film adhesive removed from floors, glass, fixtures, and hardware.
                  </p>
                </div>
                <div key="Window & Glass Cleaning" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Window & Glass Cleaning</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Interior and exterior glass cleaned streak-free — paint spots, construction film, silicone residue, and hard water deposits fully removed.
                  </p>
                </div>
                <div key="Floor Scrubbing & Restoration" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Floor Scrubbing & Restoration</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Hard floors deep-scrubbed and polished. Carpet vacuumed and spot treated. Tile grout cleaned of residue and sealed where needed.
                  </p>
                </div>
                <div key="Fixture & Hardware Detail" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Fixture & Hardware Detail</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Sinks, faucets, light fixtures, handles, hinges, and switch plates cleaned of installation residue — shining and ready for occupancy.
                  </p>
                </div>
                <div key="HVAC Vent Cleaning" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1010 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>HVAC Vent Cleaning</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Vents and registers cleared of accumulated construction dust before the system runs — protecting air quality and HVAC equipment from day one.
                  </p>
                </div>
                <div key="Inspection-Ready Final Pass" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Inspection-Ready Final Pass</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    A complete walkthrough before handover — every surface, corner, and fixture checked so the space passes occupancy inspection the first time.
                  </p>
                </div>

                <div key="Site Safety Zone Clearing" className="area-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3 style={{ fontFamily: FD, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--green)", margin: 0 }}>Site Safety Zone Clearing</h3>
                  </div>
                  <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>
                    Debris and material cleared from walkways, safety zones, and compliance areas throughout the project — keeping the site safe and ready for inspection at any time.
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
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>Handover dates are non-negotiable</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>Your schedule has no room for a cleanup delay. Ovaro works around your project timeline so the space is ready when your client expects it.</p>
              </div>
              <div style={{ padding: "36px 40px 36px 0", paddingLeft: 1 > 0 ? "40px" : "0", borderLeft: 1 > 0 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: FD, fontSize: "4rem", letterSpacing: "-0.03em", color: "rgba(105,150,173,0.12)", lineHeight: 1, marginBottom: "12px" }}>02</div>
                <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>Dust and debris hide what inspectors need to see</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>A dirty post-construction space isn&rsquo;t just unpleasant — it can obscure issues and delay occupancy approval. We clear the way for a clean inspection.</p>
              </div>
              <div style={{ padding: "36px 40px 36px 0", paddingLeft: 2 > 0 ? "40px" : "0", borderLeft: 2 > 0 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: FD, fontSize: "4rem", letterSpacing: "-0.03em", color: "rgba(105,150,173,0.12)", lineHeight: 1, marginBottom: "12px" }}>03</div>
                <div style={{ width: "28px", height: "2px", background: "var(--blue)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: FD, fontSize: "1.35rem", letterSpacing: "-0.01em", color: "var(--green)", marginBottom: "10px", lineHeight: 1.15 }}>First impressions on day one set the tone</h3>
                <p style={{ fontFamily: FS, fontSize: "0.875rem", color: "var(--green)", opacity: 0.6, lineHeight: 1.75, margin: 0 }}>The moment a tenant or client walks into a newly completed space forms a lasting impression. Ovaro makes sure that impression reflects the quality of the build.</p>
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
              
              <div key="Brandon M." className="review-card">
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
                  &ldquo;Ovaro handled post-construction cleanup on two of our commercial builds this year. Detailed, thorough, and done before our handover deadline every time.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>BM</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>Brandon M.</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>Project Manager &mdash; Round Rock, TX</div>
                  </div>
                </div>
              </div>
              <div key="Alex K." className="review-card">
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
                  &ldquo;I&rsquo;ve worked with a lot of cleanup crews. Ovaro is the first one I&rsquo;ve added to my standard vendor list. They know what construction leaves behind and they get it all.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>AK</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>Alex K.</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>General Contractor &mdash; Austin, TX</div>
                  </div>
                </div>
              </div>
              <div key="Christine F." className="review-card">
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
                  &ldquo;Our tenant walkthroughs go smoothly because the space is genuinely clean when they arrive. Ovaro made that happen on our last three projects.&rdquo;
                </blockquote>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "18px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--border-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: FS, fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>CF</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FS, fontSize: "0.875rem", fontWeight: 600, color: "var(--green)" }}>Christine F.</div>
                    <div style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.45, marginTop: "1px" }}>Property Developer &mdash; Bee Cave, TX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section style={{ background:"var(--blue)",padding:"88px 24px",textAlign:"center" }}>
          <div style={{ maxWidth:"600px",margin:"0 auto" }}>
            <h2 style={{ fontFamily:FD,fontSize:"clamp(2rem,4vw,3.25rem)",letterSpacing:"-0.022em",color:"#fff",lineHeight:1.05,marginBottom:"16px" }}>Built to spec. Cleaned to match.</h2>
            <p style={{ fontFamily:FS,fontSize:"1rem",color:"rgba(255,255,255,0.75)",lineHeight:1.7,marginBottom:"36px" }}>Your general contractor has a deadline. Ovaro has your cleanup covered — from rough debris removal through final inspection-ready polish.</p>
            <Link href="/get-a-quote" className="btn-white">Get a Free Quote</Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
