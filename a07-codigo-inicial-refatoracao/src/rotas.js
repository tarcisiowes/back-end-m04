const express = require('express')
const rotas = express()

const filtroLogin = require('./filtros/filtrologin')
const autenticacaoControlador = require('./controladores/autenticacao')
const usuarioControlador = require('./controladores/usuarios')

rotas.post('/usuarios', usuarioControlador.cadastrarUsuario);
rotas.post('/login', autenticacaoControlador.login);

rotas.use(filtroLogin)
rotas.get('/perfil', usuarioControlador.obterPerfil);
rotas.put('/perfil', usuarioControlador.atualizarPefil)

module.exports = rotas
