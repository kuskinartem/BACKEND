const { check, validationResult } = require('express-validator');

const handleValidationError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ message: 'Validation error', error: errors.array() });
    next();
  };

const creatValidator = [
    check('text').notEmpty().isLength({ min: 1 }),
    handleValidationError,
  ];
  const idValidator = [
    check('_id').notEmpty().isLength({ min: 1 }).isString(),
    handleValidationError,
  ];

  const changeValidator = [
    check('_id').notEmpty().isLength({ min: 1 }).isString(),
    check('text').notEmpty().isLength({ min: 1 }),
    handleValidationError,
  ];

  const checkBox = [
    check('_id').notEmpty().isLength({ min: 1 }).isString(),
    check('isCheck').notEmpty().isBoolean(),
    handleValidationError,
  ];

  module.exports = {
    creatValidator,
    idValidator,
    changeValidator,
    checkBox
  }