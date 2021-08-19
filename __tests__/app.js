const express = require('express');
const { post: login } = require('../src/routes/auth/login');
const { get: laborers, post: create } = require('../src/routes/api/laborers');

const app = express()
  .use(express.urlencoded({ extended: true }))
  .use(express.json({ type: ['application/json', 'text/plain'] }));

app.post('/auth/login', login);
app.post('/api/laborers', create);
app.get('/api/laborers', laborers);

module.exports = app;
