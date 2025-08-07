import type { Metadata } from "next";

import "./globals.css";
import TopBar from "./component/Top-Notify";




export const metadata: Metadata = {
  title: "pataku clone",
  description: "Shopify-like E-commerce Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <div id="app">
          <TopBar /> {/* Safe inside a container */}
          {children}
        </div>
      </body>
    </html>
  )
}
