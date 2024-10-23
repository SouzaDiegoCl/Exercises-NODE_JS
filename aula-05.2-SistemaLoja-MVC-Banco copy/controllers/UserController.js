import express from "express";
const router = express.Router();

import bcrypt from "bcrypt";
import User from "../models/User.js";

//Rota de Login
router.get("/login", (req, res) => {
  res.render("login");
});

//Rota de Cadastro
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

router.post("/createUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //Verificar se o usuário está cadastrado
  User.findOne({ where: { email: email } }).then((user) => {
    //Se não HOUVER
    if (user == undefined) {
      //AQUI É feito o cadastro e o hash e a senha

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      User.create({
        email: email,
        password: hash,
      }).then(() => {
        res.redirect("/login");
      });
    } else {
      //caso o usuário já esteja cadastrado
      res.send("O usuário já está cadastrado");
    }
  });
});

//Rota de Autenticação
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    //Se o usuario estiver cadastrado
    if (user != undefined) {
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      //Se a senha for válida
      if (isPasswordCorrect) {
        res.redirect("/");
      }
      //se a senha não for valida
      else {
        res.send(`Senha inválida<br>
            <a href="/login">Tente Novamente</a>`);
      }
    } else {
      //Se o usuário não
      res.send("Usuario não cadastrado");
    }
  });
});

export default router;
