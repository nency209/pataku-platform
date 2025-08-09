import ProductCard from './ProductCard'

export default function BottomSections() {
    const dealsOfTheWeek = [
        { name: "Yellow armchair", price: 39.00, countdown: true },
        { name: "Orange armchair", price: 45.00, countdown: true },
        { name: "Grey armchair", price: 29.00, countdown: true },
        { name: "Grey armchair", price: 35.00, countdown: true }
    ]

    const popularProducts = [
        { name: "Wall-mounted lamp", price: 110.00 },
        { name: "Small wooden table", price: 55.00 },
        { name: "Yellow armchair", price: 39.00 },
        { name: "Beige two-seater sofa", price: 70.00 }
    ]

    return (
        <section className="py-8 md:py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Deals of The Week */}
                    <div>
                        <div className="text-center mb-6 md:mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Deals of The Week</h2>
                            <p className="text-gray-600 text-sm md:text-base">Deals of the Week are a selection of flash deals updated every week!</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {dealsOfTheWeek.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    name={product.name}
                                    price={product.price}
                                    countdown={product.countdown}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Some Popular Products */}
                    <div>
                        <div className="text-center mb-6 md:mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Some Popular Products</h2>
                            <p className="text-gray-600 text-sm md:text-base">We offer the best selection furniture at prices you will love!</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {popularProducts.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    name={product.name}
                                    price={product.price}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
