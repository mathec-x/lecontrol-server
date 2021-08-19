const jwt = require('jsonwebtoken');
/**
 * @param {import('express').Request } req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const withAuth = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ auth: false, message: 'Failed to authenticate token.' });

    req.user = { ...decoded, token };
    return next();
  });
};

module.exports = withAuth;
