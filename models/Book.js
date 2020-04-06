const mongoose = require('../config/mongoose');
const { baseFields } = require('./mixins/baseSchemaFields')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        validate: {
            validator: function(text) {
                return !!text
            },
            message: 'Title must be valid'
        }
    },
    description: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    ...baseFields,
});

module.exports = mongoose.model('Book', bookSchema);
