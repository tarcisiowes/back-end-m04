const express = require('express');
const usuarios = require('./controladores/usuarios');

const rotas = express();

// cadastro de usuario
rotas.post('/register', usuarios.cadastrarUsuario)
rotas.post('/news', usuarios.enviarNewsletter)


module.exports = rotas;