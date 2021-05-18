require('dotenv').config();
const express = require('express');
const axios = require('axios').default;
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const app = express();
app.use(express.static(`${__dirname}`));
app.use(express.json());

app.post('/api/v1/email', async (req, res) => {
  const { name, phone, email, ageGroup } = req.body;

  new Mailgun(formData)
    .client({ username: 'api', key: process.env.MAILGUN_API_KEY })
    .messages.create(process.env.MAILGUN_DOMAIN, {
      subject: 'Training Request',
      from: `Automated Training Request <${process.env.MAILGUN_SMTP_LOGIN}>`,
      to: process.env.EMAIL_RECIPIENT,
      html: `
        <h1>A New Training Inquiry Has Come In!</h1><br>
        <h4>Name: ${name}</h4>
        <h4>Phone Number: ${phone}</h4>
        <h4>Email: ${email}</h4>
        <h4>Age Group: ${ageGroup}</h4>
  
        Please reach out to them soon!`
    })
    .then(data => {
      console.log('EMAIL SENT');
      res.status(200).json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json(error);
    });
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  const port = server.address().port;
  console.log("App now running on port: ", port);
});