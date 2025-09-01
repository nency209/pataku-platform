export default function PriceFilter({ filters, setFilters }: any) {
  return (
    <div className="border border-color flex flex-col justify-center items-center space-y-2 py-6">
      <h4 className="font-medium font-rubik text-xl  ">Price</h4>
      <div className="flex items-center gap-2 text-sm font-rubik text-muted">
        <input
          type="number"
          value={filters.price[0]}
          onChange={(e) =>
            setFilters((f: any) => ({ ...f, price: [Number(e.target.value), f.price[1]] }))
          }
          className="w-20 border border-color p-1"
        />
        <span>-</span>
        <input
          type="number"
          value={filters.price[1]}
          onChange={(e) =>
            setFilters((f: any) => ({ ...f, price: [f.price[0], Number(e.target.value)] }))
          }
          className="w-20 border border-color p-1"
        />
      </div>
    </div>
  );
}
