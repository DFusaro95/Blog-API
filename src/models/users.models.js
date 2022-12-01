const {DataTypes} = require('sequelize')
const db = require('../utils/database')


const Users = db.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
  },
  country: {
    type: DataTypes.STRING(3)
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'normal'
  },
});

module.exports = Users