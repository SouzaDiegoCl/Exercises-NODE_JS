//Importando o express (CommonJS)
const express = require("express");
const app = express();

// Vamos criar o servidor pelo node da forma padrão e não pelo express
const http = require("http").createServer(app);

//Importando o Socket.io
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  //Evento de quando entrar no chat
  socket.on("join", (data) => {
    console.log(`${data.nome} entrou no chat`);
    //Vamos enviar para o front novamente
    //Porque o back-end vai distribuir para todos os usuários ativos
    io.emit("join", data);
  });

  socket.on("msg", (data) => {
    console.log(data);
    io.emit("showmsg", data);
  });
});

//Configurando EJS
app.set("view engine", "ejs");

const port = 3001;
const host = "0.0.0.0"
http.listen(port, host, (error) => {
  if (error) {
    console.log(`Ocorreu um erro ao iniciar a aplicação`);
  } else {
    console.log(`Aplicação rodando em http://localhost:${port}`);
  }
});

// Rota PRINCIPAL
app.get("/", (req, res) => {
  res.render("index");
});
