require('dotenv').config();
const express = require('express');
const axios = require('axios').default;

const app = express();
app.use(express.static(`${__dirname}`));
app.use(express.json());

app.post('/api/v1/email', async (req, res) => {
  const { name, phone, email, ageRange } = req.body;
  const emailResponse = await axios.post(
    `${process.env.TRUSTIFI_URL}/api/i/v1/email`, {
        "recipients": [
          {
            "email": process.env.EMAIL_RECIPIENT
          }
        ],
        "title": "Training Request",
        "html": `
            <h1>A New Training Inquiry Has Come In!</h1><br><br>
            <h4>Name: ${name}</h4><br>
            <h4>Phone Number: ${phone}</h4><br>
            <h4>Email: ${email}</h4><br>
            <h4>Age Group: ${ageRange}</h4><br>

            Please reach out to them soon!`
    }, {
      headers: {
        'x-trustifi-key': process.env.TRUSTIFI_KEY,
        'x-trustifi-secret': process.env.TRUSTIFI_SECRET
      }
    }
  ).catch(error => {
    console.error(error);
    res.status(500).json(error);
  });

  res.status(200).json(emailResponse.data);
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  const port = server.address().port;
  console.log("App now running on port: ", port);
});