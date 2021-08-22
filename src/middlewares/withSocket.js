/**
 *
 * @param {import("socket.io").Namespace} io
 * @param {Function} beforeCallback
 * @returns {import("express").Handler}
 */

const withSocket = (io) => (req, _, next) => {
  req.socketId = req.headers['socket-id'];

  if (req.socketId) {
    req.io = io;
  }

  next();
};

module.exports = withSocket;
