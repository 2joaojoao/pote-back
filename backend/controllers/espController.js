const SensorData = require('../models/SensorData');

const espController = {
  receiveData: (req, res) => {
    const { sensor, value } = req.body;

    SensorData.create(sensor, value, (err) => {
      if (err) return res.status(500).json({ msg: 'Erro ao salvar dados' });
      res.status(200).json({ msg: 'Dados recebidos com sucesso' });
    });
  }
};

module.exports = espController;
