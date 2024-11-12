const sequelize = require("sequelize");
const database = require("../database/connect");

const Upost = database.define("Upost", {
  from: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.STRING,
    allowNull: false,
  },
});
