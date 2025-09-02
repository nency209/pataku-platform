import type { Metadata } from "next";

import { Footer, Header, NavigationIndex } from "@/layout";
import { Navbar, BrowseCategories } from "@/components";

export const metadata: Metadata = {
  title: "pataku clone",
  description: "Shopify-like E-commerce Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div id="app">
          <Header />
          <div className="sticky top-0 z-50 bg-white border-t border-color">
            <div
              className="
    grid 
    grid-cols-1 
    gap-8 
    lg:gap-6
    md:gap-0
    sm:grid-cols-1 sm:items-center sm:justify-center
    md:grid-cols-2 md:items-center md:justify-center 
    lg:grid-cols-[0.5fr_1.1fr] lg:items-center lg:justify-start
    xl:grid-cols-[1.2fr_2.3fr]
  "
            >
              <BrowseCategories />

              <Navbar />
            </div>
          </div>
          <NavigationIndex />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
