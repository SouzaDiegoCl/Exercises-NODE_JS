//Importando o Express na aplicação
const express = require("express");

//Criando uma instância do Express
const app = express();

//DEFININDO EJS como renderizador de páginas
app.set("view engine", "ejs");

//Definir a pasta dos arquivos estáticos: (public)
app.use(express.static('public'));

//Iniciando o servidor na porta 8080
const port = 8080
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {  
    console.log(`Servidor iniciado com sucesso: http://localhost:${port}}`);
  }
})

app.get("/", (req, res) => {
  res.render("index");
});

//Rota de produtos
app.get("/produtos/:produtoNome?", (req, res) => {
  const listaProdutos = ['Computador', 'Celular', 'Tablet', 'Notebook'];
  const produtoNome = req.params.produtoNome;
  res.render("Produtos", {
    //variavel usada na página renderizada : variavel passada como parametro
    produto : produtoNome,
    listaProdutos : listaProdutos
    //Na pag produtos.ejs haverá uma testagem de condição
    
  });
});


//Rota Perfil (com parametro)
// :nome é parametro obrigatório
// :nome? é um parametro opcional
app.get("/perfil/:nome?", (req, res) => {
  res.render("perfil");
});

//Rota de videos
//Parametros opcionais
app.get("/video:playlist?/:video?", (req, res) => {
  res.render("video");
});

//Rota de pedidos
app.get("/pedidos", (req, res)=>{
  //ARRAY DE OBJETOS COM OS PEDIDOS
  const pedidos = [
    {produto: "Celular", valor: 3000},
    {produto: "Computador", valor: 4000},
    {produto: "Tablet", valor: 2000},
    {produto: "Notebook", valor: 3800},
  ]
  //Enviando o array de objetos 
  res.render("pedidos", {
    pedidos: pedidos
  })
})