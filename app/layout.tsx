import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ovaro Commercial | Commercial Cleaning Austin TX",
  description:
    "Family-owned commercial cleaning company serving Austin, TX since 2017. Office cleaning, financial institutions, and retail locations. Free quote — response within 2 hours.",
  keywords:
    "commercial cleaning Austin, janitorial services Austin, office cleaning Austin TX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
      >
        {children}
      </body>
    </html>
  );
}
