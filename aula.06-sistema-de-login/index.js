// Importando o Express com ES6 Modules
import express from "express";
// Iniciando o Express na variável app
const app = express();

// Importando o Sequelize (com os dados da conexão)
import connection from "./config/sequelize-config.js";
// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";
import UsersController from "./controllers/UsersController.js";

//Flash
import flash from "express-flash";
app.use(flash());

//Importando o Middleware Auth
import Auth from "./middleware/Auth.js";
//Importando o gerador de sessoes do express
import session from "express-session";

//Configurando o express-session
app.use(
  session({
    secret: "lojasecret", //Segredo que acompanha sessão
    cookie: { maxAge: 3600000 }, //Tempo para sessão expirar  = 1 hora
    resave: false,
    saveUninitialized: true,
  })
);

// Permite capturar dados vindo de formulários
app.use(express.urlencoded({ extended: false }));

// Realizando a conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

//  Criando o banco de dados se ele não existir
connection
  .query(`CREATE DATABASE IF NOT EXISTS loja;`)
  .then(() => {
    console.log("O banco de dados está criado.");
  })
  .catch((error) => {
    console.log(error);
  });

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);
app.use("/", UsersController);

// ROTA PRINCIPAL
app.get("/", Auth, function (req, res) {
  res.render("index", {
    messages: req.flash(),
  });
});

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso, no http://localhost:${port}`);
  }
});
