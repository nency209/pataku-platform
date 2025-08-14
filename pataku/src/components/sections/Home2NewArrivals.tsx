"use client";
import { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { newArrivalsProducts } from "@/constants";

export default function Home2NewArrivals() {

  const [startIndex, setStartIndex] = useState(0);
  const products = newArrivalsProducts;

  const handleNext = () => {
    if (startIndex < products.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="mx-auto overflow-hidden mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl text-gray-900 mb-2 font-[var(--font-family)] bold">
              New <span className="italic font-light">Collections </span>Of Arrivals
            </h2>
            <p className="text-[var(--text-muted)] text-base font-[var(--font-family)]">
              Browse the collection of our new products. You will definitely find what you are looking for.
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={handlePrev} className="w-6 h-6 border flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button onClick={handleNext} className="w-6 h-6 border flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-4">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
