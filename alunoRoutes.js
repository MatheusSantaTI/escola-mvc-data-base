// routes/alunoRoutes.js

const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/aluno.controller');

router.get('/', alunoController.listar);
router.post('/', alunoController.criar);
router.put('/:id', alunoController.atualizar);
router.delete('/:id', alunoController.deletar);

module.exports = router;
// routes/cursoRoutes.js            