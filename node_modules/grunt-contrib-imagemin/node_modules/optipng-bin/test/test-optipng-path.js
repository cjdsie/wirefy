/*global describe, it, after */
'use strict';

var assert = require('assert');
var path = require('path');
var fs = require('fs');
var execFile = require('child_process').execFile;

describe('OptiPNG', function () {
	after(function () {
		fs.unlinkSync('test/minified.png');
	});

	it('should return path to OptiPNG binary', function (cb) {
		var binPath = require('../lib/optipng-bin.js').path;

		execFile(binPath, ['-v', '-'], function (err, stdout, stderr) {
			assert(stderr.toString().indexOf('OptiPNG') !== -1);
			cb();
		});
	});

	it('should successfully proxy OptiPNG', function (cb) {
		var binPath = path.join(__dirname, '../bin/optipng-bin');

		execFile('node', [binPath, '-v', '-'], function (err, stdout, stderr) {
			assert(stderr.toString().indexOf('OptiPNG') !== -1);
			cb();
		});
	});

	it('should minify a .png', function (cb) {
		var binPath = path.join(__dirname, '../bin/optipng-bin');
		var args = [
			'-strip',
			'all',
			'-clobber',
			'-out', path.join(__dirname, 'minified.png'),
			path.join(__dirname, 'fixtures', 'test.png')
		];

		execFile('node', [binPath].concat(args), function () {
			var actual = fs.statSync('test/minified.png').size;
			var original = fs.statSync('test/fixtures/test.png').size;
			assert(actual < original);
			cb();
		});
	});
});
