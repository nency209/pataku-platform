const colors = ["red", "green", "blue", "yellow", "black", "white", "gray", "pink"];

export default function ColorFilter({ filters, setFilters }: any) {
  const toggleColor = (color: string) => {
    setFilters((f: any) => ({
      ...f,
      colors: f.colors.includes(color)
        ? f.colors.filter((c: string) => c !== color)
        : [...f.colors, color],
    }));
  };

  return (
    <div className="border border-color flex flex-col justify-center items-center space-y-2 py-6">
      <h4 className="font-medium font-rubik text-xl  ">Color</h4>
      <div className="grid grid-cols-1  gap-2 space-y-1 text-sm font-rubik text-muted">
        {colors.map((c) => (
          <label key={c} className="flex items-center gap-6">
            <input
              type="checkbox"
              checked={filters.colors.includes(c)}
              onChange={() => toggleColor(c)}
            />
            {c}
          </label>
        ))}
      </div>
    </div>
  );
}
