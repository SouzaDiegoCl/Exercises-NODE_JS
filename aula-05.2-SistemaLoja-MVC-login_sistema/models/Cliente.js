//ORM - Sequelize
import {Sequelize } from "sequelize";

//Configuração do Sequelize
import connection from "../config/sequelize-config.js";

const Cliente = connection.define("clientes", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
//Não força a criação de tabela caso já exista
Cliente.sync({force: false})
export default Cliente;