const jwt = require('jsonwebtoken');
const { db } = require('@locontrol/models');
const withAuth = require('../../../middlewares/withAuth');

module.exports.get = [
  withAuth,
  /**
 * @param {withAuth.Authorized & import('express').Request} req
 * @param {import('express').Response} res
 */async (req, res) => {
    try {
      const { User: user, id } = await db.token.findFirst({
        select: { User: { select: { uuid: true, companyId: true } }, id: true },
        where: { token: req.user.token },
      });

      if (!user) throw new Error();

      const newToken = jwt.sign({
        uuid: user.uuid,
        companyId: user.companyId,
      }, process.env.JWT_SECRET);

      await db.token.update({
        where: { id },
        data: { token: newToken },
      });

      req.io.to(req.socketId).emit('refresh', { token: newToken });
      return res.json({ token: newToken });
    } catch (error) {
      console.log(error);
    }

    return res.sendStatus(401);
  }];
