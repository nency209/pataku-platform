# Pataku Project Structure

This document outlines the organized folder structure for the Pataku e-commerce website.

## 📁 Root Structure

```
pataku/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # Reusable components
│   ├── lib/              # Utilities and configurations
│   ├── types/            # TypeScript type definitions
│   └── styles/           # Global styles
├── docs/                 # Documentation
└── README.md
```

## 📁 Detailed Structure

### `/src/app/` - Next.js App Router
```
app/
├── layout.tsx            # Root layout
├── page.tsx              # Home page (Home Shop 1)
├── globals.css           # Global styles
├── home-1/               # Home Shop 1 variant
│   └── page.tsx
├── home-2/               # Home Shop 2 variant
│   └── page.tsx
├── home-3/               # Home Shop 3 variant
│   └── page.tsx
├── home-4/               # Home Shop 4 variant
│   └── page.tsx
├── home-rtl/             # RTL version
│   └── page.tsx
├── shop/                 # Shop page
│   └── page.tsx
├── product/              # Product pages
│   ├── page.tsx
│   └── [id]/
│       └── page.tsx
├── pages/                # Other pages
│   ├── about/
│   ├── contact/
│   └── blog/
└── api/                  # API routes
    └── ...
```

### `/src/components/` - Reusable Components
```
components/
├── ui/                   # Base UI components
│   ├── button.tsx
│   ├── badge.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...
├── layout/               # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   └── Navigation.tsx
├── sections/             # Page sections
│   ├── Hero.tsx
│   ├── ServiceGuarantees.tsx
│   ├── FeaturedCategories.tsx
│   ├── NewArrivals.tsx
│   ├── PromotionalBanner.tsx
│   ├── BottomSections.tsx
│   ├── LivingRoomBanner.tsx
│   ├── TopSellingProducts.tsx
│   └── BlogPosts.tsx
├── features/             # Feature-specific components
│   ├── ProductCard.tsx
│   ├── ProductImage.tsx
│   ├── CategoryCard.tsx
│   └── ...
└── forms/                # Form components
    ├── ContactForm.tsx
    ├── NewsletterForm.tsx
    └── ...
```

### `/src/lib/` - Utilities and Configurations
```
lib/
├── constants.ts          # App constants (colors, spacing, etc.)
├── metadata.ts           # SEO metadata configurations
├── utils.ts              # Utility functions
├── validations.ts        # Form validations
├── api.ts                # API utilities
└── hooks/                # Custom React hooks
    ├── useCart.ts
    ├── useAuth.ts
    └── ...
```

### `/src/types/` - TypeScript Definitions
```
types/
├── index.ts              # Main type definitions
├── api.ts                # API-related types
├── components.ts         # Component prop types
├── forms.ts              # Form-related types
└── ...
```

### `/public/` - Static Assets
```
public/
├── images/               # Image assets
│   ├── products/
│   ├── banners/
│   ├── icons/
│   └── ...
├── slider1.jpg           # Hero images
├── slider2.jpg
├── favicon.ico
└── ...
```

## 🎨 Design System

### Colors (from constants.ts)
- **Primary**: Amber, Teal, Gray palettes
- **Accent**: Red, Green, Blue, Yellow
- **Semantic**: Success, Warning, Error, Info

### Typography
- **Font Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl
- **Font Weights**: normal, medium, semibold, bold, extrabold

### Spacing
- **Scale**: xs, sm, md, lg, xl, 2xl, 3xl

## 🔧 Configuration Files

### `constants.ts`
- Color palettes
- Typography scales
- Spacing values
- Site configuration
- Navigation items
- Service guarantees

### `metadata.ts`
- Default metadata
- Page-specific metadata
- SEO configurations
- Open Graph settings

### `types/index.ts`
- Navigation types
- Product types
- Component prop types
- API response types
- Form types

## 📱 Page Variants

### Home Shop Variants
1. **Home Shop 1** (`/`) - Default home page
2. **Home Shop 2** (`/home-2`) - Alternative layout
3. **Home Shop 3** (`/home-3`) - Different hero style
4. **Home Shop 4** (`/home-4`) - Minimal design
5. **Home RTL** (`/home-rtl`) - Right-to-left version

### Features
- Each variant has unique metadata
- Different hero content and layouts
- Consistent navigation and footer
- Reusable components with different props

## 🚀 Best Practices

### Component Organization
- **UI Components**: Base, reusable, no business logic
- **Layout Components**: Page structure and navigation
- **Section Components**: Page-specific content blocks
- **Feature Components**: Business logic and data handling

### TypeScript Usage
- Strict typing for all components
- Interface definitions for props
- Type safety for API responses
- Proper error handling

### Styling Approach
- Tailwind CSS for utility classes
- Custom CSS variables for theming
- Consistent color and spacing system
- Responsive design patterns

### Performance
- Next.js Image optimization
- Component lazy loading
- Code splitting by routes
- Optimized bundle sizes

