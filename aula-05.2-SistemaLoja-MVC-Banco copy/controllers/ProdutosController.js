import express from "express";
const router = express.Router();

import Produto from "../models/Produto.js";
import { where } from "sequelize";

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});

// Rota de cadastro
router.post("/produtos/new", (req, res) => {
  //Recebendo os dados do formulário e gravando nas variaveis
  const nomeProduto = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.create({
    nome: nomeProduto,
    preco: preco,
    categoria: categoria,
  }).then(() => {
    res.redirect("/produtos");
  });
});

//Rota de exclusão de produtos
//Essa rota possui um parametroi id não opctional
router.get("/produto/delete/:id", (req, res) => {
  //Coletar o id que veio na url
  const id = req.params.id;
  //Método para excluir
  Produto.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

//Rota de edição
router.get("/produto/edit/:id", (req, res) => {
  const id = req.params.id;
  Produto.findByPk(id)
    .then((produto) => {
      res.render("produtoEdit", {
        produto: produto,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//Rota de alteração
router.post("/produto/update", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;

  Produto.update(
    {
      nome: nome,
      preco: preco,
      categoria: categoria,
    },
    { where: { id: id } }
  )
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});
export default router;
