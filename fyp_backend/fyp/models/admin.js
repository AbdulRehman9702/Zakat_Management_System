const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['superAdmin', 'admin'],
        // required: true
    },
    resetToken: String,
    resetTokenExpiration: Date,
    status: {
        type: String,
        enum: ['active', 'disable'],
        // required: true
    }
});

module.exports = mongoose.model('Admin', adminSchema)