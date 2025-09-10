"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { navigationItems } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// ---------- DESKTOP NAVBAR (unchanged) ----------
function DesktopNavbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
     <nav className="hidden lg:flex lg:px-1 bg-navbar items-center lg:items-start gap-10 py-4 px-8 xl:px-12 transition-all duration-300 ">
      {navigationItems.map((item, i) => (
        <div key={i} className="relative">
          {item.hasDropdown ? (
            <DropdownMenu
              open={openDropdown === item.title}
              onOpenChange={(open) => setOpenDropdown(open ? item.title : null)}
            >
              <DropdownMenuTrigger className="flex items-center gap-1 text-[15px] font-rubik font-light navbar-text navbat-text-hover hover:cursor-pointer">
                {item.title}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>

              <AnimatePresence>
                {openDropdown === item.title && (
                  <DropdownMenuContent asChild>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="p-2 bg-white space-y-2"
                    >
                      {Array.isArray(item.dropdownItems) &&
                      item.dropdownItems.some((d: any) => d.group) ? (
                        <div className="grid grid-cols-3 gap-4 p-2 bg-white">
                          {(item.dropdownItems as any[]).map((group, idx) => (
                            <div key={idx}>
                              <DropdownMenuLabel className="font-light font-rubik text-[13px]">
                                {group.group}
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <ul className="space-y-4">
                                {group.items.map((sub: any, subIdx: number) => (
                                  <li key={subIdx}>
                                    <Link
                                      href={sub.href}
                                      className="flex items-center justify-between text-muted font-rubik text-hover text-sm"
                                    >
                                      {sub.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-1 w-48">
                          {(item.dropdownItems as any[]).map((sub: any, subIdx) => (
                            <DropdownMenuItem key={subIdx} asChild>
                              <Link
                                href={sub.href}
                                className="flex items-center justify-between w-full font-light font-rubik text-[13px] hover:cursor-pointer text-muted text-hover"
                              >
                                {sub.title}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </DropdownMenuContent>
                )}
              </AnimatePresence>
            </DropdownMenu>
          ) : (
            <Link
              href={item.href}
              className="flex items-center gap-1 text-[15px] font-rubik font-light navbar-text text-hover hover:cursor-pointer"
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}


// ---------- MOBILE NAVBAR (new accordion) ----------
function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <div className="lg:hidden flex justify-center  ">
      {/* Top bar with Menu/X */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-72 bg-navbar  navbar-text px-4 py-3.5"
      >
        <span className="font-medium">MENU</span>
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="bg-white border p-2">
          <ul className="space-y-1">
            {navigationItems.map((item, i) => (
              <li key={i} className="border-b last:border-none">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMenu(item.title)}
                      className="flex justify-between items-center w-full px-3 py-2 text-sm font-medium"
                    >
                      {item.title}
                      {activeMenu === item.title ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {activeMenu === item.title && (
                      <div className="ml-4 bg-gray-50 rounded p-2 space-y-2">
                        {(item.dropdownItems as any[]).map((sub: any, idx) =>
                          sub.group ? (
                            <div key={idx}>
                              <p className="text-xs font-semibold">{sub.group}</p>
                              <ul className="ml-2 space-y-1">
                                {sub.items.map((s: any, j: number) => (
                                  <li key={j}>
                                    <Link
                                      href={s.href}
                                      className="block text-sm text-gray-600 hover:text-black"
                                    >
                                      {s.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <Link
                              key={idx}
                              href={sub.href}
                              className="block text-sm text-gray-600 hover:text-black"
                            >
                              {sub.title}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium hover:text-black"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ---------- MAIN NAVBAR ----------
export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}
