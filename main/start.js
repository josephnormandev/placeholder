// global variable for the root directory
rootDirectory = __dirname;

var ConfigManager = require('./managers/ConfigManager.js');
var DatabaseManager = require('./managers/DatabaseManager.js');
var ExpressManager = require('./managers/ExpressManager.js');
var OnlineServerManager = require('./managers/OnlineServerManager.js');

(async function() {
	await ConfigManager.initialize();
	await ExpressManager.initialize();
	await DatabaseManager.initialize();
	await OnlineServerManager.initialize();
})();