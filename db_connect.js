const { Sequelize, DataTypes } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'Priya02012005',
  database: 'embdp',
});

// Define CenterDetails model
const CenterDetails = sequelize.define('CenterDetails', {
  center: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  limit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { sequelize, CenterDetails };