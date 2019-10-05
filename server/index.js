const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes');

const app = express();
const PORT = process.env.port || 8080;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist'));
});
// app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/api', router);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));