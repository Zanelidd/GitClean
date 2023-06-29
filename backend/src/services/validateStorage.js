const joi = require("joi");

const validateStorage = (req, res, next) => {
  const { storage } = req.body;
  const schema = joi.object({
    storage: joi.string().max(254, "utf8").required(),
  });
  const { value, error } = schema.validate({ storage });
  if (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  } else {
    req.body = value;
    next();
  }
};

module.exports = validateStorage;
