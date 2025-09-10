"use client";
import Image from "next/image";
import { useState } from "react";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartslice";
import { addToWishlist } from "@/redux/wishlistslice";
import { Products } from "@/types/Productdetails";



export default function productsShopCard({
  products,
  
  list
}: {
  products: Products;
 
  list?: boolean;
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        slug: products.slug,
        name: products.name,
        price: products.price,
        image: products.image,
        quantity: 1,
      })
    );
    setShowPopup(true);
  };

  const handleAddToWishlist = () => {
    dispatch(
      addToWishlist({
        slug: products.slug,
        name: products.name,
        price: products.price,
        
        image: products.image,
        
      })
    );
  };

  return (
    <div
      className={`cursor-pointer relative ${
        list ? "flex gap-4 items-start" : ""
      }`}
    >
      {/* Image + hover actions */}
      <div
        className={`relative ${
          list ? "w-32 h-32" : "w-full aspect-[401/480]"
        } group`}
      >
        <Image
          src={products.image}
          alt={products.name}
          // fill={!list}
          width={ 260}
          height={ 250}
          className="object-contain bg-card "
        />

        {/* Hover actions (wishlist + quickview) */}
        {!list && (
          <>
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
          </>
        )}
      </div>

      {/* products info */}
      <div className={`${list ? "flex-1 space-y-2" : "mt-3"}`}>
        <h3 className="font-semibold text-black hover:text-primary">
          {products.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-base font-medium text-primary">
            ${products.price.toFixed(2)}
          </span>
          {products.oldPrice && (
            <span className="line-through text-sm text-muted">
              ${products.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        {list && (
          <p className="text-xs text-gray-500">Stock: {products.stock}</p>
        )}
      </div>

      {/* Badges + Discount */}
      {/* {Product.badges && products.badges.length > 0 && (
        <div className="absolute top-2 left-2 bg-black text-white px-2 text-xs">
          {products.badges[0]}
        </div>
      )}
      {products.discount && (
        <div className="absolute top-10 left-2 bg-red-500 text-white px-2 text-xs">
          -{products.discount}%
        </div>
      )} */}

      {/* Cart popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start pt-12"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative bg-white p-6 grid xl:grid-cols-3 gap-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-muted hover:text-black text-xl"
            >
              ✖
            </button>

            <div>
              <Image
                src={products.image}
                alt={products.name}
                width={112}
                height={112}
                className="w-28 h-28 object-contain"
              />
            </div>

            <div className="col-span-2 space-y-2">
              <p className="text-lg font-semibold">{products.name}</p>
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
    </div>
  );
}
