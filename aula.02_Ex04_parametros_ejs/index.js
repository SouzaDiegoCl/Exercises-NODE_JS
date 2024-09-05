//Importando o Express na aplicação
const express = require("express");

//Criando uma instância do Express
const app = express();

//DEFININDO EJS como renderizador de páginas
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

//Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso!`);
  }
});

//Rota de produtos
app.get("/produtos/:produtoNome?", (req, res) => {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];
  const produtoNome = req.params.produtoNome;
  res.render("Produtos", {
    //variavel usada na página renderizada : variavel passada como parametro
    produto: produtoNome,
    listaProdutos: listaProdutos,
    //Na pag produtos.ejs haverá uma testagem de condição
  });
});

//Rota Perfil (com parametro)
// :nome é parametro obrigatório
// :nome? é um parametro opcional
app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome;
  res.render("perfil", {
    nome: nome,
  });
});
//Rota de videos
//Parametros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  // const playlist = req.params.playlist
  const playlist = req.params.playlist;
  const video = req.params.video;
  res.render("videos", {
    playlist: playlist,
    video: video,
  });
});
