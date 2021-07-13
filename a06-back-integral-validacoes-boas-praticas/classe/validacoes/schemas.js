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

const schemaCadastroProduto = yup.object().shape({

  nome: yup.string().required(),
  estoque: yup.number().required(),
  preco: yup.number().required(),
  descricao: yup.string().required()
})

const schemaAtualizarProduto = yup.object().shape({

  nome: yup.string(),
  estoque: yup.number(),
  preco: yup.number(),
  categoria: yup.string(),
  descricao: yup.string(),
  imagem: yup.string()
})

module.exports = {
  schemaCadastroUsuario,
  schemaAtualizarUsuario,
  schemaCadastroProduto
}

