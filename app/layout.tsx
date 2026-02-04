import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer, SocialSidebar } from "@/components/layout";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "Pulverkrāsotava | Profesionāla pulverkrāsošana Latvijā",
    template: "%s | Pulverkrāsotava",
  },
  description: "Profesionāla pulverkrāsošana, smilšu strūklošana un metālapstrāde Latvijā. Augsta kvalitāte, konkurētspējīgas cenas un ātra izpilde.",
  keywords: ["pulverkrāsošana", "smilšu strūklošana", "metālapstrāde", "metāla konstrukcijas", "Latvija"],
  authors: [{ name: "Pulverkrāsotava" }],
  creator: "Pulverkrāsotava",
  metadataBase: new URL("https://pulverkrasotava.lv"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "lv_LV",
    url: "https://pulverkrasotava.lv",
    siteName: "Pulverkrāsotava",
    title: "Pulverkrāsotava | Profesionāla pulverkrāsošana Latvijā",
    description: "Profesionāla pulverkrāsošana, smilšu strūklošana un metālapstrāde Latvijā.",
    images: [
      {
        url: "/images/header-background.jpg",
        width: 1200,
        height: 630,
        alt: "Pulverkrāsotava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulverkrāsotava | Profesionāla pulverkrāsošana Latvijā",
    description: "Profesionāla pulverkrāsošana, smilšu strūklošana un metālapstrāde Latvijā.",
    images: ["/images/header-background.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <GoogleAnalytics measurementId="G-T348P4H857" />
        <Header />
        <SocialSidebar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
