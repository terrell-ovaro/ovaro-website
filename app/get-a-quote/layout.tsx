import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote | Ovaro Commercial",
  description:
    "Request a free commercial cleaning quote from Ovaro Commercial in Austin, TX. Janitorial, green cleaning, day porter, post-construction & deep cleaning. Licensed & insured — response within 2 hours, no obligation.",
  keywords:
    "commercial cleaning quote Austin TX, free cleaning estimate Austin, janitorial quote Austin Texas",
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
