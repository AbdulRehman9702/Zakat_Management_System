const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    description: String,
    city: { 
        type: Schema.Types.ObjectId, 
        ref: 'City' 
    },
    zakat_status: {
        type: String,
        enum: ['valid', 'invalid'],
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'disable'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)