const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const authMiddleware = require('../middleware/auth')

router.post('/login',  AuthController.signIn)
router.get('/me', authMiddleware, AuthController.me)

module.exports = router
