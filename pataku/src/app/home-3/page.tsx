import { Metadata } from "next";
import { homePageMetadata } from "@/lib/metadata";
import Header from "@/app/layout/Header";
import Home3Hero from "@/components/sections/Home3Hero";

import Footer from "@/app/layout/Footer";
import Home2Banner from "@/components/sections/Home2Banner";
import { BottomSections, LivingRoomBanner } from "@/components";
import Home2Brand from "@/components/sections/Home2Brand";
import Home2FeaturedCategories from "@/components/sections/Home2FeaturesCategories";
import Home3NewArrivals from "@/components/sections/Home3NewArrivals";

export const metadata: Metadata = {
  ...homePageMetadata,
  title: "Home Shop 3 | Pataku",
  description:
    "Discover Home Shop 3 with a fresh green theme and a modern minimal layout.",
};

export default function Home3Page() {
  return (
    <main className="theme-home3 min-h-screen ">
      <Header />
      <Home3Hero />
      <Home3NewArrivals />
      <Home2Banner />

      <BottomSections />
      <LivingRoomBanner />
      <Home2FeaturedCategories />
      <Home2Brand />
      <Footer />
    </main>
  );
}
