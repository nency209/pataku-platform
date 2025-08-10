import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HeroProps, HeroContent } from '@/types'
import { colors } from '@/lib/constants'

export default function Hero({ content, variant = 'default' }: HeroProps) {
    return (
        <section className="bg-white py-8 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <div className="space-y-2">
                            <p className="text-gray-600 text-base md:text-lg">{content.subtitle}</p>
                            <p className="text-gray-600 text-base md:text-lg">Affordable price</p>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-500 leading-tight">
                                {content.title.split(' ')[0]}
                            </h1>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                {content.title.split(' ').slice(1).join(' ')}
                            </h1>
                        </div>

                        {content.description && (
                            <p className="text-gray-600 text-base md:text-lg">
                                {content.description}
                            </p>
                        )}

                        <div className="pt-4">
                            <Button
                                size="lg"
                                variant="black"
                                className="w-full sm:w-auto px-8 py-3 text-base"
                                asChild
                            >
                                <a href={content.buttonLink}>
                                    {content.buttonText}
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Product Image */}
                    <div className="flex justify-center lg:justify-end order-first lg:order-last">
                        <div className="relative w-full max-w-md">
                            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="aspect-square relative">
                                    <Image
                                        src={content.image}
                                        alt={content.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Product Badge */}
                                {content.badge && (
                                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        {content.badge}
                                    </div>
                                )}
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-100 rounded-full opacity-50"></div>
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-200 rounded-full opacity-30"></div>

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
