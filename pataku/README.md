# Responsive E-commerce Furniture Website

A modern, fully responsive e-commerce website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with proper UI components and mobile-first approach.

## Features

- **Fully Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Modern UI Components**: Built with reusable Button, Card, and Badge components
- **Interactive Elements**: Hover effects, mobile menu, and smooth transitions
- **Product Showcase**: Featured categories, new arrivals, deals, and popular products
- **Blog Section**: Blog post previews with cards
- **Comprehensive Footer**: Contact information, social links, and newsletter signup

## Sections Included

1. **Header**: Responsive navigation with mobile menu
2. **Hero Section**: Main banner with call-to-action
3. **Featured Categories**: Four main product categories
4. **New Arrivals**: Grid of new products with badges
5. **Promotional Banner**: Melbourne furniture maker message
6. **Deals & Popular Products**: Two-column layout with countdown timers
7. **Living Room Banner**: Promotional section with discount
8. **Top Selling Products**: Three featured products
9. **Blog Posts**: Three blog post previews
10. **Footer**: Complete footer with multiple sections

## UI Components

- **Button**: Multiple variants (default, black, white, ghost, link)
- **Card**: For structured content display
- **Badge**: For product status indicators (SALE, NEW, SOLD OUT)

## Technologies Used

- **Next.js 15**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: For component variants
- **Radix UI**: Accessible UI primitives

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Responsive navigation
│   │   ├── Hero.tsx            # Main banner
│   │   ├── FeaturedCategories.tsx
│   │   ├── NewArrivals.tsx
│   │   ├── PromotionalBanner.tsx
│   │   ├── BottomSections.tsx
│   │   ├── LivingRoomBanner.tsx
│   │   ├── TopSellingProducts.tsx
│   │   ├── BlogPosts.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx     # Reusable product component
│   ├── layout.tsx
│   └── page.tsx                # Main page
├── components/
│   └── ui/                     # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
└── lib/
    └── utils.ts                # Utility functions
```

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Customization

The website is built with a modular component structure, making it easy to:
- Add new sections
- Modify existing components
- Change colors and styling
- Add new product data
- Integrate with a backend API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
