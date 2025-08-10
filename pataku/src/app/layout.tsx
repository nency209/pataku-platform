import type { Metadata } from "next";

import "./globals.css";





export const metadata: Metadata = {
  title: "pataku clone",
  description: "Shopify-like E-commerce Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <div id="app">
        {children}
        </div>
      </body>
    </html>
  )
}
