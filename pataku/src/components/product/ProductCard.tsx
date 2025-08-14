import Image from "next/image";
import { Eye, Heart } from "lucide-react";
import { ProductCardProps } from "@/types";

export default function ProductCard({
  name,
  price,
  originalPrice,
  badges,
  countdown,
  image,
  discount,
}: ProductCardProps) {
  return (
    <div className="cursor-pointer">
      {countdown && (
        <div className="mt-2 text-xs sm:text-sm text-gray-500 flex border  justify-evenly py-3 sm:py-4 rounded-md">
          {[
            { value: countdown[0], label: "days" },
            { value: countdown[1], label: "hours" },
            { value: countdown[2], label: "minutes" },
            { value: countdown[3], label: "seconds" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col">
              <p
                key={index}
                className="text-bold text-lg text-black text-center"
              >
                {String(item.value).padStart(2, "0")}
              </p>
              <span className="font-normal">{item.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="relative overflow-hidden rounded-lg ">
        <div className="aspect-square w-full bg-[var(--bg-card-muted)] flex items-center mt-3 sm:mt-4 ">
          {image ? (
            <div className="relative w-full h-full group">
              <Image
                src={image}
                alt={name}
                fill
                priority
                // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                className="object-contain bg-[var(--bg-card-muted)]"
              />
              <div className="absolute top-2 right-3 sm:right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow">
                  <Eye className="w-4 h-4 text-black" />
                </button>
                <button className="bg-white p-2 rounded-full shadow">
                  <Heart className="w-4 h-4 text-black" />
                </button>
              </div>

              {/* Cart (bottom-right) */}
              <div className="absolute bottom-1 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow border border-[var(--header-hover-color)]">
                  🛒
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">No image</span>
            </div>
          )}
        </div>

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="absolute top-8  left-6  bg-black text-white px-2 space-y-1 sm:space-y-2 rounded">
            {badges.map((badges, index) => (
              <div key={index} className="text-xs">
                {badges}
              </div>
            ))}
          </div>
        )}

        {discount && (
          <div className="absolute top-10 left-6 bg-[var(--header-hover-color)] text-white px-2 mt-4 text-xs rounded">
            -{discount}%
          </div>
        )}

        {/* Overlay on hover */}
      </div>
      {/* Countdown timer */}

      <div className="mt-3 ml-2 sm:ml-4">
        <h3 className="text-sm sm:text-base font-medium text-gray-900">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg font-bold text-[var(--color-accent)]">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-xs sm:text-sm text-[var(--color-accent)] line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
