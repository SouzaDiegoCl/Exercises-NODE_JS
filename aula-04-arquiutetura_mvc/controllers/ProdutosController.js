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