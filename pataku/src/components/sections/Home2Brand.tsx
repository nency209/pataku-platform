import Image from "next/image";

export default function Home2Brand() {
  return (
    <section className="">
      <div className=" max-w-6xl mx-auto ">
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-4 border py-8 mb-20">
          <div className="relative w-full h-16  ">
            <Image
              src="/img/brand_1.jpg"
              alt="promotional banner"
              fill
              className="object-contain"
              priority
            />
          </div>

           <div className="relative w-full h-16">
            <Image
              src="/img/brand_2.jpg"
              alt="promotional banner"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="relative w-full h-16">
            <Image
              src="/img/brand_3.jpg"
              alt="promotional banner"
              fill
              className="object-contain"
              priority
            />
          </div>

           <div className="relative w-full h-16">
            <Image
              src="/img/brand_4.jpg"
              alt="promotional banner"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-full h-16">
            <Image
              src="/img/brand_5.jpg"
              alt="promotional banner"
              fill
              className="object-contain"
              priority
            />
          </div>

           <div className="relative w-full h-16">
            <Image
              src="/img/brand_5.jpg"
              alt="promotional banner"
              fill
              className="object-contain"
              priority
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}
