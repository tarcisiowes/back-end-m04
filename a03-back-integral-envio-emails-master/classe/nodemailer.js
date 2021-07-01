const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "postmaster@sandboxe032e7c1cb8547b7b113c8ba87bebc7e.mailgun.org",
    pass: "4d418b88849bced076d489d7e3ab8bed-aff8aa95-0610139e"
  }
})

module.exports = transporter