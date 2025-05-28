const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conexão com o MongoDB estabelecida com sucesso'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Importar rotas
const pokemonsRouter = require('./routes/pokemons');
const tiposRouter = require('./routes/tipos');

// Usar rotas
app.use('/pokemons', pokemonsRouter);
app.use('/tipos', tiposRouter);

app.get('/', (req, res) => {
  res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

