const connection = require('../config/db');

const User = {
  create: (username, hashedPassword, callback) => {
    connection.query(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword],
      callback
    );
  },
  findByUsername: (username, callback) => {
    connection.query('SELECT * FROM users WHERE username = ?', [username], callback);
  }
};

module.exports = User;
