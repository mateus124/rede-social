const express = require("express");
const { createUser } = require("../controllers/createUser");

const port = 8080;
const app = express();
app.use(express.json());

// definindo rotas
app.get("/ping", async (req, res) => {
  res.send("<h1>Pong!</h1>").status(200);
});

app.post("/user", async (req, res) => {
  try {
    req.send(createUser(req.body)).status(201);
  } catch (error) {
    res.send(error).status(500);
  }
});

app.listen(port, () => {
  console.log("Rodando com express na porta: ", port);
});
