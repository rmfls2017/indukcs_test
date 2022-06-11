const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
    title: {
        type: String,
        maxlength: 50
    },
    shape: {
        type: Number,
        default:1
    },
    color: {
        type: Number,
        default:1
    },
},{timestamps: true})

const History = mongoose.model('History', historySchema);

module.exports = { History: History }