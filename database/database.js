const Sequelize = require("sequelize");

const connection = new Sequelize("respondaAqui", "root", "chama", {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection