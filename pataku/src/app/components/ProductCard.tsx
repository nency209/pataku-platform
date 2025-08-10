import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
    name: string
    price: number
    originalPrice?: number
    badge?: 'SALE' | 'NEW' | 'SOLD OUT'
    badges?: ('SALE' | 'NEW' | 'SOLD OUT')[]
    countdown?: boolean
    image?: string
}

export default function ProductCard({ name, price, originalPrice, badge, badges, countdown = false, image }: ProductCardProps) {
    return (
        <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <div className="aspect-square w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    {image ? (
                        <div className="w-full h-full bg-gray-300 rounded-lg"></div>
                    ) : (
                        <div className="text-center p-4 md:p-6">
                            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gray-400 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl md:text-2xl">📦</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Badges */}
                {badges && badges.length > 0 ? (
                    <div className="absolute top-2 left-2 space-y-1">
                        {badges.map((badge, index) => (
                            <Badge
                                key={index}
                                variant={
                                    badge === 'SALE' ? 'sale' :
                                        badge === 'NEW' ? 'new' :
                                            'default'
                                }
                                className="text-xs"
                            >
                                {badge}
                            </Badge>
                        ))}
                    </div>
                ) : badge && (
                    <Badge
                        variant={
                            badge === 'SALE' ? 'sale' :
                                badge === 'NEW' ? 'new' :
                                    'default'
                        }
                        className="absolute top-2 left-2 text-xs"
                    >
                        {badge}
                    </Badge>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            <div className="mt-3">
                <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">{name}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-base md:text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
                    {originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
                    )}
                </div>

                {/* Countdown timer */}
                {countdown && (
                    <div className="mt-2 text-xs text-gray-500">
                        00 days 00 hours 00 minutes 00 seconds
                    </div>
                )}
            </div>
        </div>
    )
}
