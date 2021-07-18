const aws = require('../services/aws')

const upload = async (req, res) => {
  const { imagem, nome } = req.body
  const buffer = Buffer.from(imagem, 'base64')
  
  try {
    awaitaws.sendImage(nome, buffer)
    returnres.status(200).json(nome)
  } catch (error) {
    return res.status().json(error.message)
  }
}

module.exports = { upload }
