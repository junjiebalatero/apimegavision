const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({    	
	no: {
		type: String,
		required: true
	},
	song: {
		type: String,
		required: true
	},
	artist: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Posts', PostSchema);
