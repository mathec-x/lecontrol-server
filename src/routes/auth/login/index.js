const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db } = require('@locontrol/models');

/** @typedef {{mail: string, password: string}} LoginRequestBody */

/**
 * @function post
 * @param {import('express').Request<_,_,LoginRequestBody>} req
 * @param {import('express').Response} res
 */
module.exports.post = async (req, res) => {
  try {
    const { salt, ...user } = await db.user.findFirst({
      select: {
        id: true,
        salt: true,
        uuid: true,
        mail: true,
        name: true,
        Company: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      where: { mail: req.body.mail },
    });

    if (user && await bcrypt.compare(req.body.password, salt)) {
      const token = jwt.sign(user, process.env.JWT_SECRET);

      await db.user.update({
        where: { id: user.id },
        data: {
          tokens: { create: { token } },
          logs: { create: { body: { type: 'login' } } },
        },
      });

      req.io.to(req.socketId).emit('refresh', { token });
      return res.json({ token });
    }
  } catch (error) {
    console.log(error);
  }

  return res.sendStatus(401);
};
