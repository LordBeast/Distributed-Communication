var _events = {}
;

function callCb(event, eventObj, data) {
	setTimeout(() => {
		eventObj.cb.call(eventObj.context, event, data);
	}, 0);
}

function registerEvent(event, context, cb) {
	var eventObj = {context : context, cb : cb}
	,	res = false
	;
	if(_events[event]){
		_events[event].push(eventObj);
	}
	else {
		res = true;
		_events[event] = [eventObj];
	}
	return res;
}

function unregisterEvent(event, context, cb) {
	var res = false;
	if(_events[event] && _events[event].length){
		for(var i = 0; i < _events[event].length; i++){
			if(_events[event][i].context === context && _events[event][i].cb === cb){
				_events[event].splice(i, 1);
			}
		}
	}

	if(!_events[event].length){
		res = true;
	}
	return res;
}

function fireEvent(event, data) {
	if(_events[event]){
		for(var i = 0; i < _events[event].length; i++){
			callCb(event, _events[event][i], data);
		}
	}
}

this.registerEvent = registerEvent;
this.unregisterEvent = unregisterEvent;