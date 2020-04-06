const jwt = require('jsonwebtoken');
const User = require('../models/User')
const bcrypt = require("bcrypt");

exports.signIn = async (req, res) => {
    let { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) throw new Error('Incorrect Email or Password')
        const compare = await bcrypt.compare(password, user.password)
        if (!compare) throw new Error('Incorrect Email or Password')
        const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY);
        res.send(token)
    } catch(e) {
        res.status(402).send('Error with  login')
    }
}

exports.login = (_, res) => {
    let filePath = __dirname.split('/');
    filePath.pop()
    filePath = filePath.join('/')
    console.log(filePath)
    res.sendFile(filePath + '/pages/auth/login.html')
}
