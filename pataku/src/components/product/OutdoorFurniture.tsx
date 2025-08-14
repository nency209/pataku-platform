"use client";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types";

export default function OutdoorFurniture() {
  "use client";

  const tabs = ["Featured Product", "Chair", "Sofa"];
  const [active, setactive] = useState(0);
  const products: Product[] = [
    {
      name: "1. New and sale badge",
      price: 110.0,
      image: "/img/product-chair-01.jpg",
      originalPrice: 130.0,
    },
    {
      name: "2. New badge product",
      price: 80.0,
      image: "/img/product-chair-02.jpg",
    },
    {
      name: "3. Variable Product",
      price: 50.0,
      image: "/img/product-table-01.jpg",
    },
    {
      name: "4. Grey armchair",
      price: 19.0,
      image: "/img/product-armchair-01.jpg",
    },
    {
      name: "5. Small wooden side table",
      price: 55.0,
      image: "/img/product-table-02.jpg",
    },
    {
      name: "6. Simple Product",
      price: 70.0,
      image: "/img/product-sofa-01.jpg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto my-20">
      {/* Title and Tabs */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-6">
        <h2 className="text-xl font-bold">
          Outdoor<span className="italic font-normal">Furniture</span>
        </h2>
        <div className="flex gap-2 text-sm">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setactive(idx)}
              className={`${
                idx === active
                  ? "border-2 border-teal-500 text-teal-500"
                  : "text-gray-500"
              } pb-1 hover:text-teal-500 px-2`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Products + Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Products Grid (2 cols inside) */}
        <div className="lg:col-span-3 grid grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex  text-center ">
              <div className="relative w-24 h-24">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-1 flex flex-col ">
                <p className="mt-2 text-sm">{product.name}</p>
                <div>
                  {product.originalPrice && (
                    <span className="line-through text-gray-400 text-sm mr-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-teal-600 font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Banner */}
        <div className="relative row-span-2 col-span-1 w-full h-full">
          <Image
            src="/img/home2-banner5.jpg"
            alt="Dining Offer"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
