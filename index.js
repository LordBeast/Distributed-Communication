var _dcm = require('./Managers/DistributedCommunicationManager')
,	_utils = require('./Utils/utils')
,	_colors = require('colors')
,	_config = require('config')
;


function setup() {
	
}

function exportFns() {
	exports.dcm = _dcm;
}

function onInitComplete() {
	_utils.log("DCM Initialised");
}

function init() {
	setup();
	exportFns();
	onInitComplete();
}

init();