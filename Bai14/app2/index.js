const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App2!');
});

app.listen(3001, () => {
  console.log('App2 running on port 3001');
});
