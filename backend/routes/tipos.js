const router = require('express').Router();
let Tipo = require('../models/tipo.js');

// Listar todos os Tipos
router.route('/').get((req, res) => {
  Tipo.find()
    .then(tipos => res.json(tipos))
    .catch(err => res.status(400).json('Erro: ' + err));
});

// Adicionar um novo Tipo
router.route('/add').post((req, res) => {
  const { codigo, nome, requisitos } = req.body;

  const novoTipo = new Tipo({
    codigo,
    nome,
    requisitos
  });

  novoTipo.save()
    .then(() => res.json('Tipo adicionado!'))
    .catch(err => res.status(400).json('Erro: ' + err));
});

// Obter um Tipo pelo ID
router.route('/:id').get((req, res) => {
  Tipo.findById(req.params.id)
    .then(tipo => res.json(tipo))
    .catch(err => res.status(400).json('Erro: ' + err));
});

// Deletar um Tipo pelo ID
router.route('/:id').delete((req, res) => {
  Tipo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Tipo deletado.'))
    .catch(err => res.status(400).json('Erro: ' + err));
});

// Atualizar um Tipo pelo ID
router.route('/update/:id').post((req, res) => {
  Tipo.findById(req.params.id)
    .then(tipo => {
      tipo.codigo = req.body.codigo;
      tipo.nome = req.body.nome;
      tipo.requisitos = req.body.requisitos;

      tipo.save()
        .then(() => res.json('Tipo atualizado!'))
        .catch(err => res.status(400).json('Erro: ' + err));
    })
    .catch(err => res.status(400).json('Erro: ' + err));
});

module.exports = router;
