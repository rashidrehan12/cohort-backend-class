const express = require('express');

const app = express();// server create ho jata h

app.get('/home', (req, res) => {
  res.send('welcome to the home page!');
});

app.get('/about', (req, res) => {
  res.send('welcome to the about page!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});