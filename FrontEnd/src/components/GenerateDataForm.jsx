// frontend/src/components/GenerateDataForm.jsx
import React, { useState } from 'react';

const GenerateDataForm = () => {
  const [userCount, setUserCount] = useState(0);
  const [petCount, setPetCount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/mocks/generateData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          users: Number(userCount),
          pets: Number(petCount),
        }),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      alert(data.message || 'Data generated successfully');
    } catch (error) {
      console.error("Error generating data:", error);
      alert('Failed to generate data');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Generar Datos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Número de Usuarios:</label>
          <input
            type="number"
            value={userCount}
            onChange={(e) => setUserCount(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            min="0"
          />
        </div>
        <div>
          <label className="block mb-1">Número de Mascotas:</label>
          <input
            type="number"
            value={petCount}
            onChange={(e) => setPetCount(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            min="0"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Generar
        </button>
      </form>
    </div>
  );
};

export default GenerateDataForm;
