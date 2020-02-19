var dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
const proxy = require('http-proxy-middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
  res.send({ express: ' Ack :) ' });
});

app.get('/', function(req, res) {
  console.log(__dirname);

  res.sendFile(path.join(__dirname, 'build/', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use('/static', express.static('./build/static/'));

const url =
  process.env.ENV === 'local'
    ? 'http://localhostTHISISWRONG!!!!!:8091'
    : 'http://familie-ef-soknad-api';

console.log(process.env.NODE_ENV, process.env.ENV, ' ', url);

app.use(
  '/api',
  proxy('/api', {
    changeOrigin: true,
    logLevel: 'info',
    target: `${
      process.env.NODE_ENV === 'local'
        ? 'http://localhost:8091'
        : 'http://familie-ef-soknad-api'
    }`,
    secure: true,
  })
);
