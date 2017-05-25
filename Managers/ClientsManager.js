var _clients = {}
;

function addClient(name, socket) {
	var res = false;
	if(!_clients[name]){
		_clients[name] = socket;
		res = true;
	}
	return res;
}

function beforeRemovingClient(socket) {
	global.utils.log('Removing Client');
}

function removeClient(name) {
	var res = false;
	if(_clients[name]){
		beforeRemovingClient(_clients[name]);
		delete _clients[name];
		res = true;
	}
	return res;
}

function getClient(name) {
	return _clients[name] || null;
}

this.addClient		= addClient
this.removeClient	= removeClient
this.getClient		= getClient