"use client";
import Link from "next/link";

import { useState } from "react";
import { createPortal } from "react-dom";

const FS = "var(--font-sans, 'DM Sans', sans-serif)";
const FD = "var(--font-display)";

const serviceLinks = [
  { label: "Janitorial Services",  href: "/services/janitorial" },
  { label: "Green Cleaning",       href: "/services/green-cleaning" },
  { label: "Day Porter",           href: "/services/day-porter" },
  { label: "Post-Construction",    href: "/services/post-construction" },
  { label: "Deep Cleaning",        href: "/services/deep-cleaning" },
];

const facilityLinks = [
  { label: "Office Cleaning",         href: "/facilities-served/office-cleaning" },
  { label: "Financial Institutions",  href: "/facilities-served/financial-institutions" },
  { label: "Retail Locations",        href: "/facilities-served/retail-locations" },
  { label: "Hotels",                  href: "/facilities-served/hotels" },
  { label: "Construction Sites",      href: "/facilities-served/construction-sites" },
  { label: "Places of Prayer",        href: "/facilities-served/places-of-prayer" },
  { label: "Fitness Centers",         href: "/facilities-served/fitness-centers" },
  { label: "Educational Facilities",  href: "/facilities-served/educational-facilities" },
];

function Accordion({
  label,
  overviewHref,
  overviewLabel,
  links,
  onClose,
}: {
  label: string;
  overviewHref: string;
  overviewLabel: string;
  links: { label: string; href: string }[];
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(27,61,47,0.08)" }}>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "18px 0",
          background: "none", border: "none", cursor: "pointer",
          fontFamily: FS, fontSize: "1.05rem", fontWeight: 600,
          color: "var(--green)", textAlign: "left",
        }}
      >
        {label}
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
          style={{ transition: "transform 0.22s", transform: expanded ? "rotate(180deg)" : "rotate(0)", flexShrink: 0 }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {expanded && (
        <div style={{ paddingBottom: "12px", display: "flex", flexDirection: "column" }}>
          <a
            href={overviewHref} onClick={onClose}
            style={{
              fontFamily: FS, fontSize: "0.75rem", fontWeight: 700,
              color: "var(--blue)", padding: "8px 16px",
              borderBottom: "1px solid rgba(27,61,47,0.06)",
              textDecoration: "none", letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {overviewLabel} →
          </a>
          {links.map(({ label: lbl, href }) => (
            <a
              key={lbl} href={href} onClick={onClose}
              style={{
                fontFamily: FS, fontSize: "0.95rem", color: "var(--green)",
                padding: "12px 16px",
                borderBottom: "1px solid rgba(27,61,47,0.05)",
                textDecoration: "none", display: "block",
              }}
            >
              {lbl}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const close = () => setDrawerOpen(false);

  const drawer = (
    <div
      style={{
        position: "fixed",
        top: "68px",
        left: 0,
        right: 0,
        bottom: 0,
        background: "#fff",
        zIndex: 9999,
        overflowY: "auto",
        padding: "0 24px 56px",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <Accordion label="Services" overviewHref="/services" overviewLabel="All Services" links={serviceLinks} onClose={close} />
      <Accordion label="Facilities Served" overviewHref="/facilities-served" overviewLabel="All Facilities" links={facilityLinks} onClose={close} />

      {[
        { label: "About",         href: "/#about" },
        { label: "Service Areas", href: "/service-areas" },
        { label: "Contact",       href: "/contact" },
      ].map(({ label, href }) => (
        <a
          key={label} href={href} onClick={close}
          style={{
            display: "block", fontFamily: FS, fontSize: "1.05rem", fontWeight: 600,
            color: "var(--green)", padding: "18px 0",
            borderBottom: "1px solid rgba(27,61,47,0.08)", textDecoration: "none",
          }}
        >
          {label}
        </a>
      ))}

      <div style={{ paddingTop: "24px" }}>
        <Link
          href="/get-a-quote" onClick={close}
          style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            width: "100%", padding: "16px 24px", fontSize: "1rem",
            background: "var(--blue)", color: "#fff",
            borderRadius: "5px", textDecoration: "none",
            fontFamily: FS, fontWeight: 600, boxSizing: "border-box",
          }}
        >
          Get a Free Quote →
        </Link>
      </div>

      <div style={{ marginTop: "28px", textAlign: "center", borderTop: "1px solid rgba(27,61,47,0.08)", paddingTop: "20px" }}>
        <a
          href="tel:2109046974"
          style={{ fontFamily: FD, fontSize: "1.15rem", color: "var(--green)", textDecoration: "none", display: "block", marginBottom: "4px" }}
        >
          (210) 904-6974
        </a>
        <span style={{ fontFamily: FS, fontSize: "0.75rem", color: "var(--green)", opacity: 0.4 }}>
          Licensed &amp; Insured · Austin, TX · Est. 2017
        </span>
      </div>
    </div>
  );

  return (
    <div className="nav-mobile">
      {/* Hamburger — lives inside the nav */}
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        aria-label={drawerOpen ? "Close menu" : "Open menu"}
        style={{
          background: "none", border: "none", cursor: "pointer",
          padding: "8px", color: "var(--green)",
          display: "flex", alignItems: "center",
        }}
      >
        {drawerOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        )}
      </button>

      {/* Drawer — portaled to document.body to escape the nav's backdrop-filter containing block */}
      {drawerOpen && typeof document !== "undefined" && createPortal(drawer, document.body)}
    </div>
  );
}
