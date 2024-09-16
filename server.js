const express = require('express');
const cors = require('cors');
const espRoutes = require('./routes/esp');
const app = express();

// Habilitar CORS
app.use(cors());

// Middleware para aceitar JSON
app.use(express.json());

// Rotas para o ESP32 e o frontend
app.use('/api/esp', espRoutes);

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
