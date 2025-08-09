# Pataku UI Components Guide

This guide shows how to use the UI components built with TypeScript, Tailwind CSS, and Next.js.

## Available Components

### 1. Button Component
Located: `src/components/ui/button.tsx`

**Variants:**
- `default` - Primary button
- `secondary` - Secondary button
- `destructive` - Red/danger button
- `outline` - Outlined button
- `ghost` - Transparent button
- `link` - Link-style button
- `black` - Black button
- `white` - White button with border

**Sizes:**
- `default` - Standard size
- `sm` - Small
- `lg` - Large
- `xl` - Extra large
- `icon` - Square icon button

**Usage:**
```tsx
import { Button } from '@/components/ui/button'

<Button variant="default" size="lg">
  Click Me
</Button>
```

### 2. Badge Component
Located: `src/components/ui/badge.tsx`

**Variants:**
- `default` - Primary badge
- `secondary` - Secondary badge
- `destructive` - Red/danger badge
- `outline` - Outlined badge
- `discount` - Red discount badge
- `new` - Green new badge
- `sale` - Amber sale badge

**Usage:**
```tsx
import { Badge } from '@/components/ui/badge'

<Badge variant="discount">-50% OFF</Badge>
```

### 3. Card Component
Located: `src/components/ui/card.tsx`

**Sub-components:**
- `Card` - Main card container
- `CardHeader` - Card header section
- `CardTitle` - Card title
- `CardDescription` - Card description
- `CardContent` - Card main content
- `CardFooter` - Card footer section

**Usage:**
```tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Product Name</CardTitle>
    <CardDescription>Product description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Product content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Add to Cart</Button>
  </CardFooter>
</Card>
```

## Page Components

### 1. Header Component
Located: `src/app/components/Header.tsx`

Features:
- Promotional banner with close functionality
- Logo and branding
- Search bar
- Navigation menu
- Shopping cart and wishlist icons
- Mobile responsive

### 2. Hero Component
Located: `src/app/components/Hero.tsx`

Features:
- Accent chair promotion
- Call-to-action button
- Responsive design
- Product image integration

### 3. ProductCard Component
Located: `src/app/components/ProductCard.tsx`

Features:
- Product image display
- Price and discount display
- Badge support (SALE, NEW, SOLD OUT)
- Hover effects
- Countdown timer support

## Styling

All components use Tailwind CSS classes and follow a consistent design system:

- **Colors**: Amber/gold theme with gray accents
- **Typography**: Clean, modern fonts
- **Spacing**: Consistent padding and margins
- **Responsive**: Mobile-first design approach

## Usage Examples

### Product Card with Badges
```tsx
<ProductCard
  name="Accent Chair"
  price={299.99}
  originalPrice={599.99}
  badges={['SALE', 'NEW']}
  image="/chair-image.jpg"
/>
```

### Button with Badge
```tsx
<Button variant="default">
  Cart
  <Badge variant="discount" className="ml-2">3</Badge>
</Button>
```

### Card Layout
```tsx
<Card>
  <CardHeader>
    <CardTitle>Featured Product</CardTitle>
    <CardDescription>Limited time offer</CardDescription>
  </CardHeader>
  <CardContent>
    <ProductCard name="Chair" price={199.99} />
  </CardContent>
  <CardFooter>
    <Button className="w-full">Shop Now</Button>
  </CardFooter>
</Card>
```

## Development

To add new components:

1. Create the component in `src/components/ui/`
2. Use TypeScript for type safety
3. Follow the existing naming conventions
4. Use Tailwind CSS for styling
5. Include proper TypeScript interfaces
6. Add variants using `class-variance-authority`

## Running the Project

```bash
npm run dev
```

Visit `http://localhost:3000` to see the components in action.
