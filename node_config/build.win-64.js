const packager = require('electron-packager');
const package = require('./../package.json');
const config = require('./config.json');

packager(
	{
		name: package.name,
		dir: config.src,
		out: config.package,
		icon: config.icon,
		all: true,
		platform: 'all',
		arch: 'all',
		electronVersion: '1.4.13',
		overwrite: true,
		prune: true,
		asar: false,
		appVersion: package.version,
		appCopyright: `Copyright (C) 2017 ${package.author}.`,

		// Windows options.
		versionString: {
			CompanyName: 'totoraj.net',
			FileDescription: package.description,
			OriginalFilename: `${package.name}.exe`,
			ProductName: package.name,
			InternalName: package.name
		}

	},
	function (err, appPaths) {
		if (err) console.log(err);
		console.log("Done: " + appPaths);
	}
);
