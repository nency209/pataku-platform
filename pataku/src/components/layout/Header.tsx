'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Search, Heart, ShoppingCart, ChevronDown, X, Menu } from 'lucide-react'
import { navigationItems, colors } from '@/lib/constants'
import { HeaderProps, NavigationItem } from '@/types'

export default function Header({ variant = 'default', showPromoBanner = true }: HeaderProps) {
    const [isPromoBannerOpen, setIsPromoBannerOpen] = useState(showPromoBanner)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsHomeDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <header className={`${variant === 'transparent' ? 'bg-transparent' : 'bg-white'} sticky top-0 z-50`}>
            {/* Top Promotional Banner */}
            {isPromoBannerOpen && (
                <div className="bg-amber-100 py-3">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-800">All featured product 50% off</span>
                                <Button variant="secondary" size="sm" className="bg-gray-700 text-white hover:bg-gray-800">
                                    Shop Now
                                </Button>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => setIsPromoBannerOpen(false)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Header */}
            <div className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Top Row - Welcome and Account */}
                    <div className="flex items-center justify-between py-2 text-sm text-gray-600">
                        <span>Welcome to Pataku Online Shopping Store !</span>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1 cursor-pointer">
                                <span>My Account</span>
                                <ChevronDown className="h-3 w-3" />
                            </div>
                            <div className="w-px h-4 bg-gray-300"></div>
                            <div className="flex items-center space-x-1 cursor-pointer">
                                <span>USD</span>
                                <ChevronDown className="h-3 w-3" />
                            </div>
                        </div>
                    </div>

                    {/* Middle Row - Logo, Search, Cart */}
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">P</span>
                            </div>
                            <span className="text-2xl font-bold text-gray-900">Pataku</span>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-2xl mx-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search our store"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
                                >
                                    <Search className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Cart and Wishlist */}
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="icon" className="relative">
                                <Heart className="h-6 w-6" />
                            </Button>
                            <Button variant="ghost" size="icon" className="relative">
                                <ShoppingCart className="h-6 w-6" />
                                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    0
                                </span>
                            </Button>
                            <span className="text-sm font-medium">My Cart</span>
                        </div>
                    </div>

                    {/* Bottom Row - Navigation */}
                    <div className="flex items-center justify-between py-3">
                        <Button variant="secondary" className="bg-gray-700 text-white hover:bg-gray-800">
                            <Menu className="h-4 w-4 mr-2" />
                            Browse Categories
                            <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>

                        <nav className="hidden md:flex items-center space-x-6">
                            {navigationItems.map((item: NavigationItem, index: number) => (
                                <div key={index} className="relative">
                                    {item.hasDropdown ? (
                                        <div ref={index === 0 ? dropdownRef : undefined}>
                                            <button
                                                className={`text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1 ${index === 0 ? 'text-gray-900 font-medium border-b-2 border-amber-500 pb-1' : ''
                                                    }`}
                                                onClick={() => index === 0 && setIsHomeDropdownOpen(!isHomeDropdownOpen)}
                                            >
                                                <span>{item.title}</span>
                                                <ChevronDown className="h-3 w-3" />
                                            </button>

                                            {/* HOME Dropdown Menu */}
                                            {index === 0 && isHomeDropdownOpen && item.dropdownItems && (
                                                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                                    <div className="py-2">
                                                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                            <a
                                                                key={dropdownIndex}
                                                                href={dropdownItem.href}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                {dropdownItem.title}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                                            {item.title}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <nav className="flex flex-col py-4 px-4 space-y-3">
                        {navigationItems.map((item: NavigationItem, index: number) => (
                            <a
                                key={index}
                                href={item.href}
                                className={`transition-colors py-2 ${index === 0
                                    ? 'text-gray-900 font-medium border-b border-amber-500 pb-1'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
