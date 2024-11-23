import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProductData = ({ search , sort, brand, category }) => {
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    error,
    data = {},
    refetch,
  } = useQuery({
    queryKey: ["products", { search, sort, brand, category }],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/all-products", {
          params: { title: search, sort, brand, category }, // Pass query parameters
        });
        // Validate response structure
        if (
          !res.data.products ||
          !Array.isArray(res.data.products) ||
          !res.data.brands ||
          !res.data.categories ||
          typeof res.data.totalProducts !== "number"
        ) {
          throw new Error("API response format is invalid");
        }
        return res.data;
      } catch (err) {
        console.error("Error fetching data:", err); // Logs the exact error
        throw new Error("Failed to fetch data. Please try again later.");
      }
    },
    retry: false, // Disable automatic retries, we will manually control it
  });

  return {
    isLoading,
    error,
    productData: data.products || [],
    brands: data.brands || [],
    categories: data.categories || [],
    totalProducts: data.totalProducts || 0,
    refetch,
  };
};

export default useProductData;
