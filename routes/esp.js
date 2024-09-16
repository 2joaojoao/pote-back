const express = require('express');
const espController = require('../controllers/espController');
const router = express.Router();

// Rota POST para receber dados do ESP32
router.post('/data', espController.receiveData);

// Rota GET para o frontend buscar os dados dos cliques
router.get('/data', espController.getClickData);

module.exports = router;
