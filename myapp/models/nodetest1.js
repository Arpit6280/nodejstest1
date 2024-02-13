const Sequelize = require("sequelize");

const sequelize = require("../database");

const PlayerProfile = sequelize.define("playerProfile", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  dob: Sequelize.STRING,
  photourl: Sequelize.STRING,
  birthplace: Sequelize.STRING,
  career: Sequelize.STRING,
  matches: Sequelize.STRING,
  score: Sequelize.STRING,
  fifties: Sequelize.INTEGER,
  centuries: Sequelize.INTEGER,
  wicket: Sequelize.INTEGER,
  average: Sequelize.DOUBLE,
});

module.exports = PlayerProfile;
