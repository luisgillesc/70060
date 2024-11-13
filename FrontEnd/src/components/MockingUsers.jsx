// frontend/src/components/MockingUsers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MockingUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/mocks/mockingusers');
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching mocking users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Usuarios Mockeados</h2>
      <ul className="list-disc pl-4">
        {users.map((user, index) => (
          <li key={index} className="mb-2">
            {user.username} - Role: {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MockingUsers;