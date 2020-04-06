const User = require('../models/User')
const { getPage } = require('./mixins/getPage')
const bcrypt = require("bcrypt");

exports.create = async (req, res) => {
    try {
        const user = new User(req.body)
        user.password = await bcrypt.hash(user.password, 10);
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(403).send(e.message)
    }
}

exports.new = (req, res) => {
    getPage(res, '/user/create.html')
}
