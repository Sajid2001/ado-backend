const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    song: {
        type:String,
        required:true
    }
}, {timestamps:true});

const Song = mongoose.model('Song', songSchema);
module.exports = Song