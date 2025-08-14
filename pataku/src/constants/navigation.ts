import { NavigationItem, CategoryItem } from '@/types';

export const navigationItems: NavigationItem[] = [
  {
    title: 'HOME',
    href: '/',
    hasDropdown: true,
    dropdownItems: [
      { title: 'Home Shop 1', href: '/' },
      { title: 'Home Shop 2', href: '/home-2' },
      { title: 'Home Shop 3', href: '/home-3' },
      { title: 'Home Shop 4', href: '/home-4' },
      { title: 'Home RTL Version', href: '/home-rtl' },
    ]
  },
  {
    title: 'SHOP',
    href: '/shop',
    hasDropdown: true,
    dropdownItems: [
      {
        group: 'Collection 01',
        items: [
          { title: 'New and sale badge', href: '/shop/new-sale', badge: 'New' },
          { title: 'Product with video', href: '/shop/video', badge: 'Video' },
          { title: 'New badge product', href: '/shop/new-badge', badge: 'New' },
          { title: 'Variable product', href: '/shop/variable' },
          { title: 'Soldout product', href: '/shop/soldout', badge: 'Sold Out' },
        ],
      },
      {
        group: 'Collection 02',
        items: [
          { title: 'Simple product', href: '/shop/simple' },
          { title: 'Variable with soldout', href: '/shop/variable-soldout', badge: 'Sold Out' },
          { title: 'Sample affiliate product', href: '/shop/affiliate', badge: 'Affiliate' },
          { title: 'Countdown product', href: '/shop/countdown', badge: 'Countdown' },
          { title: 'Without shortcode', href: '/shop/without-shortcode' },
        ],
      },
      {
        group: 'Collection 03',
        items: [
          { title: 'Sample affiliate product', href: '/shop/affiliate2', badge: 'Affiliate' },
          { title: 'Demo product title', href: '/shop/demo1' },
          { title: 'Countdown product', href: '/shop/countdown2', badge: 'Countdown' },
          { title: 'Demo product title', href: '/shop/demo2' },
          { title: 'Product with video', href: '/shop/video2', badge: 'Video' },
        ],
      },
    ],
  },
  { title: 'PRODUCT', href: '/product', hasDropdown: true },
  { 
    title: 'PAGES', 
    href: '/pages', 
    hasDropdown: true,
    dropdownItems: [
      { title: 'Size Chart', href: '/pages/size-chart' },
      { title: 'Shipping Policy', href: '/pages/shipping-policy' },
      { title: 'Wishlist', href: '/pages/wishlist' },
      { title: 'About', href: '/pages/about' },
    ]
  },
  { title: 'BLOG', href: '/blog' },
  { title: 'CONTACT', href: '/contact' },
];

// Derive browse categories from navigation items to keep them in sync.
export const browseCategories: CategoryItem[] = [
  {
    title: 'Home',
    href: '/',
    hasSubmenu: true,
    submenuItems: (navigationItems.find(n => n.title === 'HOME')?.dropdownItems as any[])?.map((d: any) => ({ title: d.title, href: d.href })) || [],
  },
  {
    title: 'Shop',
    href: '/shop',
    hasSubmenu: true,
    submenuItems: [
      { title: 'New and sale badge', href: '/shop/new-sale' },
      { title: 'Product with video', href: '/shop/video' },
      { title: 'New badge product', href: '/shop/new-badge' },
      { title: 'Variable product', href: '/shop/variable' },
      { title: 'Soldout product', href: '/shop/soldout' },
      { title: 'Simple product', href: '/shop/simple' },
      { title: 'Variable with soldout', href: '/shop/variable-soldout' },
      { title: 'Sample affiliate product', href: '/shop/affiliate' },
      { title: 'Countdown product', href: '/shop/countdown' },
      { title: 'Without shortcode', href: '/shop/without-shortcode' },
    ],
  },
  {
    title: 'Product',
    href: '/product',
    hasSubmenu: false,
  },
  {
    title: 'Pages',
    href: '/pages',
    hasSubmenu: true,
    submenuItems: (navigationItems.find(n => n.title === 'PAGES')?.dropdownItems as any[])?.map((d: any) => ({ title: d.title, href: d.href })) || [],
  },
  { title: 'Blog', href: '/blog', hasSubmenu: false },
  { title: 'Contact', href: '/contact', hasSubmenu: false },
];
