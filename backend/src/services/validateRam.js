const joi = require("joi");

const validateRam = (req, res, next) => {
  const { ram } = req.body;
  const schema = joi.object({
    ram: joi.string().max(254, "utf8").required(),
  });
  const { value, error } = schema.validate({ ram });
  if (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  } else {
    req.body = value;
    next();
  }
};

module.exports = validateRam;
