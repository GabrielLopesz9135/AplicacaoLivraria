const Livro = require("../model/livroModel");
module.exports = class livroController{
 //CREATE
 static async livroCreate(req,res){
 let titulo = req.body.titulo;
 let autor = req.body.autor;
 let preco = req.body.preco;
 let link = req.body.link;

 const livro = {
 titulo: titulo,
 autor: autor,
 preco: preco,
 link: link
 }
 await Livro.create(livro);
 res.json({message: "Produto cadastrado com sucesso!"});
 }
//READ - LISTAR
 static async livroListar(req,res){
 const id_livro = req.params.id;
 if(id_livro){
 const livro = await Produto.findOne({where: {id_livro: id_livro}});
 res.json(livro);
 }else{
 const livro = await Livro.findAll({raw:true});
 res.json(livro);
 }
}
//UPDATE
 static async livroUpdate(req, res){
 const id_livro = req.params.id;
 let titulo = req.body.titulo;
 let autor = req.body.autor;
 let preco = req.body.preco;
 let link = req.body.link;
 const livro = {
 titulo: titulo,
 autor: autor,
 preco: preco,
 link: link
 };
 await Livro.update(livro,{where: {id_livro:id_livro}});
 res.json({message: "Cadastro atualizado com sucesso! Foram atualizados as sequintes informações: ", dados: livro});
 }
//Função ProdutoDelete responsável pela exclusão do usuário.
 static async livroDelete(req,res){
 const id_livro = req.params.id;
 await Produto.destroy({where:{id_livro: id_livro}});
 res.json({message: "Produto excluído com sucesso!"});
 }
}