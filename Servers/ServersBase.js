var self = this
,	_eventManager = require('../Managers/EventManager')
,	_serverConfig = require('../config').defaultServerOpts
;

function getServer(port, host) {
	return require('http').createServer().listen(port || _serverConfig.port, host || _serverConfig.host);
}

function on(event, cb) {
	self.server.on(event, fireEvent);
}

function off(event, cb) {
	self.server.off()
}

function removeAllListners(event) {
	
}

function registerEvent(event, context, cb) {
	if(_eventManager.registerEvent(event, context, cb)){
		self.on(event, cb);
	}
}

function unregisterEvent(event, context, cb) {
	if(_eventManager.unregisterEvent(event, context, cb)){
		self.removeAllListners(event);
	}
}

function fireEvent(event, data) {
	_eventManager.fireEvent(event, data);
}

self.getServer = getServer;