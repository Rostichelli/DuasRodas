var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarConhecimento", function (req, res) {
    usuarioController.cadastrarConhecimento(req, res);
})


router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/autenticartentativas", function (req, res) {
    usuarioController.tentativa(req, res);
});

router.post("/cadastrarSonhos", function (req, res) {
    usuarioController.cadastrarSonhos(req, res);
});

module.exports = router;