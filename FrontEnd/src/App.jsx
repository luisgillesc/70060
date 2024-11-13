// frontend/src/App.jsx
import React from 'react';
import MockingUsers from './components/MockingUsers.js';
import MockingPets from './components/MockingPets.js';
import GenerateDataForm from './components/GenerateDataForm.js';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Sistema de Mocking</h1>
      <GenerateDataForm />
      <MockingUsers />
      <MockingPets />
    </div>
  );
};

export default App;
