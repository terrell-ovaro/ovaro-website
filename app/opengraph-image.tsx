import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

// Branded social share card — used for link previews across the whole site.
export const alt = "Ovaro Commercial — Commercial Cleaning, Austin TX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const oblata = await readFile(
    join(process.cwd(), "public/fonts/OblataDisplayRegular.otf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1B3D2F",
          padding: "72px 80px",
        }}
      >
        {/* Top row — eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "44px", height: "3px", background: "#6996AD", display: "flex" }} />
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              letterSpacing: "6px",
              color: "#6996AD",
              fontWeight: 600,
            }}
          >
            EST. 2017 · AUSTIN, TEXAS
          </div>
        </div>

        {/* Center — wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Oblata",
              fontSize: "120px",
              color: "#F1EDE2",
              lineHeight: 1,
              letterSpacing: "-2px",
            }}
          >
            Ovaro Commercial
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "38px",
              color: "#F1EDE2",
              opacity: 0.82,
              marginTop: "28px",
              maxWidth: "900px",
            }}
          >
            The cleaning standard Austin&rsquo;s best businesses demand.
          </div>
        </div>

        {/* Bottom row — trust line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "26px",
            color: "#F1EDE2",
            opacity: 0.6,
          }}
        >
          Licensed · Bonded · Family-Owned · Response within 2 hours
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Oblata", data: oblata, style: "normal", weight: 400 },
      ],
    }
  );
}
