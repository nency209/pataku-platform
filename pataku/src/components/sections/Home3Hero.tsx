"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Comfort & Practicality",
    description: "An elegant selection of chair combining comfort & practicality",
    image: "/img/slider8.jpg",
    buttonText: "Shop Now",
  },
  {
    title: "Modern & Stylish",
    description: "Upgrade your home with our modern furniture collection",
    image: "/img/chair2.png",
    buttonText: "Explore",
  },
  {
    title: "Quality & Durability",
    description: "Furniture that lasts and stays beautiful for years",
    image: "/img/chair3.png",
    buttonText: "Discover",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="">
     <div className="w-full ">
             <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[600px]">
      {/* Background Image */}
      <Image
        src={slides[current].image}
        alt={slides[current].title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for darker text visibility */}
      <div className="absolute inset-0 "></div>

      {/* Text Content */}
      <div className="absolute left-1/2 -translate-x-3/4 inset-0 flex flex-col justify-center items-start px-8 md:px-20 text-white">
        <p className="text-green-300 font-medium uppercase tracking-wide">
          {slides[current].title}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-black leading-snug my-4 max-w-xl">
          {slides[current].description}
        </h2>
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
          {slides[current].buttonText}
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200/80 p-2 rounded hover:bg-gray-300"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200/80 p-2 rounded hover:bg-gray-300"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full border border-green-500 ${
              current === index ? "bg-green-500" : "bg-white"
            }`}
          />
        ))}
      </div>
      </div>
    </div>
    </section>
  );
}
