//Importando o Express na aplicação
import express from 'express';

//Criando uma instância do Express
const app = express();

import ClientesController from "./controllers/ClientesController.js";

//DEFININDO EJS como renderizador de páginas
app.set("view engine", "ejs");

//Definir a pasta dos arquivos estáticos: (public)
app.use(express.static('public'));

//Definindo o uso das rotas que estão nos controllers
//Essa Barra indica que vai usar todas as rotas que estão dentro do controller
app.use("/", ClientesController);

//Rota Principal
app.get("/", (req, res) => {
  res.render("index");
});

//Iniciando o servidor na porta 8080
const port = 8080
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {  
    console.log(`Servidor iniciado com sucesso: http://localhost:${port}}`);
  }
})

