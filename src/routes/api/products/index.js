const { db } = require('@locontrol/models');
const withAuth = require('../../../middlewares/withAuth');

module.exports.get = [
  withAuth,
  /**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 *
 * @description - return list of { products, validations } of company
 */async (req, res) => {
    try {
      let validations = [];
      const products = (await db.product.findMany({
        where: {
          Company: {
            id: req.user.Company.id,
          },
        },
        select: {
          id: true,
          uuid: true,
          label: true,
          ProductValidation: {
            select: {
              productId: true,
              uuid: true,
              expiration: true,
            },
          },
        },
      })).map(({ ProductValidation, ...product }) => {
        validations = validations.concat(ProductValidation);

        return product;
      });

      console.log({ products });

      req.io.to(req.socketId).emit('dispatch', { type: 'products:mount', payload: products.sort((a, b) => a.label.localeCompare(b.label)) });
      req.io.to(req.socketId).emit('dispatch', { type: 'validations:mount', payload: validations });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }

    return res.sendStatus(400);
  }];

module.exports.post = [
  withAuth,
  /**
 * @param {import('express').Request<{}, {}, {label: string}>} req
 * @param {import('express').Response} res
 *
 * @description - create and return new product by company
 */async (req, res) => {
    try {
      const product = await db.product.create({
        data: {
          label: req.body.label,
          Company: {
            connect: {
              id: req.user.Company.id,
            },
          },
        },
      });
      req.io.to(req.user.Company.name).emit('dispatch', { type: 'products:create', payload: product });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }

    return res.sendStatus(400);
  },
];
