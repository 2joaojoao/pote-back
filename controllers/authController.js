const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authController = {
  register: (req, res) => {
    const { username, password } = req.body;

    User.findByUsername(username, (err, result) => {
      if (result.length > 0) {
        return res.status(400).json({ msg: 'Usuário já existe' });
      }

      // Criptografar a senha
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ msg: 'Erro ao criptografar senha' });

        // Criar novo usuário
        User.create(username, hashedPassword, (err) => {
          if (err) return res.status(500).json({ msg: 'Erro ao cadastrar usuário' });

          res.status(200).json({ msg: 'Usuário cadastrado com sucesso' });
        });
      });
    });
  },

  login: (req, res) => {
    const { username, password } = req.body;

    User.findByUsername(username, (err, result) => {
      if (result.length === 0) return res.status(400).json({ msg: 'Usuário não encontrado' });

      const user = result[0];

      // Comparar a senha
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (!isMatch) return res.status(400).json({ msg: 'Senha incorreta' });

        // Gerar token JWT
        const token = jwt.sign({ id: user.id }, 'seuSegredoJWT', { expiresIn: '1h' });
        res.json({ token });
      });
    });
  }
};

module.exports = authController;
