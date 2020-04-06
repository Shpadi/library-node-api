const Author = require('../models/Author')
const { getPage } = require('./mixins/getPage')

exports.index = async (_, res) => {
    try {
       const authors = await Author.find();
       res.status(200).send(authors)
    } catch(e) {
        res.status(401).send('Error')
    }
}

exports.show = async (req, res) => {
    const { id } = req.params
    try {
        const author = await Author.findById(id);
        res.status(200).send(author)
    } catch(e) {
        res.status(401).send('Error')
    }
}

exports.create = async (req, res) => {
    const { firstName, lastName, ...info } = req.body
    const payload = {
        name: {
            firstName,
            lastName
        },
        ...info
    }
    try {
        const author = new Author(payload)
        await author.save()
        res.status(201).send(author)
    } catch (e) {
        res.status(403).send(e.message)
    }
}

exports.new = (req, res) => {
    getPage(res, '/author/create.html')
}
