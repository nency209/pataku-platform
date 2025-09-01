import { Products } from "@/types/Productdetails";
import ProductShopCard from "./ProductShopCard";

export default function ProductList({ products }: { products: Products[] }) {
  return (
    <div className="space-y-4">
      {products.map((p) => (
        <div key={p.slug} className="py-4  flex gap-4 items-center">
          <ProductShopCard products={p} list />
        </div>
      ))}
    </div>
  );
}
