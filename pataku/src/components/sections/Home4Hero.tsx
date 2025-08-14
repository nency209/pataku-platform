import Image from "next/image";
import { HeroProps, HeroContent } from "@/types";
export default function Hero4Hero({ content }: HeroProps = {}) {
  const defaultContent: HeroContent = {
    subtitle: "Beautiful and luxurious Decor at Affordable price",
    title: "ACCENT ",
    title2:" CHAIR",
    buttonText: "SHOP NOW",
    buttonLink: "/products",
    image: "/img/slider4.jpg",
  };

  const heroContent = content || defaultContent;

  return (
    <section className="">


         
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
             <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[600px]">
               {/* Background Image */}
               <Image
                 src={heroContent.image}
                 alt={heroContent.title}
                 fill
                 className="object-cover"
                 priority
               />
            

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center " >
            <div className="max-w-md sm:ml-12 lg:ml-16 " data-aos="fade-right">
              <p className="text-hero-subtitle text-base sm:text-lg">{heroContent.subtitle}</p>
              <h1 className="text-hero-title text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mt-2 ">
                {heroContent.title}
              </h1>
               <h1 className="text-hero-title text-4xl sm:text-5xl font-semibold leading-tight mt-2">
                {heroContent.title2}
              </h1>
             
              <a
                href={heroContent.buttonLink}
                className="btn-hero inline-block mt-6 w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold rounded-lg" data-aos="fade-down"
              >
                {heroContent.buttonText}
              </a>
            </div>
          </div>
        </div>

</div>
        
  
    </section>
  );
}
