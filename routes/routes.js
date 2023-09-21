const express = require("express");
const router = express.Router();
//////CONTROLLERS
const usuarioController = require("../controller/usuarioController");
const livroController = require("../controller/livroController");
////////////////Requisições HTTP Principal /////////////////////
router.get("/",(req, res) =>{
 return res.json({message: "Livraria"});
})
////////////////Requisições HTTP Usuario /////////////////////
//POST - CADASTRAR
router.post("/add_usuario",usuarioController.UsuarioCreate);
//GET - LISTAR
router.get("/usuarios/:id?", usuarioController.verificaJWT, usuarioController.UsuarioListar);
//PUT - UPDATE
router.put("/usuarios/:id", usuarioController.UsuarioUpdate);
// DELETE
router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

router.get("/login", usuarioController.UsuarioVerificaLogin)
module.exports = router;

////////////////Requisições HTTP Livros /////////////////////

router.post("/add_livro", livroController.livroCreate);
router.get("/livros", livroController.livroListar);
router.put("/livros/:id", livroController.livroUpdate);
router.delete("/livros/:id", livroController.livroDelete);