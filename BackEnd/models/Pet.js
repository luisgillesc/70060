// backend/models/Pet.js
import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
});

const Pet = mongoose.model('Pet', petSchema);

export default Pet; // Exporta Pet como la exportación predeterminada
