const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post('/sign-in',  AuthController.signIn)
router.get('/login.html', AuthController.login)

module.exports = router
