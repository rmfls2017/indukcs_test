const { Schema } = require('mongoose');
const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String,
    },
    ptypes: {
        type: String,
        maxlength: 100
    },
    shape: {
        type: Number,
        default:1
    },
    color: {
        type: Number,
        default:1
    },
    images: {
        type: Array,
        default: []
    },
    star: {
        type: Number,
        maxlength: 100,
        default:0
    },
    views: {
        type: Number,
        default: 0
    }
},{timestamps: true})


//검색 중요시하기
productSchema.index({
    title:'text',
    description:'text'
},{
    weights :{
        title:5,
        description:1
    }
})

const Pill = mongoose.model('Pill', productSchema);

module.exports = { Pill }