const productTypes = ["Chair", "Deals Product", "Featured Product"];

export default function ProductTypeFilter({ filters, setFilters }: any) {
  const toggleType = (type: string) => {
    setFilters((f: any) => ({
      ...f,
      productType: f.productType.includes(type)
        ? f.productType.filter((t: string) => t !== type)
        : [...f.productType, type],
    }));
  };

  return (
    <div className="border border-color flex flex-col justify-center items-center space-y-2 py-6">
      <h4 className="font-medium font-rubik text-xl  ">Product Type</h4>
      <div className="space-y-2 text-sm font-rubik text-muted">
        {productTypes.map((t) => (
          <label key={t} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.productType.includes(t)}
              onChange={() => toggleType(t)}
            />
            {t}
          </label>
        ))}
      </div>
    </div>
  );
}
