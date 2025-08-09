import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pataku - Online Shopping Store",
  description: "Beautiful and luxurious decor at affordable prices",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
