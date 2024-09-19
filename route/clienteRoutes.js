const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');


// Cadastra um novo cliente
router.post('/clientes', clienteController.criar);

// Mostra todos os clientes
router.get('/clientes', clienteController.listar);

// Busca um cliente pelo ID
router.get('/clientes/:id', clienteController.buscarPorId);

// Atualiza dados de um cliente
router.put('/clientes/:id', clienteController.atualizar);

// Deleta um cliente
router.delete('/clientes/:id', clienteController.deletar);

module.exports = router;