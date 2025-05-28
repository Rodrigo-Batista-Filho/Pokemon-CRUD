const mongoose = require('mongoose');

const TipoSchema = new mongoose.Schema({
  codigo: { type: Number, required: true, unique: true },
  nome: { type: String, required: true },
  requisitos: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tipo', TipoSchema);
