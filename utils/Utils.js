

function debuLog(data) {
	console.log("%s".yellow, data);
}

function log(title, message) {
	console.log('\n title : %s. \n  message : %s \n'.green, title || 'log title', message || 'log message');
}

function logError(message) {
	console.log('\n Error message : %s \n'.red, message || 'error message');
}

this.debuLog = debuLog;
this.log = log;
this.logError = logError;