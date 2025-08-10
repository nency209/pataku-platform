// Color palette - Custom variables for consistent theming
export const colors = {
    primary: {
        amber: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
        },
        teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
        },
        gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
        }
    },
    accent: {
        red: '#ef4444',
        green: '#10b981',
        blue: '#3b82f6',
        yellow: '#fbbf24',
    }
} as const

// Typography
export const typography = {
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
    },
    fontWeights: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
    }
} as const

// Spacing
export const spacing = {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
} as const

// Breakpoints
export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
} as const

// Site configuration
export const siteConfig = {
    name: 'Pataku',
    description: 'Pataku Online Shopping Store - Beautiful and luxurious furniture at affordable prices',
    url: 'https://pataku.com',
    ogImage: '/og-image.jpg',
    links: {
        twitter: 'https://twitter.com/pataku',
        github: 'https://github.com/pataku',
    },
} as const

// Navigation items
export const navigationItems = [
    {
        title: 'HOME',
        href: '/',
        hasDropdown: true,
        dropdownItems: [
            { title: 'Home Shop 1', href: '/home-1' },
            { title: 'Home Shop 2', href: '/home-2' },
            { title: 'Home Shop 3', href: '/home-3' },
            { title: 'Home Shop 4', href: '/home-4' },
            { title: 'Home RTL Version', href: '/home-rtl' },
        ]
    },
    { title: 'SHOP', href: '/shop', hasDropdown: true },
    { title: 'PRODUCT', href: '/product', hasDropdown: true },
    { title: 'PAGES', href: '/pages', hasDropdown: true },
    { title: 'BLOG', href: '/blog' },
    { title: 'CONTACT', href: '/contact' },
] as const

// Service guarantees
export const serviceGuarantees = [
    {
        icon: 'Rocket',
        title: 'Free shipping',
        description: 'Free shipping on all US order.',
    },
    {
        icon: 'Phone',
        title: 'Support 24/7',
        description: 'Contact us 24 hours a day.',
    },
    {
        icon: 'RotateCcw',
        title: '100% Money Back',
        description: 'You have 30 days to Return.',
    },
    {
        icon: 'Gift',
        title: 'Payment Secure',
        description: 'We ensure secure payment.',
    },
] as const
