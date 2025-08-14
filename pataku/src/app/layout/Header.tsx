/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { Search, ChevronDown, Menu, ChevronRight } from "lucide-react";
import {
  navigationItems,
  accountOptions,
  currencyOptions,
  browseCategories,
} from "@/constants";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isPromoBannerOpen, setIsPromoBannerOpen] = useState(true);
  const [accountOpen, setAccountOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesOpen(false);
        setOpenSubmenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      {isPromoBannerOpen && (
        <div className="w-full bg-header1 text-center py-2 grid items-center grid-cols-2 xl:grid-cols-[2.5fr_2fr] px-4 gap-4">
          <div className="flex flex-col  sm:flex-row items-center justify-end px-12 gap-4 text-center light font-[var(--font-family)] ">
            <p className="text-sm ">
              All featured products 50% off
            </p>
            <button className="text-sm text-white px-4 py-1 rounded bg-header-button btn-header1">
              Shop Now
            </button>
          </div>

          {/* Close Icon */}
          <div
            className=" flex justify-center items-center hover:cursor-pointer col-span-1 border"
            onClick={() => setIsPromoBannerOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-muted  border border-[var(--header-border-color)] rounded-lg "
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="border-b border-header shadow-sm ">
        <div className="w-full bg-[var(--header-surface)] text-[var(--text-muted)] font-[var(--font-family)] light text-sm px-6 lg:px-16 py-3 flex flex-col sm:flex-row justify-around items-center border-b border-[var(--border-color)]">
          <p className="font-normal">
            Welcome to Pataku Online Shopping Store!
          </p>
          <div className="flex gap-6 items-center relative">
            {/* My Account Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAccountOpen(true)}
              onMouseLeave={() => setAccountOpen(false)}
            >
              <button className="px-3 py-1 bg-[var(--surface-select)] text-[var(--text-muted)] hover:text-[var(--color-accent)]">
                My Account
              </button>
              <ul
                className={`absolute top-full left-0 w-40 bg-white border-b-4 border-b-[var(--text-color)] z-10 ${
                  accountOpen ? "block" : "hidden"
                }   `}
              >
                {accountOptions.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-[var(--text-muted)] hover:text-[var(--color-accent)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Currency Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCurrencyOpen(true)}
              onMouseLeave={() => setCurrencyOpen(false)}
            >
              <button className="px-3 py-1 bg-[var(--surface-select)] text-[var(--text-muted)] hover:text-[var(--color-accent)]">
                USD
              </button>
              <ul
                className={`absolute top-full left-0 w-48 bg-white border-b-4 border-b-[var(--text-color)] z-20 ${
                  currencyOpen ? "block" : "hidden"
                }`}
              >
                {currencyOptions.map((item) => (
                  <li key={item.name}>
                    <button
                      className="w-full text-left px-4 py-2 text-[var(--text-muted)] hover:text-[var(--color-accent)]"
                      onClick={() => {
                        // handleCurrencyChange(item);
                      }}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Row - Logo, Search, Cart */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-[1fr_1.4fr_1fr] items-center py-4 text-center space-y-4 bg-[var(--header-surface2)]">
          {/* Logo */}
          <div className="flex md:justify-end justify-center">
            <Image src="/img/image.png" width={180} height={54} alt="pataku" />
          </div>
          {/* Search Bar */}
          <div className="mx-6 flex justify-center ">
            <div className="relative w-full px-10 md:px-4 xl:px-24 ">
              <input
                type="text"
                placeholder="Search our store"
                className="w-full  py-3 border-b outline-none text-[var(--select-color)]"
              />
              <button className="absolute xl:right-24 right-10 md:right-2 top-1/2 transform -translate-y-1/2 h-10 w-10">
                <Search className="h-8 w-8 text-[var(--select-color)] font-light" />
              </button>
            </div>
          </div>
          {/* Cart and Wishlist */}
          <div className="flex items-center xl:justify-start  justify-center space-x-4">
            <button className="relative flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5" // makes it visible & light
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 "
                viewBox="0 0 24 24"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
            </button>

            <button className="relative flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 "
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </button>
            <button className="relative">
              <span className="absolute right-2 -top-4 bg-[--header-hover-color] text-black text-xs rounded-full h-6 w-6 flex items-center justify-center">
                4
              </span>
              <span className="text-sm font-medium">My Cart</span>
            </button>
          </div>
        </div>

        {/* Bottom Row - Navigation */}

        <div className="sticky top-0 z-10 bg-[var(--header-bg)] border-t border-[var(--border-color)] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_2fr] items-center justify-center gap-8">
            <div className="relative" ref={categoriesRef}>
              <button
                className="bg-black text-white hover:bg-[var(--color-accent)] xl:px-6 py-4 px-14 rounded-lg mx-auto xl:mx-0 xl:float-end flex items-center"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                <Menu className="h-4 w-4 mr-2" />
                Browse Categories
                <ChevronDown
                  className={`h-4 w-4 ml-2 transition-transform ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCategoriesOpen && (
                <div className="absolute top-full left-0 xl:left-auto xl:right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                  {browseCategories.map((category) => (
                    <div key={category.title} className="relative">
                      <div
                        className="flex items-center justify-between p-3 text-sm text-gray-700 hover:text-[var(--color-accent)] hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                        onClick={() => {
                          if (category.hasSubmenu) {
                            setOpenSubmenu(
                              openSubmenu === category.title
                                ? null
                                : category.title
                            );
                          } else {
                            // Navigate to the category page
                            window.location.href = category.href;
                          }
                        }}
                      >
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                        <span className="flex-1">{category.title}</span>
                        {category.hasSubmenu && (
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              openSubmenu === category.title ? "rotate-90" : ""
                            }`}
                          />
                        )}
                      </div>

                      {category.hasSubmenu &&
                        openSubmenu === category.title && (
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
                </div>
              )}
            </div>

            <nav className="flex items-center space-x-6 ">
              {navigationItems.map((item) => (
                <div key={item.title} className="relative">
                  {Array.isArray((item as any).dropdownItems) ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.title ? null : item.title
                          )
                        }
                        className="text-[var(--surface3-text)] hover:text-[var(--color-accent)] transition-colors duration-200 flex items-center"
                      >
                        {item.title}
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </button>

                      {openDropdown === item.title && (
                        <>
                          {item.title === "SHOP" ? (
                            <div className="absolute left-0 mt-2 w-max min-w-[320px] bg-white border rounded shadow-lg z-20 flex gap-8 p-4">
                              {(item as any).dropdownItems.map((group: any) => (
                                <div key={group.group}>
                                  <div className="text-black mb-2">
                                    {group.group}
                                  </div>
                                  <ul>
                                    {group.items.map((drop: any) => (
                                      <li key={drop.href}>
                                        <Link
                                          href={drop.href}
                                          className="flex items-center gap-2 px-2 py-1 text-[var(--text-muted)] hover:text-[var(--color-accent)] rounded transition-colors duration-200"
                                        >
                                          {drop.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-20">
                              {(item as any).dropdownItems.map((drop: any) => (
                                <Link
                                  key={drop.title}
                                  href={drop.href}
                                  className="block px-4 py-2 text-[var(--text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
                                >
                                  {drop.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[var(--surface3-text)] hover:text-[var(--color-accent)] transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
