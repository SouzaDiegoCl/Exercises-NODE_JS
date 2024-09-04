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
// :nome? é um parametro opcional
app.get("/perfil/:nome?", (req,res) => {
  const nome = req.params.nome
  //Verificando se 'nome' foi informado!  
  if(nome){
    res.send(`<h1>Olá, ${nome}! Seja bem vindo!<h1>`)
  } else{
    res.send(`<h2>Faça Login Para acessar seu perfil<h2>`)

  }
})

//Rota de videos
//Parametros opcionais
app.get("/video:playlist?/:video?", (req,res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  //Verificando se a playlist = true e video = undefined 
if(playlist && video == undefined){
    res.send(`<h2>Você está na Playlist ${playlist}. </h2>`)
}

if(playlist && video){
  res.send(`<h2>Você está na playlist de ${playlist}</h2><br>
    Reproduzindo o vídeo ${video}...`);
  }else {
    //Se não for informado nenhum parâmetro 
    res.send("<h1>Página de vídeos</h1>");
  }
})