const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

//ENDPOINT de usuários
app.get("/api/usuarios", (req, res) => {
  const usuarios = [
    { id: 1, nome: "user 1" },
    { id: 2, nome: "user 2" },
    { id: 3, nome: "user 3" },
    { id: 4, nome: "user 4" },
  ];
  res.json(usuarios);
});

app.listen(port, () => {
  console.log("Servidor executando com sucesso!");
});
