// اعتبارسنجی فرم‌ها
const { body, validationResult } = require('express-validator');

exports.validateRegister = [
  body('firstName').notEmpty().withMessage('نام الزامی است'),
  body('lastName').notEmpty().withMessage('نام خانوادگی الزامی است'),
  body('email').isEmail().withMessage('ایمیل معتبر وارد کنید'),
  body('password').isLength({ min: 6 }).withMessage('رمز حداقل 6 کاراکتر باشد'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateLogin = [
  body('email').isEmail().withMessage('ایمیل معتبر وارد کنید'),
  body('password').notEmpty().withMessage('رمز عبور الزامی است'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];
