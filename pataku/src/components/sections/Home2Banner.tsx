import Image from "next/image";

export default function Home2Banner() {
  return (
    <section className="">
      <div className=" max-w-6xl mx-auto mt-28 ">
        <div className="relative w-full grid grid-cols-1 xl:grid-cols-2 ">
          <div className="relative w-full h-[170px]">
            <Image
              src="/img/home2-banner6.jpg"
              alt="promotional banner"
              fill
              className="object-cover"
              priority
            />
          </div>

           <div className="relative w-full h-[170px] ">
            <Image
              src="/img/home2-banner7.jpg"
              alt="promotional banner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
