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

exports.show = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id);
        res.status(200).send(user)
    } catch(e) {
        res.status(401).send('Error')
    }
}
