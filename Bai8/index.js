const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
  host: 'mysql',        // 👈 Phải trùng với tên service bên docker-compose
  user: 'user',
  password: 'password',
  database: 'testdb'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  res.send('Node.js connected to MySQL 🎉');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
