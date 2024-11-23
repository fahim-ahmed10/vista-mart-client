import { PropTypes } from "prop-types";

const Filter = ({ setBrand, setCategory, handleReset, brands, categories, brand, category }) => {
  return (
    <div>
      <h3 className="font-bold mb-4 text-2xl">Filters</h3>
      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Brand</label>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
        >
          <option value="">Brands</option>
          {brands.length === 0 ? (
            <option>No Brands Available</option>
          ) : (
            brands.map((brand, i) => (
              <option key={i} value={brand}>
                {brand}
              </option>
            ))
          )}
        </select>
      </div>
      {/* Category Filter */}
      <div>
        <label className="block font-medium mb-2">Category</label>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="">Categories</option>

          {categories.length === 0 ? (
            <option disabled>No category Available</option>
          ) : (
            categories.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))
          )}
        </select>
      </div>
      <button
        className="btn mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white text-xl"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

Filter.propTypes = {
  setBrand: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  brand: PropTypes.string.isRequired, // Added brand prop type
  category: PropTypes.string.isRequired, // Added category prop type
};

export default Filter;
