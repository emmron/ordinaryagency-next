const sgMail = require("@sendgrid/mail")
export default async function handler(req, res) {
  console.log(req.body)
  sgMail.setApiKey(process.env.SENDGRID_API_TOKEN)
  const body = req.body
  const senderAddress = "josh@ordinaryagency.com.au"
  const clientAddress = "hello@ordinaryagency.com.au"
  const msg = {
    to: [clientAddress],
    from: senderAddress,
    reply_to: body.from,
    subject: "New Form Submission",
    html: `<p>Name:${body.name}</p><p>Email:${body.from}</p>` || "[No message]",
  }
  try {
    await sgMail.send(msg).then(res => console.log(res))
    res.status(200).send("Message sent.")
  } catch (error) {
    console.log("ERROR:", error)
    res.status(400).send('Message not sent.')
  }
}