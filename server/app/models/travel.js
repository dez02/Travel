var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var travelSchema = new Schema({
    category: String,
    country: String,
    city: String,
    picture: String,
    description_short: String,
    description_long: String,
    place: Number,
    date_start: Date,
    date_end: Date,
    Duration: Number
});

var Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;
