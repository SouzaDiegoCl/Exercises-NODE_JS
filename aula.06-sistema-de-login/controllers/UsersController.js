import express from "express";
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt";

// ROTA DE LOGIN
router.get("/login", (req, res) => {
  res.render("login", {
    loggedOut: true,
    messages: req.flash()
  });
});

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    loggedOut: true,
    messages: req.flash()

  });
});

// ROTA DE CRIAÇÃO DE USUÁRIO
router.post("/createUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // VERIFICAR SE O USUÁRIOI JÁ ESTÁ CADASTRADO
  User.findOne({ where: { email: email } }).then((user) => {
    if (user == undefined) {
      // AQUI É FEITO O CADASTRO E O HASH DE SENHA
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      User.create({
        email: email,
        password: hash,
      }).then(() => {
        res.redirect("/login");
      });
      // CASO O USUÁRIO JÁ ESTEJA CADASTRADO:
    } else {
      req.flash("danger", "Usuário Já Cadastrado");
      res.redirect("/login");
    }
  });
});

// ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // BUSCA O USUÁRIO NO BANCO
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      // SE O USUÁRIO TIVER CADASTRADO:
      if (user != undefined) {
        // VALIDA A SENHA (VERIFICA O HASH)
        const correct = bcrypt.compareSync(password, user.password);
        if (correct) {
          //AUtoriza o login
          req.session.user = {
            id: user.id,
            email: user.email,
          };
          //res.send(`Usuário Logado: <br> ID: ${req.session.user['id']} <br> Email: ${req.session.user['email']}`)
          //Vai ser redirecionado para home, com a sessão criada

          req.flash("success", "Login Efetuado com sucesso!");
          res.redirect("/");
        } else {
          req.flash("danger", "Senha Informada é inválida!");
          res.redirect("/login");
        }
      } else {
        // SE O USUÁRIO NÃO EXISTE
        req.flash("danger", "Usuário é inválido!");
        res.redirect("/login");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

//Rota de Logout
router.get("/logout", (req, res) => {
  req.session.user = undefined;
  res.redirect("/");
});

export default router;
