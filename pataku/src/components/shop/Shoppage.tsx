"use client";
import { useState, useMemo } from "react";
import { productsdetail } from "@/constants/Productdetails";
import ProductGrid from "@/components/product/ProductGrid";
import ProductList from "@/components/product/ProductList";
import AvailabilityFilter from "@/components/shop/filters/AvailabilityFilter";
import PriceFilter from "@/components/shop/filters/PriceFilter";
import ProductTypeFilter from "@/components/shop/filters/ProductTypeFilter";

import ColorFilter from "@/components/shop/filters/ColorFilter";

import SizeFilter from "@/components/shop/filters/SizeFilter";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";

export default function ShopPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState("az");
  const [filters, setFilters] = useState({
    availability: "",
    price: [0, 500],
    productType: [] as string[],
    brand: [] as string[],
    colors: [] as string[],
    material: [] as string[],
    sizes: [] as string[],
  });

  // 🔎 Filtering Logic
  const filteredProducts = useMemo(() => {
    return productsdetail.filter((p) => {
      const colors = p.colors ?? [];
      const sizes = p.sizes ?? [];

      if (filters.availability === "in" && (p.stock ?? 0) <= 0) return false;
      if (filters.availability === "out" && (p.stock ?? 0) > 0) return false;

      if (p.price < filters.price[0] || p.price > filters.price[1])
        return false;

      if (
        filters.colors.length > 0 &&
        !filters.colors.some((c) => colors.includes(c))
      )
        return false;

      if (
        filters.sizes.length > 0 &&
        !filters.sizes.some((s) => sizes.includes(s))
      )
        return false;

      if (
        filters.productType.length > 0 &&
        !filters.productType.some((c) => p.category.includes(c))
      )
        return false;

      return true;
    });
  }, [filters]);

  // 🔃 Sorting
  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    if (sort === "az") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "za") sorted.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === "low") sorted.sort((a, b) => a.price - b.price);
    if (sort === "high") sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [filteredProducts, sort]);

  return (
    <div className="container mx-auto px-36">

    
    <div className="grid grid-cols-12 gap-6 p-6 mx-auto ">
      {/* Sidebar */}
      <aside className="col-span-3 space-y-6 px-6">
        <AvailabilityFilter filters={filters} setFilters={setFilters} />
        <PriceFilter filters={filters} setFilters={setFilters} />
        <ProductTypeFilter filters={filters} setFilters={setFilters} />
        
        <ColorFilter filters={filters} setFilters={setFilters} />
      
        <SizeFilter filters={filters} setFilters={setFilters} />
      </aside>

      {/* Products */}
      <main className="col-span-9 ">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6  pb-4">
          {/* View toggle */}
          <div className="flex gap-2 items-center">
            <Button
              className=""
              
              onClick={() => setView("grid")}
            >
              <Grid className="h-4 w-4 text-hover" />
            </Button>
            <Button
              
              
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4" />
            </Button>

            {/* Results */}
          <p className="text-sm text-gray-600 text-center">
            Showing {sortedProducts.length} of {productsdetail.length} results
          </p>
          </div>

          

          {/* Sort */}
          <select
            className="border border-gray-300 rounded px-3 py-1 text-sm"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="az">Alphabetically, A-Z</option>
            <option value="za">Alphabetically, Z-A</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {view === "grid" ? (
          <ProductGrid products={sortedProducts} />
        ) : (
          <ProductList products={sortedProducts} />
        )}
      </main>
    </div>
    </div>
  );
}
