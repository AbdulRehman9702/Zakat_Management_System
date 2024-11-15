const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'disable'],
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('City', citySchema)