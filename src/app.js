const express = require('express');
const cors = require('cors');
const path = require('path');
const { db } = require('@locontrol/models');

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
  .get('*', (req, res) => { res.sendFile(path.join(__dirname, '..', 'build', 'index.html')); })
  .use(express.urlencoded({ extended: true }))
  .use(express.json({ type: ['application/json', 'text/plain'] }))
  .use(withSocket(io, () => db.$disconnect()))
  .use('/', fileBased());

module.exports = httpServer;
