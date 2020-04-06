const express = require('express')
const router = express.Router()

const BookController = require('../controllers/BookController')

router.get('/',  BookController.index)
router.get('/new.html',  BookController.new)
router.post('/',  BookController.create)
router.get('/:id/edit.html',  BookController.edit)
router.put('/:id',  BookController.update)
router.get('/:id',  BookController.show)
router.delete('/:id', BookController.delete)


module.exports = router
