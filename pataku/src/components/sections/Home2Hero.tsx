"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu, ChevronDown } from "lucide-react";
import { HeroProps, HeroContent } from "@/types";
import { browseCategories } from "@/constants";
import ServiceGuarantees from '@/components/sections/ServiceGuarantees'
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home2Hero({ content }: HeroProps = {}) {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  
  const defaultContent: HeroContent = {
    subtitle: "Beautiful and luxurious Decor at Affordable price",
    title: "Slide",
    title2: " CHAIR",
    buttonText: "SHOP NOW",
    buttonLink: "/products",
    image: "/img/slider5.jpg",
  };
  const heroContent = content || defaultContent;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      anchorPlacement: "center-center",
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setIsCategoriesOpen(false);
        setOpenSubmenu(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-surface py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 border bg-white p-4 gap-2">
          {/* Left Sidebar - Browse Categories */}
          <div className="lg:col-span-1 relative" ref={categoriesRef}>
            <div 
              className="flex items-center justify-start gap-2 mb-4 cursor-pointer"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <Menu className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-light text-gray-900">
                BROWSE CATEGORIES
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {isCategoriesOpen && (
              <nav className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                {browseCategories.map((category) => (
                  <div key={category.title} className="relative">
                    <div
                      className="flex items-center justify-between p-3 text-sm text-gray-700 hover:text-[var(--color-accent)] hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                      onClick={() => {
                        if (category.hasSubmenu) {
                          setOpenSubmenu(openSubmenu === category.title ? null : category.title);
                        } else {
                          // Navigate to the category page
                          window.location.href = category.href;
                        }
                      }}
                    >
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      <span className="flex-1">{category.title}</span>
                      {category.hasSubmenu && (
                        <ChevronRight className={`w-4 h-4 transition-transform ${openSubmenu === category.title ? 'rotate-90' : ''}`} />
                      )}
                    </div>
                    
                    {category.hasSubmenu && openSubmenu === category.title && (
                      <div className="bg-gray-50 border-l-2 border-[var(--color-accent)]">
                        {category.submenuItems?.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-6 py-2 text-sm text-gray-600 hover:text-[var(--color-accent)] hover:bg-gray-100 transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            )}
          </div>

          {/* Center - Hero Banner */}
          <div className="lg:col-span-2 ">
            <div className="relative  rounded-lg overflow-hidden ">
              <div className="relative w-full  sm:h-[420px] ">
                {/* Background Image */}
                <Image
                  src={heroContent.image}
                  alt={heroContent.title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Text Overlay */}
                <div
                  className="absolute inset-0 py-8  lg:mr-48 mx-auto pl-12 items-center space-y-4"
                  // data-aos="fade-right"
                >
                  <p className="text-hero-subtitle text-[22px] light font-[var(--font-family)] sm:text-lg">
                    {heroContent.subtitle}
                  </p>
                  <h1 className="text-hero-title text-5xl sm:text-6xl lg:text-7xl font-[var(--font-family)] bold ">
                    {heroContent.title}
                  </h1>
                  <h1 className="text-hero-title text-4xl sm:text-5xl font-[var(--font-family)] bold leading-tight ">
                    {heroContent.title2}
                  </h1>

                  <a
                    href={heroContent.buttonLink}
                    // data-aos="zoom-in"
                    className="btn-hero inline-block mt-6 w-full sm:w-auto p-2 text-sm  font-normal "
                  >
                    {heroContent.buttonText}
                  </a>
                </div>

                {/* Slider Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Promotional Blocks */}
          <div className="lg:col-span-1 space-y-4">
            <div
              className="rounded-lg overflow-hidden w-full h-[198px]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src="/img/home2-banner1.jpg"
                alt="Storage & Shelving"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div
              className="rounded-lg overflow-hidden w-full h-[198px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Image
                src="/img/home2-banner2.jpg"
                alt="Storage & Shelving"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
          <ServiceGuarantees />
      </div>
    </section>
  );
}
