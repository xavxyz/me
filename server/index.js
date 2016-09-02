const express = require('express');
const sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
const app = express();

app.set('view engine', 'jade');

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
        res.send('error');
      }
      res.json(json);
    });
  } else {
    res.json({ok: false});
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Xav Mailer Up & Running!');
});