type Message = {
  from?: string | undefined
  to?: string
  cc?: string
  subject?: string
  text?: string
  html?: string
}

const sendgrid = require("@sendgrid/mail")
//Your API Key from Sendgrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const message: Message = {
  //Your authorized email from SendGrid
  from: process.env.SENDGRID_AUTHORIZED_EMAIL,
  to: process.env.CONTACT_FORM_EMAIL,
  subject: process.env.CONTACT_FORM_SUBJECT,
}

const contactHandler = (req: any, res: any) => {
  try {
    if (req.method !== "POST") {
      res.json({ message: "Error" })
    }

    if (req.body) {
      message.cc = req.body.email
      const text: string = `${req.body.message} --- ${req.body.name} (${req.body.email})`
      message.text = text
      message.html = text
    }

    return sendgrid.send(message).then(
      () => {
        res.status(200).json({
          message: "Message successfully sent!",
        })
      },
      (error: any) => {
        console.error(error)
        if (error.response) {
          return res.status(500).json({
            error: error.response,
          })
        }
      }
    )
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was an error", error: err })
  }
}

module.exports = contactHandler
