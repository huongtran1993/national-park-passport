const express = require('express');
const db = require('./db');
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

app.get('/*', (req, res) => {
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Successfully running on port ${port}`);
});
