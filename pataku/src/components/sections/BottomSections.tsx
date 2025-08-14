import ProductCard from "@/components/product/ProductCard";
import Image from "next/image";

export default function BottomSections() {
  const dealsOfTheWeek = [
    {
      name: "9.Countdown Product",
      price: 39.0,
      countdown: [0, 0, 0, 0],
      image: "/img/product-countdown-01.jpg",
      badges: ["SALE"] as const,
      discount: 30,
    },
    {
      name: "Orange armchair",
      price: 45.0,
      countdown: [0, 0, 0, 0],
      image: "/img/product-orange-armchair.jpg",
      badges: ["SALE"] as const,
      discount: 30,
    },
  ];

  const popularProducts = [
    {
       name: "1. New and sale badge",
      price: 110.0,
      image:"/img/product-chair-01.jpg",
      originalPrice: 130.0,
    },
    {
      name:"7. Variable With Soldout",
      price: 55.0,
       image:"/img/product-armchair-02.jpg",
    },
    {
       name: "2. New badge product",
      price: 39.0,
        image:"/img/product-chair-02.jpg"
    },
    {
      name: "3. Variable Product",
      price: 70.0,
      image:"/img/product-table-01.jpg"
    },
    {
      name: "6. Simple Product",
      price: 39.0,
      image:"/img/product-sofa-01.jpg",
    },
    {
      name: "9.Countdown Product",
      price: 70.0,
      image: "/img/product-countdown-01.jpg",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Deals of The Week */}
          <div className="">
            <div className="mb-4 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Deals <span className="italic font-semibold">of The</span> Week
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Deals of the Week are a selection of flash deals updated every
                week!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {dealsOfTheWeek.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  countdown={product.countdown}
                  image={product.image}
                  badges={product.badges}
                  discount={product.discount}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Some <span className="italic font-semibold">Popular </span>
                Products
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                We offer the best selection furniture at prices you will love!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 ">
              {popularProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4  border-gray-200  "
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0 mt-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={96} // 20 * 4 = 80px
                      height={96}
                      className="object-cover "
                    />
                  </div>

                  {/* Name & Price in one row */}
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-medium text-gray-900">
                      {product.name}
                    </span>
                   <span className="text-sm text-[var(--text-muted)] ">
                      {product.originalPrice && (
                        <span className="text-sm text-[var(--text-muted)] line-through">
                          ${product.originalPrice.toFixed(2)}
                          
                        </span>
                        
                      )}
                      ${product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

