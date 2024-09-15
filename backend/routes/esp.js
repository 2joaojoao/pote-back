const express = require('express');
const espController = require('../controllers/espController');
const router = express.Router();

router.post('/data', espController.receiveData);

module.exports = router;
