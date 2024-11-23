import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProductData = () => {
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    error,
    data: productData = [],
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/all-products");
        if (!Array.isArray(res.data)) {
          throw new Error("Data format is incorrect");
        }
        return res.data;
      } catch (err) {
        console.error("Error fetching data:", err); // Logs the exact error
        throw new Error("Failed to fetch data. Please try again later.");
      }
    },
    retry: false, // Disable automatic retries, we will manually control it
  });

  return { isLoading, error, productData, refetch };
};

export default useProductData;
