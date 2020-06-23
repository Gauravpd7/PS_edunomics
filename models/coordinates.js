var mongoose = require('mongoose');

var coordinateSchema = new mongoose.Schema({
	coefficient: {
		type: Number,
		required: "Cannot be empty"
	},
	height: {
		type: Number,
		required: "Cannot be empty"
	},
	x: [Number],
	t: [Number],
	bounces:{
		type: Number
	}
});

var Coordinate = mongoose.model('Coordinate',coordinateSchema);

module.exports = Coordinate;