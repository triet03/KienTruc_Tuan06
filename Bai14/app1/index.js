const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  axios.get('http://app2:3001')
    .then(response => {
      res.send(`Response from app2: ${response.data}`);
    })
    .catch(error => {
      res.send('Error connecting to app2');
    });
});

app.listen(3000, () => {
  console.log('App1 running on port 3000');
});
