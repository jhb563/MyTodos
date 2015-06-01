'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var Task = require('./task.server.model.js');


/**
 * Project Schema
 */
var ProjectSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Project name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
        deadline: {
		type: Date,
    		required: 'Please enter a deadline',
    	},
	finished: {
		type: Boolean,
		default: false
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	tasks: [Task]
		
});

module.exports = mongoose.model('Project', ProjectSchema);


