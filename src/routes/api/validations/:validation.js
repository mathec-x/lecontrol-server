const { db } = require('@locontrol/models');
const withAuth = require('../../../middlewares/withAuth');

/**
 * @typedef {{validations: string}} Params
 *
 * @typedef {{expiration: Date}} ReqPostBody
 */

module.exports.put = [
  withAuth,
  /**
   * @param {withAuth.Authorized & import('express').Request<Params, {}, ReqPostBody>} req
   * @param {import('express').Response} res
   *
   * @description - update label title of product
   */
  async (req, res) => {
    try {
      const response = await db.productValidation.update({
        where: {
          uuid: req.params.validation,
        },
        data: {
          expiration: req.body.expiration,
        },
      });

      req.io.to(req.user.Company.name).emit('dispatch', { type: 'validations:update', payload: response });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }

    return res.sendStatus(400);
  },
];

module.exports.del = [
  withAuth,
  /**
   * @param {withAuth.Authorized & import('express').Request<Params>} req
   * @param {import('express').Response} res
   *
   * @description - delete a product expiration
   */
  async (req, res) => {
    try {
      req.io.to(req.user.Company.name).emit('dispatch', { type: 'validations:will:delete', payload: { uuid: req.params.validation, delete: true } });

      const response = await db.productValidation.delete({
        where: {
          uuid: req.params.validation,
        },
      });

      req.io.to(req.user.Company.name).emit('dispatch', { type: 'validations:delete', payload: response });
      return res.sendStatus(200);
    } catch (error) {
      req.io.to(req.user.Company.name).emit('dispatch', { type: 'validations:will:delete', payload: { uuid: req.params.validation, delete: false } });
      console.log(error);
    }

    return res.sendStatus(400);
  },
];
