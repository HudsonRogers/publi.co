const express = require("express");
const router = express.Router();

router.get("/publicacoes", async (req, res) => {
    // Lógica para listar publicações
    res.send("Listar publicações - TESTE");
});

module.exports = router;
