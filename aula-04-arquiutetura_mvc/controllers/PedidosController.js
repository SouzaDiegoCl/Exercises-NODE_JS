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