const express = require('express');
const sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
const app = express();
const http = require("http");

app.use((req, res, next) => {
  const allowedOrigins = ['https://xavcz.github.io', 'http://localhost:3000', 'http://xav.cz'];
  
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello \\o/');
});

app.get('/email', (req, res, next) => {
  if (req.query.email && req.query.firstname) {
    sendgrid.send({
      to:       'xavier.cazalot@gmail.com',
      from:     'xavier.cazalot@gmail.com',
      subject:  'New lead from xav.cz',
      text:     'Firstname: '+ req.query.firstname +' / Email: '+ req.query.email,
    }, function(err, json) {
      if (err) { 
        console.error(err);
        res.send(false);
      }
      res.json(true);
    });
  } else {
    res.json(false);
  }
});

app.listen(process.env.PORT || 5000);

setInterval(() => { 
  http.get("http://xav-express.herokuapp.com");
  console.log('Xav Mailer Up & Running!');
}, 300000);