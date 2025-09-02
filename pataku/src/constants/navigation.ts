import { NavigationItem ,AccountOption,CurrencyOption} from "@/types";


export const accountOptions: AccountOption[] = [
  { label: "Login", href: "/login" },
  { label: "Register", href: "/Register" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Cart", href: "/cart" },
];

export const currencyOptions: CurrencyOption[] = [
  { name: "USD - US Dollar", },
  { name: "EUR - Euro",  },
  { name: "GBP - British Pound",},
  { name: "INR - Indian Rupee", },
  { name: "BDT - Bangladesh Taka",},
  { name: "JPY - Japan Yen", },
  { name: "CAD - Canada Dollar",  },
  { name: "AUD - Australian Dollar", }
];


export const navigationItems: NavigationItem[] = [
  {
    title: "HOME",
    href: "/",
    hasDropdown: true,
    dropdownItems: [
      { title: "Home Shop 1", href: "/" },
      { title: "Home Shop 2", href: "/home-2" },
      { title: "Home Shop 3", href: "/home-3" },
      { title: "Home Shop 4", href: "/home-4" },
      { title: "Home RTL Version", href: "/home-rtl" },
    ],
  },
  {
    title: "SHOP",
    href: "/shop",
    hasDropdown: true,
    dropdownItems: [
      {
        group: "Collection 01",
        items: [
          { title: "New and sale badge", href: "/shop/new-sale", badge: "New" },
          { title: "Product with video", href: "/shop/video", badge: "Video" },
          { title: "New badge product", href: "/shop/new-badge", badge: "New" },
          { title: "Variable product", href: "/shop/Variable-product" },
          {
            title: "Soldout-product",
            href: "/shop/Soldout-product",
            badge: "Sold Out",
          },
        ],
      },
      {
        group: "Collection 02",
        items: [
          { title: "Simple product", href: "/shop/simpleproduct" },
          {
            title: "Variable-With-Soldout",
            href: "/shop/VariableWithSoldout",
            badge: "Sold Out",
          },
          {
            title: "Sample affiliate product",
            href: "/shop/Sample-affiliate-product",
            badge: "Affiliate",
          },
          {
            title: "Countdown product",
            href: "/shop/Countdown-Product",
            badge: "Countdown",
          },
          { title: "Without shortcode", href: "/shop/Withoutshortcode" },
        ],
      },
      {
        group: "Collection 03",
        items: [
          {
            title: "Sample affiliate product",
            href: "/shop/Sampleaffiliateproduct",
            badge: "Affiliate",
          },
          { title: "Demo product title", href: "/shop/Demo-product-title" },
          {
            title: "Countdown product",
            href: "/shop/Countdown-Product",
            badge: "Countdown",
          },
          { title: "Demo product title", href: "/shop//Demo-product-title" },
          { title: "Product with video", href: "/shop/video", badge: "Video" },
        ],
      },
    ],
  },
  {
    title: "PRODUCT",
    href: "/product",
    hasDropdown: true,
    dropdownItems: [
      { title: "New and sale badge", href: "/product/new-sale", badge: "New" },
      { title: "New badge product", href: "/product/new-badge", badge: "New" },
      { title: "Variable product", href: "/product/Variable-product" },
      { title: "Soldout product", href: "/product/Soldout-product", badge: "Sold Out" },
      { title: "Simple product", href: "/product/Simple-Product" },
      {
        title: "Variable with soldout",
        href: "/product/Variable-With-Soldout",
        badge: "Sold Out",
      },
      {
        title: "Sample affiliate product",
        href: "/product/Sample-affiliate-product",
        badge: "Affiliate",
      },
      {
        title: "Countdown product",
        href: "/product/Countdown-Product",
        badge: "Countdown",
      },
      { title: "Without shortcode", href: "/product/Withoutshortcode" },
    ],
  },
  {
    title: "PAGES",
    href: "/pages",
    hasDropdown: true,
    dropdownItems: [
      { title: "Size Chart", href: "/pages/size-Chart" },
      { title: "Shipping Policy", href: "/pages/shipping-policy" },
      { title: "Wishlist", href: "/pages/wishlist" },
      { title: "About", href: "/pages/about" },
    ],
  },
  { title: "BLOG", href: "/blog" },
  { title: "CONTACT", href: "/contact" },
];

