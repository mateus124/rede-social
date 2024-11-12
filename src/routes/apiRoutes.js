const express = require("express");

const port = 8080;
const app = express();
app.use(express.json());

// definindo rotas
app.get("/ping", async (req, res) => {
  res.send("<h1>Pong!</h1>").status(200);
});

app.listen(port, () => {
  console.log("Rodando com express na porta: ", port);
});
