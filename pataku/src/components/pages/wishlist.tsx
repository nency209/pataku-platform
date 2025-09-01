"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromWishlist } from "@/redux/wishlistslice";
import Image from "next/image";

export default function WishlistPage() {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  if (wishlist.length === 0) {
    return <p className="p-8 text-center">Your wishlist is empty ❤️</p>;
  }

  return (
    <div className="mx-auto xl:max-w-6xl lg:max-w-4xl md:max-w-2xl px-4 sm:px-6 lg:px-0">
      <h1 className="text-2xl font-semibold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.slug}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="w-full h-48 object-contain"
            />
            <h2 className="mt-2 text-lg">{item.name}</h2>
            <p className="text-primary">${item.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-black text-white rounded"
              onClick={() => dispatch(removeFromWishlist(item.slug))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
