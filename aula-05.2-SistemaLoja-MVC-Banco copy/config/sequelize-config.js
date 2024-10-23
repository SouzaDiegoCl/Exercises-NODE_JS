//Importando Sequelize
import { Sequelize } from "sequelize";
 
//Criando os dados de conexão com o banco dados
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password:'',
    //comente essa linha na primeira exec
    database: 'loja',
    timezone: '-03:00'
})


export default connection;