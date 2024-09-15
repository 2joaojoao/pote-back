const connection = require('../config/db');

const SensorData = {
  create: (sensor, value, callback) => {
    connection.query(
      'INSERT INTO sensor_data (sensor, value) VALUES (?, ?)',
      [sensor, value],
      callback
    );
  }
};

module.exports = SensorData;
