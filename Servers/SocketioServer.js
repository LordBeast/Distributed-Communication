this.inheritFrom = require('ServerBase');
this.inheritFrom();

this.name = 'SocketServer';

var utils = require('../utils/Utils')
,	self = this
;

function setupServer() {
	try{
		self.server = require('socket.io').listen(self.getServer());
	}catch(e){
		utils.logError(e);
	}
}

