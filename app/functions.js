exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
	argsAsArray: function (fn, arr) {
		return fn.apply(null, arr);
	},

	speak: function (fn, obj) {
		return fn.call(obj);
	},

	functionFunction: function (str) {
		return function(str2) {
			return str + ', ' + str2;
		};
	},

	makeClosures: function (arr, fn) {
		var funcArray = [];

		funcArray = arr.map(function(item) {
			return function() {
				return fn(item);
			};
		});

		return funcArray;
	},

	partial: function (fn, str1, str2) {
		return function(str3) {
			return fn.call(null, str1, str2, str3);
		};
	},

	useArguments: function () {
		var args = Array.prototype.slice.call(arguments);
		var sum = 0;
		for (var i = 0; i < args.length; i++) {
			sum += args[i];
		}

		return sum;
	},

	callIt: function (fn) {
		var args = Array.prototype.slice.call(arguments);
		// we need to slice(1) because callIt gets call with a fn, and then the arguments of fn.
		return fn.apply(null, args.slice(1));
	},

	partialUsingArguments: function (fn) {
		var args = [].slice.call(arguments, 1, arguments.length);

		return function() {
			var moreArgs = args.concat([].slice.call(arguments));
			return fn.apply(null, moreArgs);
		}

	},

	curryIt: function (fn) {

	}
};
