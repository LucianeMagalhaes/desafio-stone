//const Sequelize = require('sequelize')
const db = require("../database/db.js");

//  const Funcionario 

module.exports = db.sequelize.define('funcionarios', {
        nome:{
            type: db.Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O campo não pode ser vazio"
                }
            }
        },
        idade:{
            type: db.Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O campo não pode ser vazio"
                }
            }
        },
        cargo:{
            type: db.Sequelize.STRING,
            allowNull: false,
        }
    });
    

//Funcionario.sync({force: true})
