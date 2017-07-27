exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
	async: function (value) {
		return Promise.resolve(value);
	},

	manipulateRemoteData: function (url) {
		return new Promise(function(resolve, reject) {
			var call = new XMLHttpRequest();
			call.open('GET', url);
			call.onload = function() {
				var tempData = JSON.parse(call.responseText).people;
				var names = [];

				for (var i = 0; i < tempData.length; i++) {
					names.push(tempData[i].name);
				}
				resolve(names.sort());
			};
			call.onerror = function() {
				reject(JSON.parse(call.statusText));
			};
			call.send();
		});
	}
};
