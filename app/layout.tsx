import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Resolves relative OG/canonical URLs to absolute — required for correct
  // social sharing previews and canonical tags.
  metadataBase: new URL("https://www.ovarocommercial.com"),
  title: {
    default: "Ovaro Commercial | Commercial Cleaning Austin TX",
    template: "%s",
  },
  description:
    "Family-owned commercial cleaning company serving Greater Austin, TX since 2017. Janitorial, green cleaning, day porter, post-construction & deep cleaning. Licensed, bonded & insured. Free quote — response within 2 hours.",
  keywords:
    "commercial cleaning Austin, janitorial services Austin, office cleaning Austin TX",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ovaro Commercial",
    title: "Ovaro Commercial | Commercial Cleaning Austin TX",
    description:
      "Family-owned commercial cleaning serving Greater Austin since 2017. Licensed, bonded & insured. Free quote — response within 2 hours.",
    url: "https://www.ovarocommercial.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ovaro Commercial | Commercial Cleaning Austin TX",
    description:
      "Family-owned commercial cleaning serving Greater Austin since 2017. Free quote — response within 2 hours.",
  },
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
        <Analytics />
      </body>
    </html>
  );
}
