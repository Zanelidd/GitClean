const joi = require("joi");

const validateOs = (req, res, next) => {
  const { os } = req.body;
  const schema = joi.object({
    os: joi.string().max(254, "utf8").required(),
  });
  const { value, error } = schema.validate({ os });
  if (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  } else {
    req.body = value;
    next();
  }
};

module.exports = validateOs;
