const yup = require('./yup')

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  senha: yup.string().required()
})

const cadastroSchema = yup.object().shape({
  email: yup.string().email().required(),
  senha: yup.string().required(),
  nome: yup.string().required(),
  nome_loja: yup.string().required()
})

const atualizarSchema = yup.object().shape({
  email: yup.string().email(),
  senha: yup.string(),
  nome: yup.string(),
  nome_loja: yup.string()
})


module.exports = { loginSchema, cadastroSchema, atualizarSchema }


