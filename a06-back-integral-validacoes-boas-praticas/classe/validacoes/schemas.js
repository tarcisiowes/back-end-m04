const yup = require('./configuracoes')

const schemaCadastroUsuario = yup.object().shape({

  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().min(8).required(),
  nome_loja: yup.string().required()
})

const schemaAtualizarUsuario = yup.object().shape({

  nome: yup.string(),
  email: yup.string().email(),
  senha: yup.string().min(8),
  nome_loja: yup.string()
})

module.exports = {
  schemaCadastroUsuario,
  schemaAtualizarUsuario
}