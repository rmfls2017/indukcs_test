const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    shape: {
        type: Array,
        default: []
    },
    color: {
        type: Array,
        default: []
    },
},{timestamps: true})

const History = mongoose.model('History', historySchema);

module.exports = { History }