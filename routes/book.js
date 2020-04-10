const express = require('express')
const router = express.Router()

const BookController = require('../controllers/BookController')
const authMiddleware = require('../middleware/auth')

router.get('/', authMiddleware,  BookController.index)
router.post('/', authMiddleware,  BookController.create)
router.put('/:id', authMiddleware,  BookController.update)
router.get('/:id', authMiddleware,  BookController.show)
router.delete('/:id', authMiddleware, BookController.delete)


module.exports = router
