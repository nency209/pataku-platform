import { Button } from '@/components/ui/button'

export default function LivingRoomBanner() {
    return (
        <section className="py-8 md:py-16 px-4 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="flex justify-center lg:justify-start order-first lg:order-first">
                        <div className="relative w-full max-w-lg">
                            <div className="aspect-[4/3] w-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                                <div className="text-center p-6">
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="w-20 h-20 bg-gray-500 rounded-lg"></div>
                                        <div className="w-20 h-20 bg-yellow-400 rounded-lg"></div>
                                        <div className="w-20 h-20 bg-gray-600 rounded-lg"></div>
                                        <div className="w-20 h-20 bg-gray-400 rounded-lg"></div>
                                    </div>
                                    <p className="text-sm text-gray-600">Modern living room setup</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Text content */}
                    <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Living Room Furniture
                        </h2>
                        <p className="text-xl md:text-2xl font-semibold text-red-600">
                            Up to 50% Off
                        </p>
                        <Button size="lg" variant="black" className="w-full sm:w-auto">
                            Shop The Latest Style
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
