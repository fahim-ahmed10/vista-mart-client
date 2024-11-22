import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserData = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    error,
    data: userData = [],
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/user/${user.email}`);
        if (!res.data || typeof res.data !== "object") {
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

  return { isLoading, error, userData, refetch };
};

export default useUserData;
