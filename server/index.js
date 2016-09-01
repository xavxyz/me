const express = require('express');
const mailer = require('express-mailer');
const app = express();

mailer.extend(app, {
  from: 'no-reply@example.com',
  host: 'smtp.gmail.com', // hostname 
  secureConnection: true, // use SSL 
  port: 465, // port for secure SMTP 
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts 
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  }
});

app.set('view engine', 'jade');

app.get('/', (req, res, next) => {
  console.log(req.query);
  res.send('Hello \\o/');
});
app.get('/email', (req, res, next) => {
  const { email, firstname } = req.query;
  if (email && firstname) {
    app.mailer.send('email', {
      to: 'xavier.cazalot@gmail.com', 
      subject: 'New lead from xav.cz', 
      email,
      firstname,
    }, (err) => {
      if (err) {
        console.log(err);
        res.send('There was an error sending the email');
        return;
      }
      res.send('Email Sent');
    });
  } else {
    res.send('Nope.');
  }
});

app.listen(3000, () => {
  console.log('Xav Mailer Up & Running!');
});