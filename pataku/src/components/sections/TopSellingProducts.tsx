"use client";
import { useState } from "react";
import ProductCard from "../product/ProductCard";
import { newArrivalsProducts } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function TopSellingProducts() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handleNext = () => {
    if (startIndex < newArrivalsProducts.length - visibleCount) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[32px] font-bold font-lato text-black mb-2">
            Top{" "}
            <span className="italic text-[32px] font-light font-lato text-black">
              Selling
            </span>{" "}
            Products
          </h2>
          <p className="text-muted font-rubik font-light text-base">
            Browse the collection of our top selling. You will definitely find
            what you are looking for.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              }}
            >
              {newArrivalsProducts.map((product, index) => (
                <div
                  key={index}
                  className="w-1/2 sm:w-1/3 md:w-1/4 flex-shrink-0 px-2"
                >
                  <ProductCard
                   slug={product.slug}
                    name={product.name}
                    price={product.price}
                    badges={product.badges}
                    discount={product.discount}
                    image={product.image}
                    originalPrice={product.originalPrice}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Prev Button */}
          <Button
            onClick={handlePrev}
            disabled={startIndex === 0}
            variant="outline"
            className="absolute -left-4  top-1/2 -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>

          {/* Next Button */}
          <Button
            onClick={handleNext}
            disabled={startIndex >= newArrivalsProducts.length - visibleCount}
            variant="outline"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
