/*global describe, it */
'use strict';

var assert = require('assert');
var exec = require('child_process').exec;
var binPath = require('../lib/optipng-bin.js').path;
var fs = require('fs');

describe('OptiPNG rebuild', function () {
	it('it should rebuild the optipng binaries', function (cb) {
		this.timeout(15000); // give this test time to build
		var origCTime = fs.statSync(binPath).ctime;
		exec('node build.js', {}, function (err) {
			var actualCTime = fs.statSync(binPath).ctime;
			assert(actualCTime !== origCTime);
			cb(err);
		}).path;
	});
});
