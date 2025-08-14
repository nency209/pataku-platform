"use client";

import Image from "next/image";
import ProductCard from "@/components/product/ProductCard";
import { newArrivalsProducts } from "@/constants";



export default function HomePage() {
  const products = newArrivalsProducts;
  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Top Banners */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Image src="/img/home3-banner1.jpg" alt="" width={380} height={230} className="w-full object-cover border" />
        <Image src="/img/home3-banner2.jpg" alt="" width={380} height={230} className="w-full object-cover border" />
        <Image src="/img/home3-banner3.jpg" alt="" width={380} height={230} className="w-full object-cover border" />
      </div>

      {/* Sidebar + Products */}
      <div className="grid grid-cols-[1fr_3.2fr] gap-4">
        {/* Sidebar */}
        <aside className="border rounded-lg p-2 flex flex-col justify-between">
          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Browse Categories</h4>
            <ul className="space-y-2">
              {["Home", "Shop", "Product", "Pages", "Blog", "Contact"].map((cat) => (
                <li key={cat} className="cursor-pointer hover:text-green-600">
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Banner */}
          <div className="mt-4">
            <Image
              src="/img/home3-banner8.jpg"
              alt=""
              width={255}
              height={255}
              className="w-full object-cover border"
            />
          </div>
        </aside>

        {/* Products Section */}
        <section>
          <div className="mb-4">
            <h2 className="text-2xl font-bold">
              New <span className="italic font-light">Collections</span> Of Arrivals
            </h2>
            <p className="text-gray-500 text-base">
              Browse the collection of our new products. You will definitely find what you are looking for.
            </p>
          </div>

          {/* Product Grid - 4 per row on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
