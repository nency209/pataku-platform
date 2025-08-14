import Image from "next/image";
import Link from "next/link";
import { Heart, Facebook, Twitter, Instagram,  MessageCircleHeart} from "lucide-react";

export default function ProductDetail() {
  const product = {
    name: "1. New and sale badge",
    sku: "1511",
    stock: 7,
    originalPrice: 130.00,
    salePrice: 110.00,
    unitPrice: "27.50 / 2 g",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    categories: ["Chair", "Deals Product", "Featured Product"],
    tags: ["blue", "green", "I"],
    images: [
     "/img/product-chair-01.jpg",
     "/img/product-table-02.jpg",
     "/img/product-countdown-01.jpg"
    ],
    sizes: ["s", "m", "l", "xl"],
    colors: ["red", "green", "blue", "yellow", "white"]
  };

  return (
    <div className="bg-surface">
      {/* Banner Image */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src="/img/fullwidth-banner-1.jpg"
          alt="Outdoor Rattan Sofa Set"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-[var(--color-accent)]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                priority
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="relative aspect-square bg-white rounded-lg overflow-hidden border-2 border-gray-200 hover:border-[var(--color-accent)] cursor-pointer">
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 33vw, 200px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Product Title and Basic Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">SKU:</span> {product.sku}</p>
                <p><span className="font-medium">Availability:</span> {product.stock} left in stock</p>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[var(--color-accent)]">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-600">{product.unitPrice}</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                      size === 's' 
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-[var(--color-accent)]'
                    }`}
                  >
                    {size.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-10 h-10 rounded-full border-2 transition-colors ${
                      color === 'red' 
                        ? 'border-[var(--color-accent)]' 
                        : 'border-gray-300 hover:border-[var(--color-accent)]'
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button className="px-3 py-2 text-gray-600 hover:text-gray-900">-</button>
                <input
                  type="number"
                  defaultValue={1}
                  min="1"
                  className="flex-1 text-center border-none focus:ring-0"
                />
                <button className="px-3 py-2 text-gray-600 hover:text-gray-900">+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-black text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                Add to cart
              </button>
              <button className="w-full bg-[var(--color-accent)] text-white py-3 px-6 rounded-md font-semibold hover:opacity-90 transition-colors">
                Buy it now
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-md font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Add to wishlist
              </button>
            </div>

            {/* Categories and Tags */}
            <div className="space-y-4 pt-6 border-t">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Categories:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.categories.map((category) => (
                    <span key={category} className="text-sm text-gray-600 hover:text-[var(--color-accent)] cursor-pointer">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-sm text-gray-600 hover:text-[var(--color-accent)] cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Share:</h3>
                <div className="flex gap-3">
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-pink-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <MessageCircleHeart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
