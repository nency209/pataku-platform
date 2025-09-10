"use client";
import { useState, useEffect } from "react";
import ProductCard from "@/components/product/ProductCard";
import { newArrivalsProducts } from "@/constants";
import { Button } from "../../ui/button";

export default function Home2NewArrivals() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // ✅ Update visibleCount based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // sm
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // md
      } else {
        setVisibleCount(3); // lg+
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

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
    <section className="py-6">
      <div className="mx-auto xl:max-w-6xl lg:max-w-4xl md:max-w-2xl px-4 sm:px-6 lg:px-0">
        <div className="mb-6">
          <div className="flex items-center">
            <h2 className="text-2xl text-black font-lato font-bold">
              New <span className="italic font-light">Collections </span>Of
              Arrivals
            </h2>
            <div className="flex-1 border-t border-color mx-4"></div>
            <div className="flex gap-2">
              <Button
                onClick={handlePrev}
                variant="outline"
                size="sm"
                className="w-6 h-6 border flex items-center justify-center"
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
              <Button
                onClick={handleNext}
                variant="outline"
                size="sm"
                className="w-6 h-6 border flex items-center justify-center"
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

          <p className="text-[var(--text-muted)] text-base font-lato mt-2">
            Browse the collection of our new products. You will definitely find
            what you are looking for.
          </p>
        </div>

        {/* ✅ Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex  transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
            }}
          >
            {newArrivalsProducts.map((product, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-6 `}
                style={{ width: `${100 / visibleCount}%` }} // ✅ dynamic width
              >
                <ProductCard
                  slug={product.slug}
                  name={product.name}
                  price={product.price}
                  badges={product.badges}
                  discount={product.discount}
                  image={product.image}
                  oldprice={product.oldprice}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
