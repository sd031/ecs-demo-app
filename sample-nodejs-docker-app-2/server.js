'use strict';

const request = require("request");
const express = require('express');

// Constants
const PORT = process.env.PORT || 8082;
const HOST = process.env.HOST || 'localhost';
const App2 = process.env.APP_2;

// App
const app = express();
app.get('/', (req, res) => {
  return res.send(`It's App 2`);
});

app.listen(PORT);
console.log(`Running on port :${PORT}`);