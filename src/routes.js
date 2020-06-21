const express = require('express');
const routes = express.Router();

const PessoaController = require('../src/controllers/PessoaController');

routes.get("/pessoas", PessoaController.index);
routes.post("/pessoas", PessoaController.store);
routes.delete("/pessoas/:id", PessoaController.destroy);

module.exports =  routes;