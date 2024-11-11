const sequelize = require("sequelize");
const database = require("../database/connect");

const User = database.define("User", {
  uuid: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.STRING,
    allowNull: true,
  },
  age: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  followers: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  follow: {
    type: sequelize.ARRAY,
  },
});
