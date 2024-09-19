import express from "express";
const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", (req, res) => {
  const clientes = [
    {
      nome: "Ana Silve",
      cpf: "123.456.789-00",
      endereco:
        "Rua das Flores, 123, - Bairro Jardim Primavera - Felicidade - SP",
    },
    {
      nome: "Ana Silve",
      cpf: "123.456.789-00",
      endereco:
        "Rua das Flores, 123, - Bairro Jardim Primavera - Felicidade - SP",
    },
    {
      nome: "Ana Silve",
      cpf: "123.456.789-00",
      endereco:
        "Rua das Flores, 123, - Bairro Jardim Primavera - Felicidade - SP",
    },
    {
      nome: "Ana Silve",
      cpf: "123.456.789-00",
      endereco:
        "Rua das Flores, 123, - Bairro Jardim Primavera - Felicidade - SP",
    },
  ];
  res.render("clientes", {
    clientes: clientes
  })
});
export default router;
