const Book = require('../models/Book')
const { getPage } = require('./mixins/getPage')

exports.index = async (_, res) => {
    try {
        const books = await Book.find()
        res.status(200).send(books)
    } catch (e) {
        res.status(500).send('Error')
    }
}

exports.show = async (req, res) => {
    const { id } = req.params
    try {
        const books = await Book.findById(id)
        res.status(200).send(books)
    } catch (e) {
        res.status(500).send('Error')
    }
}

exports.create = async (req, res) => {
    try {
        const book = new Book(req.body)
        await book.save()
        res.status(200).send(book)
    } catch (e) {
        res.status(403).send(e.message)
    }
}

exports.new = (_, res) => {
    getPage(res, '/book/create.html')
}

exports.edit = (_, res) => {
    getPage(res, '/book/update.html')
}

exports.update = async (req, res) => {
    const { id, ...info } = req.body;
    try {
        const result = await Book.findByIdAndUpdate(id, info)
        res.status(200).send(result)
    } catch(e) {
        res.status(403).send(e.message)
    }
}

exports.delete = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.body)
        res.status(200).send('delete success')
    } catch(e) {
        res.status(403).send(e.message)
    }
}
