import ProductCard from './ProductCard'

export default function TopSellingProducts() {
    const products = [
         {
            name: "1. New and sale badge",
            price: 110.00,
            badges: ['SALE'] as const,
           image:"/img/product-chair-01.jpg",
            originalPrice:130.00,
            discount:15,
        },
        {
            name: "2. New badge product",
            price: 80.00,
            badge: ['NEW'] as const,
           image:"/img/product-chair-02.jpg"
        },
        {
            name: "3. Variable Product",
            price: 50.00,
           image:"/img/product-table-01.jpg"
        },
        {
            name: "4. Grey armchair",
            price: 19.00,
            badges: ['NEW'] as const,
           image:"/img/product-armchair-01.jpg",
            discount:15
        },
    ]

    return (
        <section className="py-8 md:py-16  bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Top <span className='italic font-normal'>Selling</span> Products</h2>
                    <p className="text-gray-600 text-sm md:text-base">Browse the collection of our top selling. You will definitely find what you are looking for.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 ">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            price={product.price}
                            badges={product.badges}
                            discount={product.discount}
                           image={product.image}
                           originalPrice={product.originalPrice}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
