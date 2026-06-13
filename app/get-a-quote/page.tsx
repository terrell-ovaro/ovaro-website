"use client";
import Link from "next/link";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { NavDropdown } from "../components/NavDropdown";
import { FacilitiesDropdown } from "../components/FacilitiesDropdown";
import { Footer } from "../components/Footer";
import { MobileNav } from "../components/MobileNav";
import { LogoBubble } from "../components/LogoBubble";

const FD = "var(--font-display)";
const FS = "var(--font-sans, 'DM Sans', sans-serif)";

const services = [
  "Janitorial Services",
  "Green Cleaning",
  "Day Porter",
  "Post-Construction",
  "Deep Cleaning",
  "Other",
];

const facilityTypes = [
  "Office Space",
  "Financial Institution",
  "Retail Location",
  "Hotel",
  "Construction Site",
  "Place of Prayer",
  "Fitness Center",
  "Educational Facility",
  "Other",
];

const frequencies = [
  "Daily / Nightly",
  "Weekly",
  "Bi-Weekly",
  "Monthly",
  "One-Time",
  "Custom Schedule",
];

type Status = "idle" | "sending" | "success" | "error";

export default function GetAQuotePage() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [selectedService, setSelectedService] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const data = {
      firstName:    fd.get("firstName"),
      lastName:     fd.get("lastName"),
      email:        fd.get("email"),
      phone:        fd.get("phone"),
      businessName: fd.get("businessName"),
      facilityType: fd.get("facilityType"),
      address:      fd.get("address"),
      city:         fd.get("city"),
      service:      fd.get("service"),
      frequency:    fd.get("frequency"),
      sqft:         fd.get("sqft"),
      notes:        fd.get("notes"),
    };

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        // Redirect to the dedicated confirmation page (clean conversion event).
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ── Navigation ── */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:50,background:"rgba(255,255,255,0.96)",borderBottom:"1px solid var(--border)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)" }}>
        <div style={{ maxWidth:"1280px",margin:"0 auto",padding:"0 24px",height:"68px",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
          <LogoBubble />
          <div className="nav-desktop-links" style={{ alignItems:"center",gap:"20px" }}>
            <NavDropdown active="" />
            <FacilitiesDropdown active="" />
            {[
              { label:"About",href:"/#about" },
              { label:"Service Areas",href:"/service-areas" },
              { label:"Contact",href:"/contact" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="nav-link" style={{ fontFamily:FS }}>{label}</a>
            ))}
          </div>
          <Link href="/get-a-quote" className="btn-primary nav-cta-desktop" style={{ padding:"10px 22px",fontSize:"0.875rem",background:"var(--green)" }}>
            Get a Quote
          </Link>
          <MobileNav />
        </div>
      </nav>

      {/* ── Split layout ── */}
      <div style={{ display:"flex",minHeight:"100svh",paddingTop:"68px",flexWrap:"wrap" }}>

        {/* ═══ LEFT — Cream ═══ */}
        <div style={{ background:"var(--cream)",flex:"1 1 360px",display:"flex",justifyContent:"flex-end",borderRight:"1px solid var(--border)" }}>
          <div style={{ maxWidth:"520px",width:"100%",padding:"72px 48px 72px 24px" }}>

            {/* Breadcrumb */}
            <div style={{ display:"flex",alignItems:"center",gap:"8px",marginBottom:"32px",fontFamily:FS,fontSize:"0.8rem",color:"var(--green)",opacity:0.45 }}>
              <Link href="/" style={{ textDecoration:"none",color:"inherit" }}>Home</Link>
              <span>/</span>
              <span style={{ color:"var(--blue)",opacity:1 }}>Get a Quote</span>
            </div>

            {/* Label */}
            <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px" }}>
              <div style={{ width:"32px",height:"1.5px",background:"var(--blue)" }} />
              <span style={{ fontFamily:FS,fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--blue)" }}>Free Quote</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily:FD,fontSize:"clamp(2.8rem,5vw,4.5rem)",letterSpacing:"-0.025em",color:"var(--green)",lineHeight:0.95,marginBottom:"20px" }}>
              Let&rsquo;s build your<br />
              <span style={{ color:"var(--blue)" }}>cleaning plan.</span>
            </h1>

            <p style={{ fontFamily:FS,fontSize:"1rem",color:"var(--green)",opacity:0.6,lineHeight:1.75,marginBottom:"40px" }}>
              Fill out the form and we&rsquo;ll respond within 2 hours with a custom quote tailored to your space, schedule, and budget. No pressure, no obligation.
            </p>

            {/* Promise cards */}
            <div style={{ display:"flex",flexDirection:"column",gap:"14px",marginBottom:"40px" }}>
              {[
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: "Response within 2 hours" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, text: "No obligation — ever" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: "Licensed, bonded & insured" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21H7a4 4 0 01-4-4 6 6 0 016-6h6a6 6 0 016 6 4 4 0 01-4 4z"/><circle cx="9" cy="7" r="3"/><circle cx="15" cy="7" r="3"/></svg>, text: "Family-owned — Austin, TX since 2017" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display:"flex",alignItems:"center",gap:"12px" }}>
                  <div style={{ width:"32px",height:"32px",borderRadius:"8px",background:"var(--blue-subtle)",border:"1px solid var(--border-blue)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                    {icon}
                  </div>
                  <span style={{ fontFamily:FS,fontSize:"0.875rem",color:"var(--green)",opacity:0.75 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Contact direct */}
            <div style={{ borderTop:"1px solid var(--border)",paddingTop:"24px" }}>
              <p style={{ fontFamily:FS,fontSize:"0.78rem",color:"var(--green)",opacity:0.45,marginBottom:"12px",letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:700 }}>Prefer to call or email?</p>
              <a href="tel:2109046974" style={{ display:"block",fontFamily:FD,fontSize:"1.25rem",letterSpacing:"-0.01em",color:"var(--green)",textDecoration:"none",marginBottom:"6px" }}>
                (210) 904-6974
              </a>
              <a href="mailto:terrell@ovarocommercial.com" style={{ fontFamily:FS,fontSize:"0.875rem",color:"var(--blue)",textDecoration:"none" }}>
                terrell@ovarocommercial.com
              </a>
            </div>

            {/* Branded team photo — real-team presence at the point of conversion */}
            <div style={{ position:"relative",width:"100%",height:"300px",borderRadius:"14px",overflow:"hidden",marginTop:"32px",boxShadow:"0 16px 48px rgba(27,61,47,0.12)" }}>
              <Image
                src="/images/Team Portrait 2.webp"
                alt="An Ovaro Commercial team member ready to service your Austin facility"
                fill
                sizes="(max-width: 900px) 100vw, 520px"
                style={{ objectFit:"cover",objectPosition:"center 20%" }}
              />
            </div>
          </div>
        </div>

        {/* ═══ RIGHT — White (Form) ═══ */}
        <div style={{ background:"var(--white)",flex:"1 1 400px",display:"flex",justifyContent:"flex-start" }}>
          <div style={{ maxWidth:"580px",width:"100%",padding:"72px 24px 72px 48px" }}>

            {status === "success" ? (
              /* ── Success state ── */
              <div style={{ textAlign:"center",paddingTop:"40px" }}>
                <div style={{ width:"64px",height:"64px",borderRadius:"50%",background:"var(--blue-subtle)",border:"2px solid var(--border-blue)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h2 style={{ fontFamily:FD,fontSize:"2.5rem",letterSpacing:"-0.02em",color:"var(--green)",marginBottom:"16px" }}>
                  Quote request sent.
                </h2>
                <p style={{ fontFamily:FS,fontSize:"1rem",color:"var(--green)",opacity:0.6,lineHeight:1.75,marginBottom:"32px",maxWidth:"380px",margin:"0 auto 32px" }}>
                  Terrell will review your details and respond within 2 hours with a custom cleaning plan. Check your inbox — and your spam folder just in case.
                </p>
                <Link href="/" className="btn-primary">Back to Home</Link>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} style={{ display:"flex",flexDirection:"column",gap:"28px" }}>

                <div>
                  <h2 style={{ fontFamily:FD,fontSize:"clamp(1.6rem,2.5vw,2.1rem)",letterSpacing:"-0.02em",color:"var(--green)",marginBottom:"8px" }}>
                    Your Information
                  </h2>
                  <p style={{ fontFamily:FS,fontSize:"0.85rem",color:"var(--green)",opacity:0.45,margin:0 }}>
                    Fields marked <span style={{ color:"var(--blue)" }}>*</span> are required.
                  </p>
                </div>

                {/* Name row */}
                <div className="mobile-form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px" }}>
                  <div className="form-group">
                    <label className="form-label" style={{ fontFamily:FS }}>
                      First Name <span style={{ color:"var(--blue)" }}>*</span>
                    </label>
                    <input name="firstName" type="text" required className="form-input" placeholder="Jane" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ fontFamily:FS }}>
                      Last Name <span style={{ color:"var(--blue)" }}>*</span>
                    </label>
                    <input name="lastName" type="text" required className="form-input" placeholder="Smith" />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="mobile-form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px" }}>
                  <div className="form-group">
                    <label className="form-label" style={{ fontFamily:FS }}>
                      Email Address <span style={{ color:"var(--blue)" }}>*</span>
                    </label>
                    <input name="email" type="email" required className="form-input" placeholder="jane@company.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ fontFamily:FS }}>Phone Number <span style={{ color:"var(--blue)" }}>*</span></label>
                    <input name="phone" type="tel" required className="form-input" placeholder="(512) 000-0000" />
                  </div>
                </div>

                <div style={{ height:"1px",background:"var(--border)" }} />

                {/* Business name + Facility type */}
                <div className="mobile-form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px" }}>
                  <div className="form-group">
                    <label className="form-label" style={{ fontFamily:FS }}>
                      Organization Name <span style={{ color:"var(--blue)" }}>*</span>
                    </label>
                    <input name="businessName" type="text" required className="form-input" placeholder="Acme Corp" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ fontFamily:FS }}>Facility Type</label>
                    <select name="facilityType" className="form-select" style={{ fontFamily:FS,color:"var(--green)" }}>
                      <option value="">Select type</option>
                      {facilityTypes.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>
                </div>

                {/* Service selection */}
                <div>
                  <label className="form-label" style={{ fontFamily:FS,display:"block",marginBottom:"14px" }}>
                    What cleaning solution are you interested in? <span style={{ color:"var(--blue)" }}>*</span>
                  </label>
                  <div className="mobile-form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px" }}>
                    {services.map(s => (
                      <label key={s} style={{ display:"flex",alignItems:"center",gap:"10px",padding:"10px 14px",borderRadius:"8px",border:`1.5px solid ${selectedService === s ? "var(--blue)" : "rgba(27,61,47,0.12)"}`,background:selectedService === s ? "var(--blue-subtle)" : "transparent",cursor:"pointer",transition:"all 0.16s ease" }}>
                        <input
                          type="radio"
                          name="service"
                          value={s}
                          required
                          onChange={() => setSelectedService(s)}
                          style={{ accentColor:"var(--blue)",width:"16px",height:"16px",flexShrink:0 }}
                        />
                        <span style={{ fontFamily:FS,fontSize:"0.85rem",color:"var(--green)",fontWeight:selectedService === s ? 600 : 400 }}>{s}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Frequency + Sqft */}
                <div className="mobile-form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px" }}>
                  <div className="form-group">
                    <label className="form-label" style={{ fontFamily:FS }}>Preferred Frequency</label>
                    <select name="frequency" className="form-select" style={{ fontFamily:FS,color:"var(--green)" }}>
                      <option value="">Select frequency</option>
                      {frequencies.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ fontFamily:FS }}>Approx. Square Footage</label>
                    <input name="sqft" type="text" className="form-input" placeholder="e.g. 2,500 sq ft" />
                  </div>
                </div>

                {/* Address */}
                <div className="mobile-form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px" }}>
                  <div className="form-group">
                    <label className="form-label" style={{ fontFamily:FS }}>
                      Street Address <span style={{ color:"var(--blue)" }}>*</span>
                    </label>
                    <input name="address" type="text" required className="form-input" placeholder="123 Main St" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ fontFamily:FS }}>City / Area</label>
                    <input name="city" type="text" className="form-input" placeholder="Round Rock, TX" />
                  </div>
                </div>
                <p style={{ fontFamily:FS,fontSize:"0.72rem",color:"var(--green)",opacity:0.45,marginTop:"-16px" }}>
                  * Ovaro Commercial operates within Austin and surrounding areas only.
                </p>

                {/* Notes */}
                <div className="form-group">
                  <label className="form-label" style={{ fontFamily:FS }}>Additional Notes</label>
                  <textarea name="notes" className="form-textarea" placeholder="Anything else we should know about your space, schedule, or cleaning needs..." style={{ minHeight:"96px",fontFamily:FS }} />
                </div>

                <div style={{ height:"1px",background:"var(--border)" }} />

                {/* Submit */}
                <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"14px" }}>
                  <button type="submit" className="btn-submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Submit Quote Request"}
                    {status !== "sending" && (
                      <span className="btn-arrow">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8h10M9 4l4 4-4 4"/>
                        </svg>
                      </span>
                    )}
                  </button>
                  <p style={{ fontFamily:FS,fontSize:"0.75rem",color:"var(--green)",opacity:0.4 }}>
                    Response within 2 hours · No obligation
                  </p>
                </div>

                {status === "error" && (
                  <p style={{ fontFamily:FS,fontSize:"0.85rem",color:"#c0392b",padding:"12px 16px",borderRadius:"6px",background:"rgba(192,57,43,0.06)",border:"1px solid rgba(192,57,43,0.15)" }}>
                    Something went wrong sending your request. Please call us at (210) 904-6974 or email terrell@ovarocommercial.com directly.
                  </p>
                )}

              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
