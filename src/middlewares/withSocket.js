/**
 *
 * @param {import("socket.io").Namespace} io
 * @param {Function} beforeCallback
 * @returns {import("express").Handler}
 */

const withSocket = (io, beforeCallback) => (req, res, next) => {
  req.socketId = req.headers['socket-id'];

  if (!req.socketId) {
    res.sendStatus(403);
  } else {
    req.io = io;
    next();
    beforeCallback();
  }
};

module.exports = withSocket;
