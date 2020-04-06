const mongoose = require('../config/mongoose');
const { baseFields } = require('./mixins/baseSchemaFields')

const authorSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            validate: {
                validator: (firstName) => {
                    return !!firstName
                },
                message: 'FirstName uncorrected'
            }
        },
        lastName: {
            type: String,
            validate: {
                validator: (firstName) => {
                    return !!firstName
                },
                message: 'LastName uncorrected'
            },
        }
    },
    biography: String,
    avatar: Buffer,
    ...baseFields,
});

module.exports = mongoose.model('Author', authorSchema);
