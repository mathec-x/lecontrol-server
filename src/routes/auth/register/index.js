const bcrypt = require('bcrypt');
const { db } = require('@locontrol/models');

function testPassword(self) {
  return /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/g.test(self);
}

function testEmail(self) {
  return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g.test(self);
}

function testName(self) {
  return /^[a-z\u00C0-\u017F]{3,}([-']?[a-z\u00C0-\u017F]+)*( [a-z\u00C0-\u017F]{2,}([-']?[a-z\u00C0-\u017F]+)*)+$/gi.test(self);
}

function Capitalize(self) {
  return self.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

/** @typedef {{mail: string,password: string,name: string,company: string}} ReqBody */

/**
 * @param {import('express').Request<_,_, ReqBody >} req
 * @param {import('express').Response} res
 */
module.exports.post = async (req, res) => {
  try {
    const rounds = 10;
    const {
      name, mail, password, company,
    } = req.body;

    if (testName(name) && testPassword(password) && testEmail(mail)) {
      await db.user.create({
        data: {
          name: Capitalize(name),
          mail: mail.toLowerCase(),
          salt: await bcrypt.hash(password, rounds),
          rounds,
          Company: {
            connectOrCreate: {
              where: { name: Capitalize(company) },
              create: { name: Capitalize(company) },
            },
          },
          logs: { create: { body: { type: 'created' } } },
        },
      });
      return res.sendStatus(201);
    }
  } catch (error) {
    console.log(error);
  }

  return res.sendStatus(400);
};
