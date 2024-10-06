import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nilinduwara2001.08.02@gmail.com',
    pass: 'scahtkcassfoadxh'
  }
});

// Route to send an email
router.post('/send', (req, res) => {
  const { name, email, message, image } = req.body;

  const mailOptions = {
    from: 'nilinduwara2001.08.02@gmail.com',
    to: 'kasunvihaga98@gmail.com',
    subject: `Support Request from Shanka`,
    text: message,
    html: `
    <p>Name : shanka</p>
    <p>Email : shanka@gmail.com</p>
    <p>Message: hello world</p><br/><br/>
    <p>Sent by: Shanka</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).send('Email sent successfully');
    }
  });
});

export default router;
