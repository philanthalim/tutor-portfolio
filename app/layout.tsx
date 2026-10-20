import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Maths with Purpose | Bukit Panjang Tuition",
  description:
    "Patient, encouraging Secondary Mathematics and Additional Mathematics tuition in Bukit Panjang near Senja LRT. 8 years of tutoring experience, student results and clear hourly rates.",
  robots: { index: true, follow: true },
  authors: [{ name: "Philantha Lim" }],
  openGraph: {
    type: "website",
    locale: "en_SG",
    title: "Maths with Purpose | Bukit Panjang Mathematics Tuition",
    description:
      "Patient, reasoning-focused Secondary Mathematics and Additional Mathematics tuition in Bukit Panjang, near Senja LRT.",
  },
  twitter: { card: "summary" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-SG">
      <body>{children}</body>
    </html>
  );
}
