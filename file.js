
var 
	Logger = require('log').Logger, 
	fs = require('fs'), 
	util = require('util');

function FileLogger(opts) {
	Logger.call(this);
	opts = opts || { };
	this.stream = fs.createWriteStream(opts.path || process.title+".log", {
		flags: "a",
		encoding: "utf8",
		mode: 0644
	});
}
util.inherits(FileLogger, Logger);

FileLogger.prototype.formatMessage = function(msg) {
	return msg.message + "\n";
}

FileLogger.prototype.write = function(msg) {
	this.stream.write(this.formatMessage(msg));
}

module.exports = FileLogger;