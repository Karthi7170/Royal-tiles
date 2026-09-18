import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./sections.css";
import "./responsive.css";

const siteName = "New Royal Tiles";
const description =
  "Explore premium floor tiles, wall tiles, bathroom tiles, kitchen tiles, outdoor tiles and designer surfaces at New Royal Tiles, Valayambattu, Tamil Nadu.";

export const metadata: Metadata = {
  title: {
    default: siteName + " | Premium Tiles Showroom in Valayambattu",
    template: "%s | " + siteName
  },
  description,
  keywords: [
    "New Royal Tiles",
    "tiles showroom Valayambattu",
    "tiles shop Vaniyambadi",
    "floor tiles Tamil Nadu",
    "bathroom tiles",
    "kitchen tiles",
    "wall tiles",
    "premium tiles showroom"
  ],
  openGraph: {
    title: siteName + " | Premium Tiles Showroom",
    description,
    type: "website",
    locale: "en_IN"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171713"
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
