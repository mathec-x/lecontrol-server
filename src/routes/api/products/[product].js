const { db } = require('@locontrol/models');
const withAuth = require('../../../middlewares/withAuth');

/**
 * @typedef {{products: string}} Params
 *
 * @typedef {{expiration: Date}} ReqPostBody
 * @typedef {{expiration: Date}} ReqPutBody
 */

module.exports.post = [
  withAuth,
  /**
   * @param {import('express').Request<Params, {}, ReqPostBody>} req
   * @param {import('express').Response} res
   *
   * @description - create new "expiration" time for product
   */
  async (req, res) => {
    try {
      const date = new Date(`${req.body.expiration} 00:00:000`);
      const response = await db.productValidation.create({
        data: {
          expiration: date,
          Product: {
            connect: {
              uuid: req.params.product,
            },
          },
        },
      });

      req.io.to(req.user.Company.name).emit('dispatch', { type: 'validations:create', payload: response });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }

    return res.sendStatus(400);
  },
];

module.exports.put = [
  withAuth,
  /**
   * @param {import('express').Request<Params, {}, ReqPutBody>} req
   * @param {import('express').Response} res
   *
   * @description - update a label from product
   */
  async (req, res) => {
    try {
      const response = await db.product.update({
        where: { uuid: req.params.product },
        data: { label: req.body.label },
      });

      req.io.to(req.user.Company.name).emit('dispatch', { type: 'products:update', payload: response });
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
 * @description - delete a product
 */
  async (req, res) => {
    try {
      req.io.to(req.user.Company.name).emit('dispatch', { type: 'products:will:delete', payload: { uuid: req.params.product, deleting: true } });

      const { count } = await db.productValidation.deleteMany({
        where: { Product: { uuid: req.params.product } },
      });
      const response = await db.product.delete({
        where: {
          uuid: req.params.product,
        },
      });

      req.io.to(req.user.Company.name).emit('dispatch', { type: 'products:delete', payload: { ...response, productValidation: { _count: count } } });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      req.io.to(req.user.Company.name).emit('dispatch', { type: 'products:will:delete', payload: { uuid: req.params.product, deleting: false } });
    }

    return res.sendStatus(400);
  },
];
