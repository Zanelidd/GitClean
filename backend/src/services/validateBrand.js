const joi = require("joi");

const validateBrand = (req, res, next) => {
  const { brand } = req.body;
  const schema = joi.object({
    brand: joi.string().max(254, "utf8").required(),
  });
  const { value, error } = schema.validate({ brand });
  if (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  } else {
    req.body = value;
    next();
  }
};

module.exports = validateBrand;
