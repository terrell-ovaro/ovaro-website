"use client";
import Link from "next/link";

import { useState } from "react";

const FD = "var(--font-display)";

export function LogoBubble() {
  const [animating, setAnimating] = useState(false);

  const handleMouseEnter = () => {
    if (!animating) setAnimating(true);
  };

  const handleAnimationEnd = () => {
    setAnimating(false);
  };

  return (
    <Link
      href="/"
      className="logo-bubble"
      onMouseEnter={handleMouseEnter}
      style={{
        /* Override any background — only hover state in CSS adds the tint */
        background: "transparent",
        /* Only clip the swoosh while it's animating; at rest no stacking context */
        overflow: animating ? "hidden" : "visible",
      }}
    >
      {/* Mini logo mark */}
      <svg width="22" height="22" viewBox="0 0 100 100" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="50" cy="50" r="46" stroke="#1B3D2F" strokeWidth="2" fill="none" opacity="0.35" />
        <circle cx="50" cy="50" r="38" stroke="#1B3D2F" strokeWidth="14" fill="none" />
        <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M 30 12 A 40 40 0 0 1 78 28" stroke="#6996AD" strokeWidth="13" strokeLinecap="round" fill="none" />
      </svg>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: FD,
          fontSize: "1.1rem",
          letterSpacing: "-0.01em",
          color: "var(--green)",
          position: "relative",
          zIndex: 1,
          whiteSpace: "nowrap",
        }}
      >
        Ovaro Commercial
      </span>

      {/* Mop swoosh — only in the DOM while animating */}
      {animating && (
        <div
          className="mop-swoosh-active"
          onAnimationEnd={handleAnimationEnd}
          style={{
            position: "absolute",
            top: "-10%",
            left: 0,
            width: "42%",
            height: "120%",
            background:
              "linear-gradient(105deg, transparent 0%, rgba(105,150,173,0.45) 40%, rgba(105,150,173,0.55) 55%, rgba(105,150,173,0.45) 70%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(5px)",
            pointerEvents: "none",
            zIndex: 0,
            willChange: "transform",
          }}
        />
      )}
    </Link>
  );
}
