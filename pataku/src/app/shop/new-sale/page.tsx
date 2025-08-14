import { Metadata } from "next";
import { homePageMetadata } from "@/lib/metadata";
import Header from "@/app/layout/Header";
import ProductDetail from "@/components/product/ProductDetail";
import Footer from "@/app/layout/Footer";

export const metadata: Metadata = {
  ...homePageMetadata,
  title: "New and Sale Badge Product | Pataku",
  description:
    "Discover our featured product with new and sale badges. Limited stock available.",
};

export default function NewSaleProductPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductDetail />
      <Footer />
    </main>
  );
}
