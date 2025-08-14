import Image from "next/image";
import { featuredCategories } from "@/constants/featuredCategories";


export default function Home2FeaturedCategories() {

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className=" mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Featured <span className="italic font-light">Categories</span>
          </h2>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 ">
    
            {featuredCategories.map((product, index) => (
              <div key={index} className="flex gap-2">
                <div className="relative w-[160px] h-[160px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain border"
                  />
                </div>

                <div className="flex flex-col justify-start ">
                  <p className="text-sm">MENU TITLE</p>

                  {Array.isArray(product.description) ? (
                    product.description.map((item, i) => (
                      <p key={i} className="mt-2 text-sm">
                        {item}
                      </p>
                    ))
                  ) : (
                    <p className=" text-sm">{product.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
    
    </section>
  );
}
