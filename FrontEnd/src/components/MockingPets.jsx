// frontend/src/components/MockingPets.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MockingPets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('/api/mocks/mockingpets');
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching mocking pets:", error);
      }
    };
    fetchPets();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Mascotas Mockeadas</h2>
      <ul className="list-disc pl-4">
        {pets.map((pet, index) => (
          <li key={index} className="mb-2">
            {pet.name} - Tipo: {pet.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MockingPets;
