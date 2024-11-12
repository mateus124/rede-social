const express = require("express");
const { createUser } = require("../controllers/userControl");

const router = express.Router();

// definindo rotas
router.get("/ping", async (req, res) => {
  res.send("<h1>Pong!</h1>").status(200);
});

router.post("/user", async (req, res) => {
  try {
    const result = await createUser(req.body);
    res.send(result).status(201);
  } catch (error) {
    res.send(error).status(500);
  }
});

module.exports = router;
