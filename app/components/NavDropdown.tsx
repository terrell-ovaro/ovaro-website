"use client";
import Link from "next/link";

import { useState, useRef } from "react";

const FS = "var(--font-sans, 'DM Sans', sans-serif)";

const dropdownItems = [
  { label: "Janitorial Services", href: "/services/janitorial" },
  { label: "Green Cleaning",      href: "/services/green-cleaning" },
  { label: "Day Porter",          href: "/services/day-porter" },
  { label: "Post-Construction",   href: "/services/post-construction" },
  { label: "Deep Cleaning",       href: "/services/deep-cleaning" },
];

function DropdownItem({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: hovered ? "10px 14px 10px 20px" : "10px 14px",
        borderRadius: "8px",
        textDecoration: "none",
        fontFamily: FS,
        fontSize: "0.875rem",
        fontWeight: 500,
        color: hovered ? "var(--blue)" : "var(--green)",
        background: hovered ? "rgba(105,150,173,0.07)" : "transparent",
        borderLeft: hovered ? "2px solid var(--blue)" : "2px solid transparent",
        whiteSpace: "nowrap",
        transition: "background 0.16s ease, color 0.16s ease, padding-left 0.18s ease, border-color 0.16s ease",
      }}
    >
      {/* Dot indicator */}
      <span style={{
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: hovered ? "var(--blue)" : "rgba(105,150,173,0.4)",
        flexShrink: 0,
        transition: "background 0.16s ease, transform 0.16s ease",
        transform: hovered ? "scale(1.5)" : "scale(1)",
        display: "inline-block",
      }} />
      {label}
    </a>
  );
}

export function NavDropdown({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <Link
        href="/services"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          fontFamily: FS,
          fontSize: "0.875rem",
          fontWeight: 500,
          color: active === "Services" ? "var(--blue)" : "var(--green)",
          textDecoration: "none",
          whiteSpace: "nowrap",
          transition: "color 0.18s",
        }}
      >
        Services
        <svg
          width="10" height="6" viewBox="0 0 10 6"
          fill="none" stroke="currentColor" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round"
          style={{
            transition: "transform 0.22s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path d="M1 1l4 4 4-4" />
        </svg>
      </Link>

      {/* Dropdown panel */}
      <div
        style={{
          position: "absolute",
          top: "calc(100% + 10px)",
          left: "50%",
          transform: open
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(6px)",
          background: "#fff",
          border: "1px solid rgba(27,61,47,0.1)",
          borderRadius: "12px",
          boxShadow: "0 16px 48px rgba(27,61,47,0.11), 0 2px 8px rgba(27,61,47,0.06)",
          padding: "6px",
          minWidth: "220px",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.2s ease, transform 0.2s ease, visibility 0.2s",
          zIndex: 200,
          /* Force vertical stack — no CSS class needed */
          display: "flex",
          flexDirection: "column",
        }}
      >
        {dropdownItems.map((item) => (
          <DropdownItem key={item.label} label={item.label} href={item.href} />
        ))}
      </div>
    </div>
  );
}
