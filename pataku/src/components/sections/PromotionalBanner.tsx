import Image from "next/image";

export default function PromotionalBanner() {
  return (
    <section className=" py-8 sm:py-12">
   
        {/* Right side - Image */}

        <div className="relative w-full">
          <div className="relative w-full h-[360px] sm:h-[420px] ">
            {/* Background Image */}
            <Image
              src="/img/fullwidth-banner-1.jpg"
              alt="promotional banner"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              priority
            />
          </div>

          <div className="absolute top-24 left-96  border-black ">
            {/* Left side - Text content */}
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#434348]">
                It&apos;s your job to have the idea. It&apos;s <br></br>ours to make it
                happen.
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                We are a Melbourne based furniture maker helping <br></br>people bring
                their ideas to life.
              </p>
              <button className="text-sm sm:text-base font-semibold border-t border-black text-gray-900 hover:text-gray-700 transition-all">
                View our products
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 ml-2 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

    </section>
  );
}
