var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const mongoURL = `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/${process.env.DB}`
mongoose.connect(mongoURL, {useNewUrlParser: true});

module.exports = mongoose
