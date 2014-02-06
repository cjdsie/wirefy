'use strict';
var Mocha = require('mocha');
var colors = require('colors');
var build = require('./build.js');
var mocha = new Mocha({ui: 'bdd', reporter: 'min'});

mocha.addFile('test/test-optipng-path.js');

mocha.run(function (failures) {
	if (failures > 0) {
		console.log('pre-build test failed, compiling from source...'.red);
		build();
	} else {
		console.log('pre-build test passed successfully, skipping build...'.green);
	}
});
