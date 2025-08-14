import Image from "next/image";

export default function FeaturedCategories() {
  const categories = [
    {
      name: "FURNITURE",
      image: "/img/home1-banner1.jpg",
      description: "Modern curved wooden lounge chair",
    },
    {
      name: "ROOMS",
      image: "/img/home1-banner2.jpg",
      description: "Minimalist living room setup",
    },
    {
      name: "LIGHTING",
      image: "/img/home1-banner3.jpg",
      description: "Collection of hanging pendant lights",
    },
    {
      name: "DECOR",
      image: "/img/home1-banner4.jpg",
      description: "Teal-colored wall clock",
    },
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Featured <span className="italic font-semibold">Categories</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm md:text-base">
            Show all featured categories with products on home page.
          </p>
        </div>
      
      
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
          <Image
            src={categories[0].image}
            alt={categories[0].name}
            fill
            className="object-contain bg-white"
          />
          <p className="absolute bottom-4 left-4 text-black font-medium text-lg">
            {categories[0].name}
          </p>
        </div>

        {/* Right column */}
        <div className="grid grid-rows-[auto_1fr] gap-4 md:gap-6">
          {/* Top image */}
          <div className="relative aspect-[4/2]">
            <Image
              src={categories[1].image}
              alt={categories[1].name}
              fill
              className="object-contain bg-white"
            />
            <p className="absolute bottom-4 left-4 text-black font-medium text-lg">
              {categories[1].name}
            </p>
          </div>

          {/* Bottom two images */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {categories.slice(2).map((category, idx) => (
              <div key={idx} className="relative aspect-square">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain bg-white"
                />
                <p className="absolute bottom-4 left-4 text-black font-medium text-lg">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
