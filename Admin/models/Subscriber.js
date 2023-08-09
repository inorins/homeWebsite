const { Sequelize } = require("sequelize");
const sequelize = require("../functions");

// const sequelize = new Sequelize();
var Subscriber = sequelize.define(
  "subscribers",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: Sequelize.STRING,
    created_at: Sequelize.STRING,
  },
  { timestamps: false }
);

module.exports = Subscriber;
