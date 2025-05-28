const router = require('express').Router();
let Pokemon = require('../models/pokemon.model');

// Listar todos os Pokémons
router.route('/').get((req, res) => {
  const { nome, tipo } = req.query;
  let filter = {};

  if (nome) {
    filter.nome = { $regex: nome, $options: 'i' };
  }

  if (tipo) {
    filter.$or = [
      { tipo_primario: { $regex: tipo, $options: 'i' } },
      { tipo_secundario: { $regex: tipo, $options: 'i' } }
    ];
  }

  Pokemon.find(filter)
    .then(pokemons => res.json(pokemons))
    .catch(err => res.status(400).json('Erro: ' + err));
});

// Rota de teste para verificar se o servidor está funcionando
router.route('/test').get((req, res) => {
  res.json({ message: 'Rota de teste funcionando!' });
});


// Adicionar um novo Pokémon
router.route('/add').post((req, res) => {
  const { codigo, nome, tipo_primario, tipo_secundario, campo_opcional } = req.body;

  const novoPokemon = new Pokemon({
    codigo,
    nome,
    tipo_primario,
    tipo_secundario,
    campo_opcional
  });

  novoPokemon.save()
    .then(() => res.json('Pokémon adicionado!'))
    .catch(err => res.status(400).json('Erro: ' + err));
});

// Obter um Pokémon pelo ID
router.route('/:id').get((req, res) => {
  Pokemon.findById(req.params.id)
    .then(pokemon => res.json(pokemon))
    .catch(err => res.status(400).json('Erro: ' + err));
});

// Deletar um Pokémon pelo ID
router.route('/:id').delete((req, res) => {
  Pokemon.findByIdAndDelete(req.params.id)
    .then(() => res.json('Pokémon deletado.'))
    .catch(err => res.status(400).json('Erro: ' + err));
});

// Atualizar um Pokémon pelo ID
router.route('/update/:id').post((req, res) => {
  Pokemon.findById(req.params.id)
    .then(pokemon => {
      pokemon.codigo = req.body.codigo;
      pokemon.nome = req.body.nome;
      pokemon.tipo_primario = req.body.tipo_primario;
      pokemon.tipo_secundario = req.body.tipo_secundario;
      pokemon.campo_opcional = req.body.campo_opcional;

      pokemon.save()
        .then(() => res.json('Pokémon atualizado!'))
        .catch(err => res.status(400).json('Erro: ' + err));
    })
    .catch(err => res.status(400).json('Erro: ' + err));
});

module.exports = router;
