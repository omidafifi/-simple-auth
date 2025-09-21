
const express = require('express');
const { register, login, logout, profile } = require('../controllers/auth');
const { validateRegister, validateLogin } = require('../validation/auth');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.get('/logout', authMiddleware, logout);
router.get('/profile', authMiddleware, profile);

module.exports = router;
