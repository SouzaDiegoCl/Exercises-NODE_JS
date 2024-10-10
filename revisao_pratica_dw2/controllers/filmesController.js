import express from "express";
import Filme from "../models/Filme.js";
const router = express.Router();

router.get("/", (req, res) => {
  Filme.findAll()
    .then((filmes) => {
      res.render("filmes", {
        filmes: filmes,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//Cadastro de Filmes
//POST usa para enviar rotas para formulário
router.post("/filme/new", (req, res) => {
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  const duracao = req.body.duracao;
  Filme.create({
    titulo: titulo,
    genero: genero,
    duracao: duracao,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

//GET
router.get("/filmes/delete/:id", (req, res) => {
  const id = req.params.id;
  Filme.destroy({ where: { id: id } })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
