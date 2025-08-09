import { Button } from '@/components/ui/button'

export default function PromotionalBanner() {
    return (
        <section className="py-8 md:py-16 px-4 bg-amber-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left side - Text content */}
                    <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                            It's your job to have the idea. It's ours to make it happen.
                        </h2>
                        <p className="text-base md:text-lg text-gray-600">
                            We are a Melbourne based furniture maker helping people bring their ideas to life.
                        </p>
                        <Button variant="link" size="lg" className="p-0 text-base md:text-lg font-semibold text-gray-900 hover:text-gray-700">
                            View our products
                            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center lg:justify-end order-first lg:order-last">
                        <div className="relative w-full max-w-md">
                            <div className="aspect-square w-full bg-gradient-to-br from-blue-200 to-teal-200 rounded-lg flex items-center justify-center">
                                <div className="text-center p-4 md:p-8">
                                    <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4">
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-400 rounded-lg"></div>
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-400 rounded-lg"></div>
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-lg"></div>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-600">Throw pillows in blue and teal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
