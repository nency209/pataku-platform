import { AccountOption, CurrencyOption } from '@/types';

export const accountOptions: AccountOption[] = [
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Cart", href: "/cart" },
];

export const currencyOptions: CurrencyOption[] = [
  { name: "USD - US Dollar", code: "USD", symbol: "$" },
  { name: "EUR - Euro", code: "EUR", symbol: "€" },
  { name: "GBP - British Pound", code: "GBP", symbol: "£" },
  { name: "INR - Indian Rupee", code: "INR", symbol: "₹" },
  { name: "BDT - Bangladesh Taka", code: "BDT", symbol: "৳" },
  { name: "JPY - Japan Yen", code: "JPY", symbol: "¥" },
  { name: "CAD - Canada Dollar", code: "CAD", symbol: "C$" },
  { name: "AUD - Australian Dollar", code: "AUD", symbol: "A$" },
];
