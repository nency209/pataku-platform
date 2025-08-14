import ProductCard from "@/components/product/ProductCard";

export default function NewArrivals() {
  const products = [
    {
      name: "1. New and sale badge",
      price: 110.0,
      badges: ["SALE"] as const,
     image: "/img/product-chair-01.jpg",
      originalPrice: 130.0,
      discount: 15,
    },
    {
      name: "2. New badge product",
      price: 80.0,
      badges: ["NEW"] as const,
     image: "/img/product-chair-02.jpg",
    },
    {
      name: "3. Variable Product",
      price: 50.0,
     image: "/img/product-table-01.jpg",
    },
    {
      name: "4. Grey armchair",
      price: 19.0,
      badges: ["NEW"] as const,
     image: "/img/product-armchair-01.jpg",
      discount: 15,
    },
    {
      name: "5. Small wooden side table",
      price: 55.0,
     image: "/img/product-table-02.jpg",
      badges: ["SALE"] as const,
      discount: 25,
    },
    {
      name: "6. Simple Product",
      price: 70.0,
     image: "/img/product-sofa-01.jpg",
      badges: ["SALE"] as const,
      discount: 20,
    },
    {
      name: "7. Variable With Soldout",
      price: 39.0,

      image: "/img/product_8_e0709cdb-4079-41b4-95a6-a88b8d8bb7b6_large.jpg",
      badges: ["SALE"] as const,
      discount: 30,
    },
    {
      name: "8. Dark grey armchair",
      price: 19.0,
      badges: ["SOLD OUT"] as const,
      image: "/img/product_9_15fa37fc-d449-4fde-8859-d70071312a98_large.jpg",
    },
    {
      name: "9.Countdown Product",
      price: 79.0,
      image: "/img/product_10_77be83b0-5aee-469c-ab17-80e50106394b_large.jpg",
    },
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            New <span className="italic font-semibold">Collections </span>Of
            Arrivals
          </h2>
          <p className="text-[var(--text-muted)] text-base ">
            Browse the collection of our new products. You will definitely find
            what you are looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              badges={product.badges}
              image={product.image}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
