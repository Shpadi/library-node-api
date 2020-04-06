const mongoose = require('../config/mongoose');
const { baseFields } = require('./mixins/baseSchemaFields')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: (value) => {
                return !!value
            },
            message: 'Email required'
        }
    },
    password: {
        type: String,
        validate: {
            validator: (value) => {
                return !!value && (value.length > 8)
            },
            message: 'Password required'
        }
    },
    name: {
        type: String,
        validate: {
            validator: (value) => {
                return !!value
            },
            message: 'Name required'
        }
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    ...baseFields,
});

module.exports = mongoose.model('User', userSchema);
