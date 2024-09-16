// Variável para armazenar os dados dos cliques (em memória)
let clicksData = { sensor: 'botao', value: 0 };

const espController = {
  // Função para receber dados do ESP32 (POST)
  receiveData: (req, res) => {
    const { sensor, value } = req.body;
    clicksData = { sensor, value };  // Atualiza os dados dos cliques
    console.log(`Sensor: ${sensor}, Valor: ${value}`);
    res.status(200).json({ msg: 'Dados recebidos com sucesso' });
  },

  // Função para fornecer os dados ao frontend (GET)
  getClickData: (req, res) => {
    res.status(200).json(clicksData);  // Retorna os dados dos cliques
  }
};

module.exports = espController;
