const bcrypt = require('bcrypt')
const knex = require('../conexao')
const nodemailer = require('../nodemailer')

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório")
    }

    if (!email) {
        return res.status(404).json("O campo email é obrigatório")
    }

    if (!senha) {
        return res.status(404).json("O campo senha é obrigatório")
    }

    if (!nome_loja) {
        return res.status(404).json("O campo nome_loja é obrigatório")
    }

    try {
        const quantidadeUsuarios = await knex('usuarios').where('email',email)

        if (quantidadeUsuarios > 0) {
            return res.status(400).json("O email já existe")
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const usuario = await knex('usuarios').insert({nome, email, senha:senhaCriptografada, nome_loja})

        if (usuario === 0) {
            return res.status(400).json("O usuário não foi cadastrado.")
        }

        const sendData = {
            from: 'Market Cubos <nao-responder@test.com>',
            to: email,
            subject: 'Welcome',
            html: `<b>Ola ${ nome } agora que ja esta cadastrado, estará sempre atualizado com nossas novidades</b>`,
        }

        nodemailer.sendMail(sendData)

        return res.status(200).json("O usuario foi cadastrado com sucesso!")
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


module.exports = {
    cadastrarUsuario,

}