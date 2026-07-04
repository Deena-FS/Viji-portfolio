import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

// Display serif — matches the AskHR case study's headings.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.meta.title,
    template: `%s · ${site.name}`,
  },
  description: site.meta.description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  keywords: [
    "Product Manager",
    "Product Management",
    "Portfolio",
    "Case studies",
    site.fullName,
  ],
  openGraph: {
    type: "website",
    url: site.url,
    title: site.meta.title,
    description: site.meta.description,
    siteName: site.meta.title,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1e3128",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} ${fraunces.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
