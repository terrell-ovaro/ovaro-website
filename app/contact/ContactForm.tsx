"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const FS = "var(--font-sans, 'DM Sans', sans-serif)";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ services }: { services: string[] }) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.currentTarget);

    // Map the contact form's fields onto the shape /api/send-quote expects.
    const data = {
      firstName:    fd.get("name") || "",
      lastName:     "",
      businessName: fd.get("businessName") || "",
      email:        fd.get("email") || "",
      phone:        fd.get("phone") || "",
      address:      "",
      city:         fd.get("city") || "",
      facilityType: fd.get("service") || "",
      service:      fd.get("service") || "",
      frequency:    "",
      sqft:         "",
      notes:        fd.get("message") || "",
    };

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

      {/* Name + Business row */}
      <div className="mobile-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        <div className="form-group">
          <label className="form-label" style={{ fontFamily: FS }}>Your Name</label>
          <input name="name" type="text" required className="form-input" placeholder="First Last" />
        </div>
        <div className="form-group">
          <label className="form-label" style={{ fontFamily: FS }}>Business Name</label>
          <input name="businessName" type="text" required className="form-input" placeholder="Company, LLC" />
        </div>
      </div>

      {/* Email + Phone row */}
      <div className="mobile-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        <div className="form-group">
          <label className="form-label" style={{ fontFamily: FS }}>Email Address</label>
          <input name="email" type="email" required className="form-input" placeholder="you@company.com" />
        </div>
        <div className="form-group">
          <label className="form-label" style={{ fontFamily: FS }}>Phone Number</label>
          <input name="phone" type="tel" className="form-input" placeholder="(512) 000-0000" />
        </div>
      </div>

      {/* Location + Service row */}
      <div className="mobile-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        <div className="form-group">
          <label className="form-label" style={{ fontFamily: FS }}>City / Area</label>
          <input name="city" type="text" className="form-input" placeholder="Round Rock, TX" />
        </div>
        <div className="form-group">
          <label className="form-label" style={{ fontFamily: FS }}>Service Type</label>
          <select name="service" className="form-select" defaultValue="" style={{ fontFamily: FS, color: "var(--green)" }}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="form-group">
        <label className="form-label" style={{ fontFamily: FS }}>Tell Us About Your Space</label>
        <textarea
          name="message"
          className="form-textarea"
          placeholder="Square footage, frequency, any specific needs..."
        />
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Submit */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <button type="submit" className="btn-submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send My Request"}
          <span className="btn-arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </span>
        </button>
        <p style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.4 }}>
          No obligation &nbsp;·&nbsp; Response within 2 hours
        </p>
      </div>

      {status === "error" && (
        <p style={{ fontFamily: FS, fontSize: "0.85rem", color: "#b4452f" }}>
          Something went wrong sending your request. Please call us at (210) 904-6974 or email terrell@ovarocommercial.com.
        </p>
      )}
    </form>
  );
}
