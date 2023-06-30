const joi = require("joi");

const validateProduct = (req, res, next) => {
  const { model, ramIds, storageIds } = req.body;
  const osId = Number.parseInt(req.body.osId, 10);
  const brandId = Number.parseInt(req.body.brandId, 10);
  const screenSize = Number.parseFloat(req.body.screenSize, 10);
  const networkId = Number.parseInt(req.body.networkId, 10);
  const schema = joi.object({
    osId: joi.number().positive().integer().required(),
    brandId: joi.number().positive().integer().required(),
    model: joi.string().max(254, "utf8").required(),
    screenSize: joi.number().positive().precision(1).required(),
    networkId: joi.number().positive().integer().required(),
    ramIds: joi.array().required().items(joi.number().positive().integer()),
    storageIds: joi.array().required().items(joi.number().positive().integer()),
  });
  const { value, error } = schema.validate({
    osId,
    brandId,
    model,
    screenSize,
    networkId,
    ramIds,
    storageIds,
  });
  if (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  } else {
    req.body = value;
    next();
  }
};

module.exports = validateProduct;
