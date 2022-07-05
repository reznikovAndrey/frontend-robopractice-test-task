/* eslint-disable */
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 8080;

app.get('/api/users', (req, res) => {
  res.send(
    require('./data.json'),
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
