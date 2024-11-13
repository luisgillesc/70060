// backend/routes/mocks.router.js
import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js'; // Importación predeterminada
import Pet from '../models/Pet.js'; // Importación predeterminada

const router = express.Router();

// Endpoint para mockingpets
router.get('/mockingpets', (req, res) => {
  const pets = ["dog", "cat", "bird", "fish"].map((type, i) => ({
    name: `Pet${i + 1}`,
    type,
  }));
  res.json(pets);
});

// Generar 50 usuarios mockeados
router.get('/mockingusers', async (req, res) => {
  const users = Array.from({ length: 50 }, (_, i) => ({
    username: `user${i + 1}`,
    password: bcrypt.hashSync('coder123', 10),
    role: Math.random() > 0.5 ? 'user' : 'admin',
    pets: [],
  }));
  res.json(users);
});

// Endpoint para generar usuarios y mascotas en MongoDB
router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;

  // Validación de datos
  if (!Number.isInteger(users) || !Number.isInteger(pets)) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  try {
    // Generar usuarios
    const generatedUsers = Array.from({ length: users }, (_, i) => ({
      username: `generated_user${i + 1}`,
      password: bcrypt.hashSync('coder123', 10),
      role: Math.random() > 0.5 ? 'user' : 'admin',
      pets: [],
    }));

    await User.insertMany(generatedUsers);

    // Generar mascotas
    const generatedPets = Array.from({ length: pets }, (_, i) => ({
      name: `Pet${i + 1}`,
      type: 'dog',
    }));

    await Pet.insertMany(generatedPets);

    res.json({ message: 'Data generated successfully' });
  } catch (error) {
    console.error("Error in generateData:", error); // Mostrar el error completo en la consola
    res.status(500).json({ message: 'Server error' });
  }
});


export default router;
