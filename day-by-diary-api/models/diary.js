const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const diarySchema = new Schema({
    title: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: String
    },
    canvas: {
        type: String
    },
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Diary', diarySchema);