import type { Metadata, Viewport } from "next";
import { Saira } from "next/font/google";
import "./globals.scss";
import SummaryLargeImage from "#/summary-large-image.png";
import FavIcon from "#/favicon.png";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "Nero - %s",
    default: "Nero - next.js template",
  },
  description: "Template for NextJS apps",
  icons: [
    {
      rel: "icon",
      url: FavIcon.src,
    },
    {
      rel: "apple-touch-icon",
      url: FavIcon.src,
    },
  ],
  metadataBase: new URL("https://nero.nfteam.eu"),
  openGraph: {
    title: "Nero - next.js template",
    siteName: "Nero",
    description: "Template for NextJS apps",
    url: "https://nero.nfteam.eu",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Nero",
      },
    ],
  },
  twitter: {
    title: "Nero - next.js template",
    description: "Template for NextJS apps",
    card: "summary_large_image",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Nero",
      },
    ],
  },
  alternates: {
    canonical: "https://nero.nfteam.eu",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>{children}</body>
    </html>
  );
}
