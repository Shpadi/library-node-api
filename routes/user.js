const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/new.html', UserController.new)
router.post('/create', UserController.create)

module.exports = router
