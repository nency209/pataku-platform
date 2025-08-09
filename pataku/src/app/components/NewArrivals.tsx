import ProductCard from './ProductCard'

export default function NewArrivals() {
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
            name: "3. Wooden frame with shelves",
            price: 50.00
        },
        {
            name: "4. Grey armchair",
            price: 19.00,
            badge: 'NEW' as const
        },
        {
            name: "5. Small wooden side table",
            price: 55.00
        },
        {
            name: "6. Beige two-seater sofa",
            price: 70.00
        },
        {
            name: "7. Vibrant yellow armchair",
            price: 39.00,
            countdown: true
        },
        {
            name: "8. Dark grey armchair",
            price: 19.00,
            badge: 'SOLD OUT' as const
        },
        {
            name: "9. Red chair with criss-cross back",
            price: 79.00
        }
    ]

    return (
        <section className="py-8 md:py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">New Collections Of Arrivals</h2>
                    <p className="text-gray-600 text-sm md:text-base">Browse the collection of our new products. You will definitely find what you are looking for.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            price={product.price}
                            badge={product.badge}
                            badges={product.badges}
                            countdown={product.countdown}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
