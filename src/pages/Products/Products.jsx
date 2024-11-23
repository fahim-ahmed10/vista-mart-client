import { FaSearch } from "react-icons/fa";
import Filter from "./Filter";
import useProductData from "../../hooks/useProductData";
import Loading from "../Loading/Loading";
import ProductCart from "../../components/Dashboard/Products/ProductCart";

const Products = () => {
  const { productData, isLoading } = useProductData();
  console.log(productData)
  return (
    <div className="flex pt-10">
      {/* Filter Section */}
      <div className="w-1/4 p-4 border-r">
        <Filter />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        {/* Search and Sort Bar */}
        <div className="flex justify-between mb-10">
          <div className="flex">
            <input
              type="text"
              placeholder="Search products"
              className="p-2 border rounded w-60 mr-1"
            />
            <button className="bg-purple-600 p-3 rounded hover:bg-purple-700">
              <FaSearch color="white" />
            </button>
          </div>
          <div>
            <select className="p-2 border rounded">
              <option disabled selected>
                Sort by Price
              </option>
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
                <div className="min-h-screen grid grid-cols-3 gap-3">
                {
                    productData.map(product => (
                        <ProductCart key={product._id} product={product}/>
                    ))
                }
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
