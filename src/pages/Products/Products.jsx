import { FaSearch } from "react-icons/fa";
import Filter from "./Filter";
import useProductData from "../../hooks/useProductData";
import Loading from "../Loading/Loading";
import ProductCart from "../../components/Dashboard/Products/ProductCart";
import { useState } from "react";

const Products = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const { productData, brands, categories, totalProducts, isLoading } =
    useProductData({
      search,
      sort,
      brand,
      category,
    });
    //   console.log({ brands});


  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setSearch("");
    setBrand("");
    setCategory("");
    setSort("asc");
    window.location.reload();
  };

  return (
    <div className="flex pt-10">
      {/* Filter Section */}
      <div className="w-1/4 p-4 border-r">
        <Filter
          setBrand={setBrand}
          setCategory={setCategory}
          handleReset={handleReset}
          brands = {brands}
          categories = {categories}
          brand={brand} 
          category={category}  
        />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        {/* Search and Sort Bar */}
        <div className="flex justify-between mb-10">
          <form className="flex" onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Search products"
              className="p-2 border rounded w-60 mr-1"
            />
            <button className="bg-purple-600 p-3 rounded hover:bg-purple-700">
              <FaSearch color="white" />
            </button>
          </form>
          <div>
            <select
              className="p-2 border rounded"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Cards */}
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {productData.length === 0 ? (
                <div className="w-full min-h-screen flex items-center justify-center">
                  <h1 className="text-3xl font-bold">No Product Found</h1>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {productData.map((product) => (
                    <ProductCart key={product._id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
