const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso: http://localhost:${port}}`);
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/clientes", (req, res) => {
  const clientesLista = [
    { nome: "Diego Baltazar", cpf: "123.456.789-11", endereco: "Registro/SP" },
    {
      nome: "Juliana Ferreira",
      cpf: "123.456.789-11",
      endereco: "São Paulo/SP",
    },
    {
      nome: "Pitucha Ferreira Baltazar",
      cpf: "xxx.xxx.xxx-xx",
      endereco: "Cananéia/SP",
    },
    {
      nome: "Lucke Ferreira Baltazar",
      cpf: "xxx.xxx.xxx-xx",
      endereco: "Xique-Xique/BA",
    },
    {
      nome: "Cacau Ferreira Baltazar",
      cpf: "xxx.xxx.xxx-xx",
      endereco: "Los Angeles/CA",
    },
  ];
  res.render("clientes", {
    clientesLista: clientesLista,
  });
});

app.get("/produtos", (req, res) => {
  const produtosLista = [
    { nomeProduto: "xxx", preco: "xxx", categoria: "xxx" },
    { nomeProduto: "xxx", preco: "xxx", categoria: "xxx" },
    { nomeProduto: "xxx", preco: "xxx", categoria: "xxx" },
    { nomeProduto: "xxx", preco: "xxx", categoria: "xxx" },
  ];
  res.render("produtos", {
    produtosLista: produtosLista,
  });
});
let pedidosLista = [
  { numPedido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit error suscipit ab quaerat numquam excepturi fuga! Ut fugit quibus", valor: 1.0 },
  { numPedido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit error suscipit ab quaerat numquam excepturi fuga! Ut fugit quibus", valor: 1.0 },
  { numPedido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit error suscipit ab quaerat numquam excepturi fuga! Ut fugit quibus", valor: 1.0 },
  { numPedido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit error suscipit ab quaerat numquam excepturi fuga! Ut fugit quibus", valor: 1.0 },

];


app.get("/pedidos", (req, res) => {

  res.render("pedidos", {
    pedidosLista: pedidosLista,
  });
});



