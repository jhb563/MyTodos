'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Task Schema
 */
var TaskSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Task name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	deadline: {
		type: Date,
		default: Date.now,
		required: 'Please fill in deadline'
	},
	finished: {
		type: Boolean,
		default: false
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	projectId: {
		type: Schema.ObjectId,
		ref: 'Project'
	}
});

module.exports = mongoose.model('Task', TaskSchema);


