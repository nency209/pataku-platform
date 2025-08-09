import ProductImage from './ProductImage'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="bg-white py-8 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <div className="space-y-2">
                            <p className="text-gray-600 text-base md:text-lg">Beautiful and luxurious</p>
                            <p className="text-gray-600 text-base md:text-lg">Affordable price</p>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-500 leading-tight">
                                ACCENT
                            </h1>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                CHAIR
                            </h1>
                        </div>

                        <div className="pt-4">
                            <Button size="lg" variant="black" className="w-full sm:w-auto px-8 py-3 text-base">
                                SHOP NOW
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Product Image */}
                    <div className="flex justify-center lg:justify-end order-first lg:order-last">
                        <div className="relative w-full max-w-md">
                            <ProductImage />

                            {/* Pagination Dots */}
                            <div className="flex justify-center space-x-2 mt-6">
                                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
