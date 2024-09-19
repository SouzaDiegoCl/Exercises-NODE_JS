//Importando o SEQUELIZE
import Sequelize from "sequelize";

//Criando os dados de conexão com o banco de dados
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    //database: 'loja', //Falando qual banco vai ser usado, enquanto não for criado, deixa comentado
    timezone: '-3:00',
})
export default connection;