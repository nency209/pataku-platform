import { Metadata } from "next";
import { homePageMetadata } from "@/lib/metadata";
import Header from "@/app/layout/Header";
import Home2Hero from "@/components/sections/Home2Hero";

import Footer from "@/app/layout/Footer";
import BlogPosts from "@/components/blog/BlogPosts";
import LivingRoomBanner from "@/components/sections/LivingRoomBanner";
import Home2LivingRoomBanner from "@/components/sections/Home2LivingRoomBanner";
import Home2NewArrivals from "@/components/sections/Home2NewArrivals";
import { DiningRoomProduct } from "@/components";
import OutdoorFurniture from "@/components/product/OutdoorFurniture";
import Home2Banner from "@/components/sections/Home2Banner";
import Home2FeaturedCategories from "@/components/sections/Home2FeaturesCategories";
import Home2Brand from "@/components/sections/Home2Brand";

export const metadata: Metadata = {
  ...homePageMetadata,
  title: "Home Shop 2 | Pataku",
  description:
    "Explore our second home shop variant featuring modern furniture and home decor. Discover unique pieces for your living space.",
};

export default function Home2Page() {
  return (
    <main className="theme-home2 min-h-screen bg-white">
      <Header />
      <Home2Hero />
      <Home2NewArrivals />
      <Home2LivingRoomBanner />
      <DiningRoomProduct />
      <LivingRoomBanner />
      <OutdoorFurniture />
      <Home2Banner />
      <Home2FeaturedCategories />
      <Home2Brand />
      <BlogPosts />
      <Footer />
    </main>
  );
}
