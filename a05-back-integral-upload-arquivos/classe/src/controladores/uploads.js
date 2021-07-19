const aws = require('../services/aws')

const upload = async (req, res) => {
  const { imagem, nome } = req.body

  const buffer = Buffer.from(imagem, 'base64')
  
  try {
    await aws.sendImage(nome, buffer)

    const response = {
      imagem: nome,
      urlImagem: aws.urlCompleta(nome)
    }

    return res.status(200).json(response)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = { upload }
