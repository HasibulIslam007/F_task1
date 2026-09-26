import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Order Tracking — Premium Delivery Experience",
  description: "Track your order in real time with a premium, Apple-inspired mobile experience.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#f2f3f7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh overflow-x-clip bg-[#f2f3f7] antialiased">{children}</body>
    </html>
  );
}
