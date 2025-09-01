"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartslice";
import { addToWishlist } from "@/redux/wishlistslice";

export default function ProductCard({
  slug,
  name,
  price,
  oldprice,
  badges,
  countdown,
  image,
  discount,
}: Product) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        slug,
        name,
        price,
        // oldprice:"",
        // badges,
        // countdown,
        image,
        // discount,
        quantity: 1,
      })
    );
    setShowPopup(true);
  };

  const handleAddToWishlist = () => {
    dispatch(
      addToWishlist({
        slug, // unique id
        name,
        price,
        oldprice,

        countdown,
        image,
        discount,
      })
    );
  };

  return (
    <div className="cursor-pointer">
      {countdown && (
        <div className="mt-2 text-xs sm:text-sm text-muted flex border border-color justify-evenly py-3 sm:py-4">
          {[
            { value: countdown[0], label: "days" },
            { value: countdown[1], label: "hours" },
            { value: countdown[2], label: "minutes" },
            { value: countdown[3], label: "seconds" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col">
              <p className="font-light font-rubik text-lg text-black text-center">
                {String(item.value).padStart(2, "0")}
              </p>
              <span className="font-light font-rubik text-muted">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="relative">
        <div className="w-full bg-card flex items-center mt-3 sm:mt-4">
          {image ? (
            <div className="relative w-full aspect-[401/480] group">
              <Image
                src={image}
                alt={name}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                className="object-contain bg-card"
              />
              {/* Top-right actions */}
              <div className="absolute top-2 right-3 sm:right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow flex items-center justify-center">
                  <Eye className="w-3 h-3 text-muted text-hover hover:cursor-pointer" />
                </button>

                <button
                  onClick={handleAddToWishlist}
                  className="bg-white p-2 rounded-full shadow flex items-center justify-center"
                >
                  <Heart className="w-3 h-3 text-muted text-hover hover:cursor-pointer" />
                </button>
              </div>

              {/* Cart (bottom-right) */}
              <div className="absolute bottom-1 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handleAddToCart}
                  className="bg-white p-2 rounded-full shadow flex items-center justify-center bg-primary-hover border primary-border hover:cursor-pointer"
                >
                  <ShoppingCart className="w-3 h-3 text-muted hover:text-white hover:cursor-pointer" />
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-muted text-sm">No image</span>
            </div>
          )}
        </div>

        {/* Cart popup */}
        {showPopup && (
          <div
            className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start pt-12"
            onClick={() => setShowPopup(false)} // click backdrop to close
          >
            <div
              className="relative bg-white p-6 grid xl:grid-cols-3 gap-6 shadow-lg"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside card
            >
              {/* Close Button (top-right corner) */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
              >
                ✖
              </button>

              <div>
                <Image
                  src={image}
                  alt={name}
                  width={112}
                  height={112}
                  className="w-28 h-28 object-contain"
                />
              </div>

              <div className="col-span-2 space-y-2">
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-green-600">✔️ Added to cart successfully!</p>
                <button
                  onClick={() => router.push("/cart")}
                  className="px-4 py-2 bg-black text-white"
                >
                  View Cart
                </button>
                <button
                  onClick={() => router.push("/Checkout")}
                  className="px-4 py-2 bg-black text-white ml-2"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="absolute top-6 left-4 bg-black text-white px-1 font-rubik font-light text-xs">
            {badges.map((badge, index) => (
              <div key={index}>{badge}</div>
            ))}
          </div>
        )}

        {/* Discount */}
        {discount && (
          <div className="absolute top-12 left-4 bg-primary px-1 text-white font-rubik font-light text-[11px]">
            -{discount}%
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="mt-3">
        <h3 className="text-base font-light font-rubik text-black text-hover">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-base font-light font-rubik text-primary">
            ${price.toFixed(2)}
          </span>
          {oldprice && (
            <span className="text-sm font-light font-rubik text-muted line-through">
              ${oldprice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
