import { Metadata } from 'next'
import { homePageMetadata } from '@/lib/metadata'
import Header from '@/components/layout/Header'
import Hero from './components/Hero'
import ServiceGuarantees from './components/ServiceGuarantees'
import FeaturedCategories from './components/FeaturedCategories'
import NewArrivals from './components/NewArrivals'
import PromotionalBanner from './components/PromotionalBanner'
import BottomSections from './components/BottomSections'
import LivingRoomBanner from './components/LivingRoomBanner'
import TopSellingProducts from './components/TopSellingProducts'
import BlogPosts from './components/BlogPosts'
import Footer from './components/Footer'

export const metadata: Metadata = homePageMetadata

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServiceGuarantees />
      <FeaturedCategories />
      <NewArrivals />
      <PromotionalBanner />
      <BottomSections />
      <LivingRoomBanner />
      <TopSellingProducts />
      <BlogPosts />
      <Footer />
    </main>
  )
}
