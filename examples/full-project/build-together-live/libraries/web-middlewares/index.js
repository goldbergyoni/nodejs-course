'use strict';

const bodyParser = require('body-parser'),
	helmet = require('helmet');

module.exports = function () {
	const result = [];
	result.push(helmet());
	result.push(bodyParser.json());
	result.push(bodyParser.urlencoded({
		extended: true
	}));

	return result;
};