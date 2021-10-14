const express = require('express');
const db = require('../db/index.js');
const { getAll, addToVisit, deleteToVisit, addVisited } = require('../db/controllers/user');
// const cookieParser = require('cookie-parser');
// const csrf = require('csurf');

// const admin = require("firebase-admin");
// const serviceAccount = require("/Users/huongnguyen/Downloads/national-park-passport-731f4-firebase-adminsdk-n5kvp-55202bc597.json");
// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
// });

// const csrfMiddleware = csrf({ cookie: true });

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
// app.use(cookieParser());
// app.use(csrfMiddleware);

// app.all('*', (req, res, next) => {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   next();
// })

app.get('/signin', (req, res) => {
  res.redirect('/');
});

app.get('/account', (req, res) => {
  res.redirect('/');
});

app.get('/account/*', (req, res) => {
  res.redirect('/');
});

app.get('/stamp', (req, res) => {
  const email = req.query.email;
  getAll(email, (err, docs) => {
    if (err) {
      res.status(500).send(`Error from getting data from db ${err}`);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.put('/stamp/visited/add', (req, res) => {
  addVisited(req.body, (err, docs) => {
    if (err) {
      res.status(500).send(`Error from db ${err}`);
    } else {
      res.status(204).send(docs);
    }
  });
});

app.put('/stamp/tovisit/add', (req, res) => {
  addToVisit(req.body, (err, docs) => {
    if (err) {
      res.status(500).send(`Error from db ${err}`);
    } else {
      res.status(204).send(docs);
    }
  });
});

app.put('/stamp/tovisit/remove', (req, res) => {
  deleteToVisit(req.body, (err, docs) => {
    if (err) {
      res.status(500).send(`Error from posting to db ${err}`);
    } else {
      res.status(204).send(docs);
    }
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Successfully running on port ${port}`);
});
