export default function FeaturedCategories() {
    const categories = [
        {
            name: "FURNITURE",
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop",
            description: "Modern curved wooden lounge chair"
        },
        {
            name: "ROOMS",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
            description: "Minimalist living room setup"
        },
        {
            name: "LIGHTING",
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
            description: "Collection of hanging pendant lights"
        },
        {
            name: "DECOR",
            image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=400&fit=crop",
            description: "Teal-colored wall clock"
        }
    ]

    return (
        <section className="py-8 md:py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Featured Categories</h2>
                    <p className="text-gray-600 text-sm md:text-base">Show all featured categories with products on home page.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-lg bg-gray-100">
                                <div className="aspect-square w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <div className="text-center p-4 md:p-6">
                                        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gray-400 rounded-lg flex items-center justify-center">
                                            <span className="text-white font-bold text-base md:text-lg">{category.name.charAt(0)}</span>
                                        </div>
                                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                                        <p className="text-xs md:text-sm text-gray-600">{category.description}</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
