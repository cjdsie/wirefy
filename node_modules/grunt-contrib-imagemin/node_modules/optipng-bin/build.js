'use strict';

var exec = require('child_process').exec;
var path = require('path');
var which = require('which');
var colors = require('colors');
var tar = require('tar');
var request = require('request');
var zlib = require('zlib');

var version = '0.7.4';
var binPath = require('./lib/optipng-bin').path;
var tmpPath = path.join(tmpdir(), 'optipng-' + version);
var urlPath = 'http://downloads.sourceforge.net/project/optipng/OptiPNG/optipng-' + version + '/optipng-' + version + '.tar.gz';
var win32 = process.platform === 'win32';

function tmpdir() {
    if (win32) {
        return process.env.TEMP ||
        process.env.TMP ||
        (process.env.SystemRoot || process.env.windir) + '\\temp';
    } else {
        return process.env.TMPDIR ||
        process.env.TMP ||
        process.env.TEMP ||
        '/tmp';
    }
}

module.exports = function () {
	if (process.platform === 'darwin' || process.platform === 'linux') {
		var opts = {
			type: 'Directory',
			path: tmpPath,
			strip: 1
		};
		var proxy = process.env.http_proxy || process.env.HTTP_PROXY ||
			process.env.https_proxy || process.env.HTTPS_PROXY || '';

		console.log('Fetching %s...'.yellow, urlPath);
		var req = request.defaults({ proxy: proxy }).get(urlPath, function (err, resp) {
			if (resp.statusCode !== 200) {
				throw err;
			}
		});

		req
			.pipe(zlib.Gunzip())
			.pipe(tar.Extract(opts))
			.on('close', function () {
				console.log('Done in %s'.green, tmpPath);

				which('make', function (err) {
					if (err) {
						throw err;
					}

					console.log('\nBuilding OptiPNG...'.yellow);
					var binDir = path.dirname(binPath);
					var buildScript = './configure --with-system-zlib --bindir=' + binDir + ' --mandir=man && ' +
									  'make install';
					exec(buildScript, { cwd: tmpPath }, function (err) {
						if (err) {
							throw err;
						}
						console.log('OptiPNG rebuilt successfully'.green);
					});
				});
			});
	}
};
