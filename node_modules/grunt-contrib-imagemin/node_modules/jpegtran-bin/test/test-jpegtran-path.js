/*global describe, it, after */
'use strict';

var assert = require('assert');
var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;

describe('jpegtran', function () {
	after(function () {
		fs.unlinkSync('test/minified.jpg');
	});

	it('should return path to jpegtran binary', function (cb) {
		var binPath = require('../lib/jpegtran-bin').path;

		exec('"' + binPath + '" -v -', function (err, stdout, stderr) {
			assert(stderr.toString().indexOf('libjpeg-turbo') !== -1);
			cb();
		});
	});

	it('should successfully proxy jpegtran', function (cb) {
		var binPath = path.join(__dirname, '../bin/jpegtran-bin');

		exec('node "' + binPath + '" -v -', function (err, stdout, stderr) {
			assert(stderr.toString().indexOf('libjpeg-turbo') !== -1);
			cb();
		});
	});

	it('should minify a .jpg', function (cb) {
		var binPath = path.join(__dirname, '../bin/jpegtran-bin');
		var args = [
			'-copy', 'none',
			'-optimize',
			'-outfile', '"' + path.join(__dirname, 'minified.jpg') + '"',
			'"' + path.join(__dirname, 'fixtures', 'test.jpg') + '"'
		];

		exec('node "' + binPath + '" ' + args.join(' '), function () {
			var actual = fs.statSync('test/minified.jpg').size;
			var original = fs.statSync('test/fixtures/test.jpg').size;
			assert(actual < original);
			cb();
		});
	});
});
