"use client";
import { useState, useMemo } from "react";
import { accountOptions, currencyOptions, navigationItems } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import MiniCart from "@/components/cart/minicart";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


export default function Header() {
  const [isPromoBannerOpen, setIsPromoBannerOpen] = useState(true);
  const [open, setopen] = useState(false);
  const [opencurrency, setopencurrency] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

// calculate total quantity
const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

const productLinks = useMemo(() => {
  const productNav = navigationItems.find((nav) => nav.title === "PRODUCT");

  if (!productNav || !productNav.dropdownItems) return [];

  return productNav.dropdownItems.map((item: any) => ({
    title: item.title,
    href: item.href,
  }));
}, []);

const filteredResults = useMemo(() => {
  if (!searchQuery) return [];
  return productLinks.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [searchQuery, productLinks]);



  return (
    <header>
      {isPromoBannerOpen && (
        <div className="w-full bg-banner text-center py-2 grid items-center grid-cols-[1.5fr_0.5fr] xl:grid-cols-[2.1fr_1.4fr] xl:px-16  sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 text-center">
            <p className="text-sm font-light font-rubik text-black">
              All featured products 50% off
            </p>
            <Button
              variant="ghost"

              className="text-sm text-white border border-color btn-banner-bg bg-primary-hover font-semibold font-rubik hover:cursor-pointer"
            >
              Shop Now
            </Button>
          </div>

          {/* Close Icon */}
          <div
            className="flex justify-center items-center hover:cursor-pointer "
            onClick={() => setIsPromoBannerOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-muted border btn-border-color rounded-sm"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              viewBox="0 0 28 28"
            >
              <line x1="7" y1="7" x2="21" y2="21" />
              <line x1="7" y1="21" x2="21" y2="7" />
            </svg>
          </div>
        </div>
      )}

      <div className="w-full bg-header border-b border-color  font-rubik light text-sm px-6 lg:px-16 py-3 flex flex-col sm:flex-row justify-around items-center ">
        <p className="font-rubik header-text text-[13px]">
          Welcome to Pataku Online Shopping Store!
        </p>
        <div className="flex gap-2 items-center ">
          {/* My Account Dropdown */}
          <div className="relative">
            <DropdownMenu open={open} onOpenChange={setopen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 font-rubik font-normal header-text menu-hover-color text-[13px] hover:cursor-pointer"
                >
                  My Account 2
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down-icon lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <AnimatePresence>
                {open && (
                  <DropdownMenuContent
                    asChild
                    align="start"
                    side="bottom"
                    sideOffset={4}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-40 bg-white border-b-3 menu-border-color shadow-md "
                    >
                      {accountOptions.map((item) => (
                        <DropdownMenuItem key={item.label} asChild>
                          <Link
                            href={item.href}
                            className="block w-full px-4 py-2 text-hover text-muted hover:cursor-pointer"
                          >
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </motion.div>
                  </DropdownMenuContent>
                )}
              </AnimatePresence>
            </DropdownMenu>
          </div>
          <span className="header-text">|</span>
          {/* Currency Dropdown */}
          <div className="relative">
            <DropdownMenu open={opencurrency} onOpenChange={setopencurrency}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 font-rubik font-normal  header-text menu-hover-color text-[13px] hover:cursor-pointer"
                >
                  USD
                </Button>
              </DropdownMenuTrigger>
              <AnimatePresence>
                {opencurrency && (
                  <DropdownMenuContent
                    asChild
                    align="start"
                    side="bottom"
                    sideOffset={4}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-48 bg-white border-b-3 menu-border-color shadow-md "
                    >
                      {currencyOptions.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                          <Link
                            href={item.name}
                            className="block w-full px-4 py-2 text-muted text-hover hover:cursor-pointer"
                          >
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </motion.div>
                  </DropdownMenuContent>
                )}
              </AnimatePresence>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-[1fr_1.4fr_1fr] items-center py-6 text-center space-y-4 bg-header2">
        <div className="flex md:justify-end justify-center">
          <Image src="/img/image.jpg" width={180} height={54} alt="pataku" />
        </div>

        <div className="mx-8 flex justify-center  ">
          <div className="relative w-full px-10 md:px-4 xl:px-24 ">
           
             <input
            type="text"
            placeholder="Search our store"
            className="w-full  py-4 border-b border-color outline-none px-2 placeholder:font-rubik placeholder:font-normal placeholder:text-[13px] placeholder:text-[#91959B]"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearchOpen(true);
            }}
            onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)} // small delay so user can click link
          />
            <button className="absolute xl:right-24 right-10 md:right-2 top-1/2 transform -translate-y-1/2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="28"
                viewBox="0 0 25 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
            </button>
            <AnimatePresence>
            {isSearchOpen && filteredResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 right-0 bg-white shadow-md border mt-2 max-h-60 overflow-y-auto z-80"
              >
                {filteredResults.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center xl:justify-start  justify-center space-x-4">
          <div className="relative flex items-center justify-center hover:cursor-pointer">
            <Link href="/wishlist">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1" // makes it visible & light
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-hover "
                viewBox="0 0 24 24"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
            </Link>
          </div>
          
          <div
            className="relative flex items-center justify-center hover:cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-hover  "
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>

            <AnimatePresence>
              {isCartOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-12 right-0"
                >
                  <MiniCart onClose={() => setIsCartOpen(false)} />
                </motion.div>
              )}
            </AnimatePresence>

            <button className="relative flex items-center justify-center">
            <span className="absolute  -top-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
               {cartCount}
            </span>
            <span className="text-[13px] pt-4 font-light font-rubik">
              My Cart
            </span>
          </button>
          </div>
        </div>
      </div>
    </header>
  );
}
