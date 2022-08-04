const { check, validationResult  } = require('express-validator');

const handleValidationError = (res, req, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ message: 'Validation error', error: errors.array() });
  next();
};

createValidator = [
  check ('text').notEmpty().isNumeric().isLength({min: 1}),
  check('isCheck').notEmpty().isString(),
  handleValidationError
];


module.exports = createValidator