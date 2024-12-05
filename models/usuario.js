const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  email: DataTypes.STRING,
  telefono: DataTypes.STRING,
  imagen: DataTypes.STRING,
  cursoId: DataTypes.INTEGER,
});

module.exports = Usuario;
