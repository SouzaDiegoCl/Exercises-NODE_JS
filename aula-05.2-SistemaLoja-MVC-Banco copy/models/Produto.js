//orm import
import { Sequelize } from "sequelize";

//Configuração do Sequelize
import connection from "../config/sequelize-config.js";

const Produto = connection.define("produtos", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
//Não força a criação de tabela caso já exista
Produto.sync({force: false});
export default Produto;