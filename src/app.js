/// <reference path="./typings/global.d.ts" />

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const httpServer = require('http').createServer(app);

const { Server } = require('socket.io');
const ioparser = require('socket.io-msgpack-parser');
const { fileBased } = require('express-file-based');
const withSocket = require('./middlewares/withSocket');
const { handleConnection, handleAuthentication } = require('./middlewares/useHandler');

const io = new Server(httpServer, {
  parser: ioparser,
  cors: {
    origin: '*',
  },
});

io.use(handleAuthentication).on('connection', handleConnection);

// API'S
app
  .use(cors())
  .use(express.static(path.join(__dirname, '..', 'build')))
  .use(express.urlencoded({ extended: true }))
  .use(express.json({ type: ['application/json', 'text/plain'] }))
  .use(withSocket(io))
  .use('/api', fileBased({ directory: 'routes/api', base: '/api' }))
  .use('/auth', fileBased({ directory: 'routes/auth', base: '/auth' }))
  // or just because inside routes
  // .use('/', fileBased())
  .get('*', (_, res) => { res.sendFile(path.join(__dirname, '..', 'build', 'index.html')); });

module.exports = httpServer;
