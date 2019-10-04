const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/data', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?currency=BTC&start=2013-09-01&end=2013-09-05')
    .then((response) => {
      res.send(response.data.bpi);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

