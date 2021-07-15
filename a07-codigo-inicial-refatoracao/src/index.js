require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const app = express()

app.use(express.json())

const filtroLogin = require('./filtros/filtrologin')
const autenticacaoControlador = require('./controladores/autenticacao')

const hash = 'uV9R6dJBs7erwsBw8giLZyexOjw'



// endpoint para cadastro de usuario
app.post('/usuarios', );

app.post('/login', autenticacaoControlador.login);

app.use(filtroLogin)

// obter perfil do usuario logado pelo token
app.get('/perfil', );

// atualizar perfil do usuario logado
app.put('/perfil', );

app.listen(process.env.PORT);