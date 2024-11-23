const Filter = () => {
  return (
    <div>
      <h3 className="font-bold mb-4 text-2xl">Filters</h3>
      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Brand</label>
        <select className="w-full p-2 border rounded">
          <option disabled selected>All Brands</option>
          <option value="Brand X">Brand X</option>
          <option value="Brand Y">Brand Y</option>
        </select>
      </div>
      {/* Category Filter */}
      <div>
        <label className="block font-medium mb-2">Category</label>
        <select
          className="w-full p-2 border rounded"
        >
          <option disabled selected>All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Apparel">Apparel</option>
        </select>
      </div>
      <button className="btn mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white text-xl">Reset</button>
    </div>
  );
};

export default Filter;
