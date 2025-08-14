import Image from "next/image";

export default function Home2LivingRoomBanner() {
  return (
    <section className="">
      <div className=" max-w-6xl mx-auto mt-28 ">
        <div className="relative w-full ">
          <div className="relative w-full h-[200px] lg:h-[200px]">
            <Image
              src="/img/img3_home2.jpg"
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
