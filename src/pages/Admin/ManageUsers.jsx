import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState([]); // Correct state initialization
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchUsers = async () => {
      try {
        setLoading(true); // Set loading to true before starting the fetch
        const response = await fetch("/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setAllUsers(data); // Directly set the users data (not data.products)
      } catch (err) {
        setError(err.message); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchUsers(); // Call the fetch function
  }, []); // Empty dependency array means this will run once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>First name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>role</th>
            <th>status </th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user._id}>
              {" "}
              <th>{user._id}</th>{" "}
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
