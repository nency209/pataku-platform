"use client";

import ProductCard from "../product/ProductCard";
import { newArrivalsProducts } from "@/constants";


export default function RelatedProduct() {
  

  return (
    <section className="py-6">
       <div className="mx-auto xl:max-w-6xl lg:max-w-4xl md:max-w-2xl px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[32px] font-bold font-lato text-black mb-2">
           Related Product
          </h2>
          <p className="text-muted font-rubik font-light text-base">
            Section Brief Here
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-6">
            
              {newArrivalsProducts.slice(0,4).map((product, index) => (
                <div
                  key={index}
                  className=" w-full"
                >
                  <ProductCard
                   slug={product.slug}
                    name={product.name}
                    price={product.price}
                    badges={product.badges}
                    discount={product.discount}
                    image={product.image}
                    oldprice={product.oldprice}
                  />
                </div>
              ))}
            </div>
          </div>

          
         
        </div>
      
    </section>
  );
}
