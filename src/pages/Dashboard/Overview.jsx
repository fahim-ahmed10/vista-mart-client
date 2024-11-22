import useAuth from "../../hooks/useAuth";

const Overview = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="font-bold text-2xl mb-4 text-blue-700">Overview</h2>
      <h2 className="text-lg">
        <span className="font-bold">Name:</span> {user.displayName}
      </h2>
      <h2 className="text-lg">
        <span className="font-bold">Email:</span> {user.email}
      </h2>
    </div>
  );
};

export default Overview;
