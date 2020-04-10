const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require("bcrypt");

const { getUserFields } = require('./mixins/getUserFields');

exports.signIn = async (req, res) => {
    let { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) throw new Error('Incorrect Email or Password')
        const compare = await bcrypt.compare(password, user.password)
        if (!compare) throw new Error('Incorrect Email or Password')
        const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, { expiresIn: '1 hour', algorithm: 'HS256' });
        res.send({ token })
    } catch(e) {
        res.status(402).send('Error with  login')
    }
}

exports.me = async (req, res) => {
    const { id } = req.user
    try {
        const user = await User.findById(id);
        const formatUser = getUserFields(user)
        res.status(200).send(formatUser)
    } catch (e) {
        res.status(500).send('Connection Error')
    }
}
