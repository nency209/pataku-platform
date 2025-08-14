import { Metadata } from "next";
import { homePageMetadata } from "@/lib/metadata";
import Header from "@/app/layout/Header";

import FeaturedCategories from "@/components/sections/FeaturedCategories";

import NewArrivals from "@/components/sections/NewArrivals";
import PromotionalBanner from "@/components/sections/PromotionalBanner";
import BottomSections from "@/components/sections/BottomSections";
import LivingRoomBanner from "@/components/sections/LivingRoomBanner";
import TopSellingProducts from "@/components/product/TopSellingProducts";
import BlogPosts from "@/components/blog/BlogPosts";
import Footer from "@/app/layout/Footer";
import Hero4Hero from "@/components/sections/Home4Hero";

export const metadata: Metadata = homePageMetadata;

export default function Home4Page() {
  return (
    <main className="theme-home4 min-h-screen bg-white">
      <Header />
      <Hero4Hero />
      <FeaturedCategories />
      <NewArrivals />
      <PromotionalBanner />
      <BottomSections />
      <LivingRoomBanner />
      <TopSellingProducts />
      <BlogPosts />
      <Footer />
    </main>
  );
}
