// Navigation types
export interface NavigationItem {
    title: string
    href: string
    hasDropdown?: boolean
    dropdownItems?: readonly DropdownItem[]
}

export interface DropdownItem {
    readonly title: string
    readonly href: string
}

// Service guarantee types
export interface ServiceGuarantee {
    icon: string
    title: string
    description: string
}

// Product types
export interface Product {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    category: string
    badges?: string[]
    description?: string
    inStock: boolean
}

// Hero section types
export interface HeroContent {
    subtitle: string
    title: string
    description?: string
    buttonText: string
    buttonLink: string
    image: string
    badge?: string
}

// Page metadata types
export interface PageMetadata {
    title: string
    description: string
    keywords?: string[]
    ogImage?: string
    canonical?: string
}

// Component props types
export interface HeaderProps {
    variant?: 'default' | 'transparent'
    showPromoBanner?: boolean
}

export interface HeroProps {
    content: HeroContent
    variant?: 'default' | 'minimal' | 'split'
}

export interface ProductCardProps {
    product: Product
    variant?: 'default' | 'compact' | 'featured'
}

export interface ServiceGuaranteesProps {
    services?: ServiceGuarantee[]
    variant?: 'default' | 'compact'
}

// Layout types
export interface LayoutProps {
    children: React.ReactNode
    metadata?: PageMetadata
}

// Form types
export interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

export interface NewsletterFormData {
    email: string
}

// API response types
export interface ApiResponse<T> {
    success: boolean
    data?: T
    error?: string
    message?: string
}

// Cart types
export interface CartItem {
    productId: string
    quantity: number
    price: number
}

export interface Cart {
    items: CartItem[]
    total: number
    itemCount: number
}

// User types
export interface User {
    id: string
    name: string
    email: string
    avatar?: string
}

// Theme types
export interface Theme {
    mode: 'light' | 'dark'
    primaryColor: string
    accentColor: string
}

// Utility types
export type ColorVariant = 'amber' | 'teal' | 'gray'
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'
export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'discount' | 'new' | 'sale'
