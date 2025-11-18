import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usman Fast Food - Digital Menu",
  description: "Browse our delicious menu and order your favorite food",

  icons: {
    icon: "/favicon.ico", // Normal browser favicon
    apple: "/apple-touch-icon.png", // iPhone/iPad icon
    shortcut: "/favicon.ico",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
