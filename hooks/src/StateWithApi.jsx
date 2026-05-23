import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers]       = useState([]);      // data
  const [loading, setLoading]   = useState(true);    // loading state
  const [error, setError]       = useState(null);    // error state

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res  = await fetch("https://randomuser.me/api/?results=3");
        const data = await res.json();
        setUsers(data.results);   // set data
        setLoading(false);        // done loading
      } catch (err) {
        setError("Failed to fetch users"); //  handle error
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>{error}</p>;

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.name.first} {user.name.last} — {user.email}
        </li>
      ))}
    </ul>
  );
}

export default UserList;