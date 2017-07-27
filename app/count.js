exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
	count: function (start, end) {
		var i = start;
		var timeoutID;
		function print() {
			console.log(i);
			i++;
			if (i <= end) {
				timeoutID = setTimeout(print, 100);
			}
		}
		print();

		return {
			cancel: function() {
				clearTimeout(timeoutID);
			}
		};
	}
};
