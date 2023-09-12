const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const Category = db.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Category;