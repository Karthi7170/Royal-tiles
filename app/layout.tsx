import type { Metadata, Viewport } from "next";
import { logoUrl, showroomImageUrl } from "@/lib/site";
import "./globals.css";
import "./sections.css";
import "./responsive.css";
import "./experience.css";

const siteName = "New Royal Tiles";
const description =
  "Explore premium tiles, visualize tile directions in your own room, calculate area and visit New Royal Tiles showrooms in Valayambattu, Vellore, Gudiyatham and Pernambut.";

export const metadata: Metadata = {
  title: {
    default: siteName + " | Premium Tiles, Room Visualizer & 4 Showrooms",
    template: "%s | " + siteName
  },
  description,
  keywords: [
    "New Royal Tiles",
    "tiles showroom Vaniyambadi",
    "tiles showroom Vellore",
    "tiles showroom Gudiyatham",
    "tiles showroom Pernambut",
    "tile visualizer Tamil Nadu",
    "floor tiles Tamil Nadu",
    "bathroom tiles",
    "kitchen tiles",
    "wall tiles",
    "premium tiles showroom"
  ],
  openGraph: {
    title: siteName + " | Premium Tiles & Smart Room Visualizer",
    description,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: showroomImageUrl,
        alt: "New Royal Tiles showroom"
      }
    ]
  },
  icons: {
    icon: logoUrl,
    apple: logoUrl
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#160d09"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
