const sizes = ["s", "m", "l", "xl", "xxl"];

export default function SizeFilter({ filters, setFilters }: any) {
  const toggleSize = (size: string) => {
    setFilters((f: any) => ({
      ...f,
      sizes: f.sizes.includes(size)
        ? f.sizes.filter((s: string) => s !== size)
        : [...f.sizes, size],
    }));
  };

  return (
    <div className="border border-color flex flex-col justify-center items-center space-y-2 py-6">
      <h4 className="font-medium font-rubik text-xl  ">Size</h4>
      <div className="space-y-2 text-sm font-rubik text-muted">
        {sizes.map((s) => (
          <label key={s} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.sizes.includes(s)}
              onChange={() => toggleSize(s)}
            />
            {s.toUpperCase()}
          </label>
        ))}
      </div>
    </div>
  );
}
