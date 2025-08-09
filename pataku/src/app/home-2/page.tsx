import { Metadata } from 'next'
import { homePageMetadata } from '@/lib/metadata'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { ChevronRight, Rocket, Phone, RotateCcw, Gift } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
    ...homePageMetadata,
    title: 'Home Shop 2 | Pataku',
    description: 'Explore our second home shop variant featuring modern furniture and home decor. Discover unique pieces for your living space.',
}

export default function Home2Page() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Main Content Area */}
            <div className="flex">
                {/* Left Sidebar - Browse Categories */}
                <div className="w-64 bg-gray-50 p-6 min-h-screen">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">BROWSE CATEGORIES</h3>
                    <nav className="space-y-2">
                        {['Home', 'Shop', 'Product', 'Pages', 'Blog', 'Contact'].map((category, index) => (
                            <a
                                key={category}
                                href="#"
                                className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${index === 0
                                        ? 'bg-teal-500 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                <span>{category}</span>
                                <ChevronRight className="h-4 w-4" />
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Hero Section */}
                        <div className="lg:col-span-2">
                            <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-8 h-96 flex items-center">
                                <div className="flex-1">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <p className="text-gray-600 text-lg">Beautiful and luxurious</p>
                                            <p className="text-gray-600 text-lg">Affordable price</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h1 className="text-5xl md:text-6xl font-bold text-amber-500 leading-tight">
                                                ACCENT
                                            </h1>
                                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                                CHAIR
                                            </h1>
                                        </div>
                                        <p className="text-gray-600 text-lg">
                                            Find your perfect accent chair for your living room.
                                        </p>
                                        <Button size="lg" variant="black" className="px-8 py-3 text-base">
                                            SHOP NOW
                                        </Button>
                                    </div>
                                    {/* Pagination dots */}
                                    <div className="flex space-x-2 mt-6">
                                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Product Image */}
                                <div className="flex-1 flex justify-center">
                                    <div className="relative">
                                        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                            <div className="aspect-square relative w-64 h-64">
                                                <Image
                                                    src="/slider1.jpg"
                                                    alt="Accent Chair"
                                                    fill
                                                    className="object-cover"
                                                    priority
                                                />
                                            </div>
                                            {/* Product Badge */}
                                            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                -50%
                                            </div>
                                        </div>
                                        {/* Floating Elements */}
                                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-100 rounded-full opacity-50"></div>
                                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-200 rounded-full opacity-30"></div>
                                    </div>
                                    {/* Pagination dots */}
                                    <div className="flex justify-center space-x-2 mt-6">
                                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Banners */}
                        <div className="space-y-6">
                            {/* Storage & Shelving Banner */}
                            <div className="bg-blue-50 rounded-lg p-6 h-48 flex items-center justify-center relative overflow-hidden">
                                <div className="text-center z-10">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Storage & Shelving</h3>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded"></div>
                                    <div className="absolute top-8 left-8 w-6 h-6 bg-white rounded"></div>
                                    <div className="absolute top-12 left-12 w-4 h-4 bg-white rounded"></div>
                                </div>
                            </div>

                            {/* UP TO 25% OFF Banner */}
                            <div className="bg-teal-50 rounded-lg p-6 h-48 flex items-center justify-center relative overflow-hidden">
                                <div className="text-center z-10">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">UP TO 25% OFF</h3>
                                </div>
                                {/* Decorative vase element */}
                                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full opacity-30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Guarantees Section */}
            <section className="bg-white py-12 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Rocket className="h-6 w-6 text-teal-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free shipping</h3>
                            <p className="text-gray-600 text-sm">Free shipping on all US order</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="h-6 w-6 text-teal-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Support 24/7</h3>
                            <p className="text-gray-600 text-sm">Contact us 24 hours a day</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <RotateCcw className="h-6 w-6 text-teal-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Money Back</h3>
                            <p className="text-gray-600 text-sm">You have 30 days to Return</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Gift className="h-6 w-6 text-teal-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Secure</h3>
                            <p className="text-gray-600 text-sm">We ensure secure payment</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
