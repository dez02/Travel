var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var travelSchema = new Schema({
    category: String,
    title: String,
    country: String,
    city: String,
    description_short: String,
    description_long: String,
    place: Number,
    date_start: Date,
    date_end: Date,
});

var Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;
