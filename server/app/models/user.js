'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	mail: {type: String, required: true, lowercase: true, unique: true},
	password: {type: String, required: true, selected: false},
	admin: Boolean
});


// Hash password
// userSchema.pre('save', (next) => {
// 	const user = this;
// 	// Hash password only if user has change or is new
// 	// if (!user.isModified('password')) return next();
// 	// Generate the hash
// 	bcrypt.hash(user.password, null, null, (err, hash) => {
// 		if (err) return next(err);
// 		// Change password to hashed version
// 		user.password = hash;
// 		console.log(this);
// 		next();
// 	});
// });
//
// // Compare password to the Database hash
// userSchema.methods.comparePassword = password => {
// 	const user = this;
// 	return bcrypt.compareSync(password, user.password);
// }

// return the model
const User = mongoose.model('User', userSchema);

module.exports = User;
