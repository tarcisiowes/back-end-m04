const aws = require('aws-sdk')

const spacesEndpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com')

const s3 = new aws.S3({

  endpoint: spacesEndpoint,
  accessKeyId: process.env.SPACES_KEY,
  secretAccessKey: process.env.SPACES_SECRET
})

const sendImage = async (nome, imagem) => {
  return await s3.putObject({
    Bucket: process.env.SPACES_BUCKET,
    key: nome,
    body: imagem,
    ACL: 'public-read'
  }).promise()
}

const deleteImage = async (nome) => {
    return await s3.deletObject({
    Bucket: process.env.SPACES_BUCKET,
    key: nome
  }).promise()
}

const urlCompleta = (nome) => {
  return `https://${process.env.SPACES_BUCKET}.nyc3.digitaloceanspaces.com/${nome}`
}

module.exports = { sendImage, deleteImage }
