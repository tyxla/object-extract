var objectExtract = function(obj, context) {
	if (typeof context === 'undefined') {
		context = global;
	}

	for(key in obj) {
		context[key] = obj[key];
	}
}

module.exports = objectExtract;