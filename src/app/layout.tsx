import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hausfeesandra.de"),
  title: "Hausfee Sandra – Ihre helfende Hand im Alltag in Eisenhüttenstadt",
  description:
    "Hilfe im Haushalt, Alltagsbegleitung, Einkäufe, Arzt- & Behördengänge. Herzlich, zuverlässig und individuell. Jetzt Kontakt aufnehmen!",
  openGraph: {
    type: "website",
    title: "Hausfee Sandra – Ihre helfende Hand im Alltag",
    description:
      "Unterstützung für Senior:innen, Familien und Menschen mit Unterstützungsbedarf in Eisenhüttenstadt.",
    url: "https://hausfeesandra.de",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Hausfee Sandra",
    description:
      "Hilfe im Haushalt, Alltagsbegleitung und Unterstützung im Alltag in Eisenhüttenstadt.",
    url: "https://hausfeesandra.de",
    telephone: "+49 163 9512158",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Eisenhüttenstadt",
      addressCountry: "DE",
    },
    areaServed: "Eisenhüttenstadt und Umgebung",
  };

  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />

        {/* Plausible Analytics */}
        <script
          defer
          data-domain="hausfeesandra.de"
          src="https://plausible.io/js/script.js"
        />

        {/* Structured data (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-neutral-50 text-neutral-900" suppressHydrationWarning>
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
