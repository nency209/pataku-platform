import { Products } from "@/types/Productdetails";
import ProductShopCard from "./ProductShopCard";

export default function ProductGrid({ products }: { products: Products[] }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductShopCard key={p.slug} products={p} />
      ))}
    </div>
  );
}
