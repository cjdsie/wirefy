'use strict';

var exec = require('child_process').exec;
var path = require('path');
var which = require('which');
var colors = require('colors');
var tar = require('tar');
var request = require('request');
var zlib = require('zlib');

var version = '1.2.90';
var binPath = require('./lib/jpegtran-bin').path;
var tmpPath = path.join(tmpdir(), 'libjpeg-turbo-' + version);
var urlPath = 'http://downloads.sourceforge.net/project/libjpeg-turbo/1.2.90%20%281.3beta1%29/libjpeg-turbo-' + version + '.tar.gz';
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

					console.log('\nBuilding libjpeg-turbo...'.yellow);
					var binDir = path.dirname(binPath);
					var configureFlags = '--disable-shared ';

					if (process.platform === 'darwin') {
						configureFlags += '--host i686-apple-darwin ';
					}

					if (process.platform === 'linux' && process.arch === 'x64') {
						configureFlags += 'CFLAGS=\'-O3 -m64\' LDFLAGS=-m64';
					} else {
						configureFlags += 'CFLAGS=\'-O3 -m32\' LDFLAGS=-m32';
					}

					var buildScript = './configure ' + configureFlags + ' &&' +
									  'make install prefix=' + tmpPath +
									  ' bindir=' + binDir + ' bin_PROGRAMS=jpegtran';

					exec(buildScript, { cwd: tmpPath }, function (err) {
						if (err) {
							throw err;
						}
						console.log('libjpeg-turbo rebuilt successfully'.green);
					});
				});
			});
	}
};
