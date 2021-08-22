const jwt = require('jsonwebtoken');

/** @param {import('socket.io').Socket} socket */
exports.handleAuthentication = (socket, next) => {
  const { token } = socket.handshake.auth;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (!err) {
      // eslint-disable-next-line no-param-reassign
        socket.user = { ...data, token };
      }
    });
  }
  next();
};

/** @param {import('socket.io').Socket} socket */
exports.handleConnection = (socket) => {
  socket.join(socket.id);

  if (socket.user) {
    socket.join(socket.user.Company.name);
    socket.emit('dispatch', { type: 'user:login', payload: socket.user });
  }
};
