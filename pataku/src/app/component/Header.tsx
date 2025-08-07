"use client";

import React, { useState } from "react";
import Link from "next/link";

type accountOptions = {
  label: string;
  href: string;
};

type currencyOption = {
  name: string;
};

const accountOptions: accountOptions[] = [
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Cart", href: "/cart" },
];

const currencyOptions: currencyOption[] = [
  { name: "USD - US Dollar" },
  { name: "EUR - Euro" },
  { name: "GBP - British Pound" },
  { name: "INR - Indian Rupee" },
  { name: "BDT - Bangladesh Taka" },
  { name: "JPY - Japan Yen" },
  { name: "CAD - Canada Dollar" },
  { name: "AUD - Australian Dollar" },
];

const Header = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  return (
    <div className="w-full bg-[var(--headerbg)] text-[var(--header-text)] font-[var(--font-family)] text-sm px-8 lg:px-16 py-3 flex justify-around items-center border-b border-[var(--border-color)]">
      <p className="font-normal">Welcome to Pataku Online Shopping Store!</p>

      <div className="flex gap-6 items-center relative">
        <div
          className="relative"
          onMouseEnter={() => setAccountOpen(true)}
          onMouseLeave={() => setAccountOpen(false)}
        >
          <button className="px-3 py-1 bg-[var(--select-bg)] text-[var(--select-color)] hover:text-[var(--text-color)] transition-all duration-300">
            My Account
          </button>

          <ul
            className={`absolute top-full left-0 w-40 bg-white border-b-4 border-b-[var(--text-color)] overflow-hidden transition-all duration-300 ${
              accountOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {accountOptions.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-[var(--select-color)] hover:text-[var(--text-color)] hover:bg-gray-100 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setCurrencyOpen(true)}
          onMouseLeave={() => setCurrencyOpen(false)}
        >
          <button className="px-3 py-1 bg-[var(--select-bg)] text-[var(--select-color)] hover:text-[var(--text-color)] transition-all duration-300">
            USD
          </button>
          <ul
            className={`absolute top-full left-0 w-48 bg-white border-b-4 border-b-[var(--text-color)] overflow-hidden transition-all duration-300 z-10 ${
              currencyOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {currencyOptions.map((item) => (
              <li key={item.name}>
                <button
                  className="w-full text-left px-4 py-2 text-[var(--select-color)] hover:text-[var(--text-color)] hover:bg-gray-100 transition-colors duration-200"
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
  );
};

export default Header;
