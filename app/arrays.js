exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
	indexOf: function (arr, item) {
		var position = -1;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				position = i;
				break;
			}
		}

		return position;
	},

	sum: function (arr) {
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i];
		}

		return sum;
	},

	remove: function (arr, item) {
		for (var i = 0; i < arr.length - 1; i++) {
			if (arr[i] === item) {
				arr.splice(i, 1);
				i--; // to account when the size of the array reduces
			}
		}
		// remove last element
		if (arr[arr.length - 1] === item) {
			arr.splice(arr.length - 1);
		}

		return arr;
	},

	removeWithoutCopy: function (arr, item) {
		return this.remove(arr, item);
	},

	append: function (arr, item) {
		arr.push(item);
		return arr;
	},

	truncate: function (arr) {
		arr.pop();
		return arr;
	},

	prepend: function (arr, item) {
		arr.unshift(item);
		return arr;
	},

	curtail: function (arr) {
		arr.shift();
		return arr;
	},

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insert: function (arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
	},

	count: function (arr, item) {
		var count = 0;

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				count++;
			}
		}

		return count;
	},

	duplicates: function (arr) {
		var stack = [];
		var dups = [];
		var element;

		for (var i = 0; i < arr.length; i++) {
			element = arr[i];
			if (stack.indexOf(element) === -1) {
				stack.push(element);
			} else if (dups.indexOf(element) === -1){
				dups.push(element);
			}
		}

		return dups;
	},

	square: function (arr) {
		return arr.map(function(item) {
			return item * item;
		});
	},

	findAllOccurrences: function (arr, target) {
		var indexes = [];
		arr.forEach(function(item, index) {
			if (target === item) {
				indexes.push(index);
			}
		});

		return indexes;
	}
};
