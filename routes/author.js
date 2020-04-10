const express = require('express')
const router = express.Router()

const AuthorController = require('../controllers/AuthorController')
const authMiddleware = require('../middleware/auth')

router.get('/', authMiddleware,  AuthorController.index)
router.post('/', authMiddleware, AuthorController.create)
router.get('/:id', authMiddleware, AuthorController.show)

module.exports = router
