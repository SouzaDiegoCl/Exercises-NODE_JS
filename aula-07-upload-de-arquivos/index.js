import multer from "multer";

import express from "express";
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

const upload = multer({ dest: "public/uploads" });

app.get("/", (req, res) => {
  res.render("index");
});

//Single representa que vai receber arquivo unico
app.post("/upload", upload.single("file"), (req, res) => {
  res.redirect("/");
  
});

const port = 8081;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro!${error}`);
  } else {
    console.log(`Servidor inciado com sucesso em: http://localhost:${port}.`);
  }
});
