import { Metadata } from "next";
import { homePageMetadata } from "@/lib/metadata";
import {
  
  BrowseCategories,
  Navbar,
} from "@/components/sections";

import { Footer, Header, NavigationIndex } from "@/layout";
import ShopPage from "@/components/shop/Shoppage";

export const metadata: Metadata = homePageMetadata;

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="sticky top-0 z-50 bg-white border-t border-color">
        <div
          className="
    grid 
    grid-cols-1 
    gap-6 
    lg:grid-cols-[0.5fr_1fr] lg:items-center lg:justify-start
    xl:grid-cols-[1.2fr_2.3fr]
  "
        >
          <BrowseCategories />

          <Navbar />
        </div>
      </div>

      <NavigationIndex />
      <ShopPage/>
      <Footer/>
    </main>
  );
}
