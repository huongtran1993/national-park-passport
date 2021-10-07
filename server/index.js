const express = require('express');

const app = express();
module.exports.app = app;

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server is running');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Successfully running on port ${port}`);
});


