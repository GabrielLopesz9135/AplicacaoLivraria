const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./livraria.sqlite"
})
  
try {
  sequelize.authenticate();
  console.log("Bnaco de Dados Criado com Sucesso");
}catch(erro){
  console.log("Erro ao criar banco de dados", erro);
}

module.exports = sequelize;