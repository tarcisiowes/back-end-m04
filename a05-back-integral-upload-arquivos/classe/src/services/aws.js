const aws = require('aws-sdk')

const spacesEndpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com')
const s3 = new aws.s3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.SPACES_KEY,
  secretAccessKey: process.env.SPACES_SECRET
})