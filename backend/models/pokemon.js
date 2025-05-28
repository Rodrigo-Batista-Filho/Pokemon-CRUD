const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  codigo: { type: Number, required: true, unique: true },
  nome: { type: String, required: true },
  tipo_primario: { type: String, required: true },
  tipo_secundario: { type: String },
  campo_opcional: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
