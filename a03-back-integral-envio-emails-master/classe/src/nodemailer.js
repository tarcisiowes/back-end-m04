const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {

  }
})

module.exports = transporter