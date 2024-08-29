//Importando o Express na aplicação
const express = require("express");

//Criando uma instância do Express
const app = express();


app.get("/", (req,res) => {
    res.send("<h1>Hello World! Bem vindo<h1><br><hr>")
})

//Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso!`);
  }
});

//Rota Perfil (com parametro)
// :nome é parametro obrigatório
app.get("/perfil/:nome", (req,res) => {
  const nome = req.params.nome
  res.send(`Olá, ${nome}! Seja bem vindo!`)
})
//Rota de videos
app.get("/video", (req,res) => {
  res.send("<h1>Página de vídeos</h1>")
})