'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
	userId: {type: String, required: true},
	travelId: {type: String, required: true}
});


// return the model
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
