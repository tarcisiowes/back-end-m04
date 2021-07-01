const express = require('express');
const usuarios = require('./controladores/usuarios');

const rotas = express();

// cadastro de usuario
rotas.post('/usuarios', usuarios.cadastrarUsuario);

module.exports = rotas;