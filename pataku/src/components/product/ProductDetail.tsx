"use client";
import { useMemo, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { productsdetail } from "@/constants/Productdetails";
import { Button } from "../ui/button";
import Link from "next/link";
import { ShieldCheck, Truck, Undo2, Heart } from "lucide-react";
import Image from "next/image";

// Redux
import { useAppDispatch } from "@/redux/hook";
import { addToCart } from "@/redux/cartslice";
import { addToWishlist } from "@/redux/wishlistslice";

export default function ProductPage() {
  const { slug } = useParams();
  const router = useRouter();
  const products = productsdetail;

  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);

  // Default states
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (product) {
      setSelectedImage(product.categories?.[0] || product.image);
      setSelectedSize(product.sizes?.[0] || "");
      setSelectedColor(product.colors?.[0] || "");
    }
  }, [product]);

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(
      addToCart({
        slug: product.sku,
        name: product.name,
        price: product.price,
        image: selectedImage,
        size: selectedSize,
        color: selectedColor,
        quantity,
      })
    );
    setShowPopup(true);
  };

  const handleAddToWishlist = () => {
    if (!product) return;
    dispatch(
      addToWishlist({
        slug: product.sku,
        name: product.name,
        price: product.price,
        image: selectedImage,
      })
    );
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="mx-auto xl:max-w-6xl lg:max-w-4xl md:max-w-2xl px-4 sm:px-6 lg:px-0 py-6">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left side: images */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Thumbnails */}
          <div className="col-span-1 flex sm:flex-col items-center sm:items-start relative sm:w-32 sm:py-6">
            <button
              className="hidden sm:block mb-2 px-4 py-1  rounded absolute bg-white text-muted border border-color top-2 z-10 left-8"
              onClick={() => setThumbIndex((prev) => Math.max(0, prev - 1))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-up-icon lucide-chevron-up"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>

            <div className="overflow-hidden h-auto sm:h-[420px] flex sm:justify-center">
              <div
                className="flex sm:flex-col transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateY(-${thumbIndex * 140}px)`,
                }}
              >
                {product.categories.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    width={112}
                    height={128}
                    alt={`${product.name} ${i}`}
                    onClick={() => setSelectedImage(img)}
                    className={`cursor-pointer border w-20 h-20 sm:w-28 sm:h-32 object-cover mb-2 sm:mb-4 ${
                      selectedImage === img ? "border-black" : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              className="hidden sm:block mt-2 px-4 py-1 bg-white text-muted border border-color left-8  rounded absolute bottom-72 z-10"
              onClick={() =>
                setThumbIndex((prev) =>
                  Math.min(product.categories.length - 3, prev + 1)
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down-icon lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Big main image */}
          <div className="col-span-1 sm:col-span-3">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt={product.name}
                width={600}
                height={600}
                className="object-contain w-full h-auto max-h-[500px]"
                quality={100}
              />
            )}
          </div>
        </div>

        {/* Right side: details */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-lg sm:text-xl font-light font-lato">
            {product.name}
          </h1>
          <p className="text-sm text-muted font-rubik">SKU: {product.sku}</p>
          <p className="text-black text-[13px] font-rubik font-light">
            {product.stock && product.stock > 0
              ? `${product.stock} in stock`
              : "Out of Stock"}
          </p>

          {/* Prices */}
          <div className="flex flex-wrap gap-2 items-center my-2 text-2xl sm:text-[28px] font-rubik font-light text-primary">
            {product.oldPrice && (
              <span className="line-through text-gray-500">
                ${product.oldPrice}.00
              </span>
            )}
            <span>${product.price}.00</span>
          </div>

          {product.unitPrice && (
            <p className="text-black text-[13px] font-rubik font-light">
              {product.unitPrice}
            </p>
          )}

          <p className="py-4 text-[13px] font-rubik font-light text-muted border-b border-color">
            {product.description}
          </p>

          {/* Sizes */}
          {product.sizes && (
            <div className="flex flex-wrap gap-2 pt-6">
              <span className="text-sm">Size:</span>
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={`px-2 py-1 border text-sm ${
                    selectedSize === s ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Colors */}
          {product.colors && (
            <div className="flex flex-wrap gap-2 pt-6">
              <span className="text-sm">Color:</span>
              {product.colors.map((c) => (
                <div
                  key={c}
                  className={`w-6 h-6 border cursor-pointer ${
                    selectedColor === c ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c }}
                  onClick={() => setSelectedColor(c)}
                />
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center border border-color gap-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-16 text-center text-sm focus:outline-none"
              />
              <div className="flex flex-col">
                <button
                  type="button"
                  className="px-1 border border-color"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <button
                  type="button"
                  className="px-1 border border-color"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <Button variant="black" size="lg" onClick={handleAddToCart}>
              Add to Cart
            </Button>

            <Button
              variant="black"
              size="lg"
              onClick={() => router.push("/Checkout")}
            >
              Buy it now
            </Button>
          </div>

          {/* Wishlist */}
          <Button
            variant="black"
            size="lg"
            className="flex items-center gap-2 mt-4"
            onClick={handleAddToWishlist}
          >
            <Heart className="w-4 h-4" />
            <span>Add to Wishlist</span>
          </Button>

          {/* Category */}
          <p className="mt-4 text-[13px] text-muted font-rubik font-light">
            Category: <span className="text-muted">{product.category}</span>
          </p>

          {/* Share */}
          <div className="mt-3 flex flex-wrap gap-2 items-center">
            <span className="text-base font-rubik font-light">Share:</span>
            <div className="flex gap-2">
              {["plus", "pinterest", "facebook", "twitter"].map((icon, i) => (
                <Link key={i} href="#">
                  <Image
                    src={`/img/${icon}.jpg`}
                    alt={icon}
                    width="18"
                    height="18"
                    className="w-6 h-6"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Safe checkout icons */}
          <div className="mt-4">
            <p className="text-[13px] font-rubik font-light mb-2 text-muted">
              Guaranteed safe checkout
            </p>
            <div className="flex gap-2 flex-wrap">
              {[
                "social",
                "facebook",
                "bitcoin",
                "google-pay",
                "paypal",
                "visa",
              ].map((icon, i) => (
                <Image
                  key={i}
                  src={`/img/${icon}.jpg`}
                  alt={icon}
                  width={32}
                  height={32}
                  className="w-8 h-8 border border-gray-300 rounded-sm p-1"
                />
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="mt-6 space-y-2 text-[13px] font-rubik font-light text-muted">
            <div className="flex items-center gap-2 border-b border-color py-2">
              <ShieldCheck className="w-4 h-4" />
              <span>
                Security policy (edit with Customer reassurance module)
              </span>
            </div>
            <div className="flex items-center gap-2 border-b border-color py-2">
              <Truck className="w-4 h-4" />
              <span>
                Delivery policy (edit with Customer reassurance module)
              </span>
            </div>
            <div className="flex items-center gap-2 border-b border-color py-2">
              <Undo2 className="w-4 h-4" />
              <span>Return policy (edit with Customer reassurance module)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start pt-12 px-4"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative bg-white p-6 w-full max-w-lg grid gap-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              ✖
            </button>
            <div className="flex gap-4">
              <Image
                src={selectedImage}
                alt={product.name}
                width={112}
                height={112}
                className="w-28 h-28 object-contain"
              />
              <div className="space-y-2">
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-green-600">✔️ Added to cart successfully!</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => router.push("/cart")}
                    className="px-4 py-2 bg-black text-white"
                  >
                    View Cart
                  </button>
                  <button
                    onClick={() => router.push("/Checkout")}
                    className="px-4 py-2 bg-black text-white"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
