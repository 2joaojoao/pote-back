const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');  // Rotas para login e cadastro
const espRoutes = require('./routes/esp');    // Rotas para receber dados do ESP32
const connection = require('./config/db');    // Conexão com o banco de dados

const app = express();

// Middleware para aceitar JSON no corpo das requisições
app.use(express.json());

// Middleware para permitir CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Rotas de autenticação
app.use('/api/auth', authRoutes);

// Rotas para receber dados do ESP32
app.use('/api/esp', espRoutes);

// Verificação da conexão com o MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

// Rota padrão para verificar se o servidor está rodando
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Configuração da porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
