import ProductCard from './ProductCard'

export default function TopSellingProducts() {
    const products = [
        {
            name: "1. New and sale badge",
            price: 110.00,
            badges: ['SALE', 'NEW'] as const
        },
        {
            name: "2. New badge product",
            price: 80.00,
            badge: 'NEW' as const
        },
        {
            name: "3. Variable product",
            price: 70.00
        }
    ]

    return (
        <section className="py-8 md:py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Top Selling Products</h2>
                    <p className="text-gray-600 text-sm md:text-base">Browse the collection of our top selling. You will definitely find what you are looking for.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            price={product.price}
                            badge={product.badge}
                            badges={product.badges}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
