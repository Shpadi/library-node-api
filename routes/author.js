const express = require('express')
const router = express.Router()

const AuthorController = require('../controllers/AuthorController')
const authMiddleware = require('../middleware/auth')

router.get('/', authMiddleware,  AuthorController.index)
router.get('/new.html', AuthorController.new)
router.post('/', AuthorController.create)
router.get('/:id', AuthorController.show)

module.exports = router
