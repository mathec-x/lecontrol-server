const { db } = require('@locontrol/models');
const withAuth = require('../../../middlewares/withAuth');

/** @typedef {{name: string}} PutBody */

module.exports.put = [
  withAuth,
  /**
 * @param {withAuth.Authorized & import('express').Request<{},{}, PutBody>} req
 * @param {import('express').Response} res
 *
 * @description - update name of company
 */async (req, res) => {
    req.io.send('');

    const response = await db.company.update({
      where: {
        id: req.user.companyId,
      },
      data: {
        name: req.body.name,
      },
    });

    res.json(response);
  }];
