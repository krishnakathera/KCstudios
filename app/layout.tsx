import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kcstudios.com"),
  title: `${site.name} | Photography & Videography`,
  description: site.description,
  openGraph: {
    title: `${site.name} | Photography & Videography`,
    description: site.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Photography & Videography`,
    description: site.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
