import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";

const Overview = () => {
  const { user } = useAuth();
  const {userData, isLoading} = useUserData();

  if (isLoading) {
    return <div>Loading...</div>; // Display a loader while data is being fetched
  }
  return (
    <div>
      <h2 className="font-bold text-2xl mb-4 text-blue-700">Overview</h2>
      <h2 className="text-lg">
        <span className="font-bold">Username:</span> {user.displayName}
      </h2>
      <h2 className="text-lg">
        <span className="font-bold">Email:</span> {user.email}
      </h2>
      <h2 className="text-lg">
        <span className="font-bold">Full name:</span> {userData.firstName + " " + userData.lastName}
      </h2>
      <h2 className="text-lg">
        <span className="font-bold">Role:</span> {userData.role}
      </h2>
      <h2 className="text-lg">
        <span className="font-bold">Status:</span> {userData.status}
      </h2>
    </div>
  );
};

export default Overview;
