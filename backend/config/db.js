const mysql = require('mysql2');

// Configurando a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',    // Substitua com a senha do MySQL se houver
  database: 'seuProjeto'  // Nome do banco de dados que você criará no PHPMyAdmin
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

module.exports = connection;
