const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const router = require('./routes');

const app = express();
const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

// DELETE THIS
app.get('/posts', function (req, res) {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => res.send(response.data))
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));