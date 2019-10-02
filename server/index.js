const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const app = express();

const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/posts', function (req, res) {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => res.send(response.data))
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));