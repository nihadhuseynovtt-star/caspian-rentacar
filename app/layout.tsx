import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caspian Rent A Car",
  description: "Bakıda avtomobil kirayəsi",
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}