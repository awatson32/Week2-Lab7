var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
            return val;
        },

		// Collections --- Complete Functions Below
		each : function(list, iterator) {
            if(list.constructor === Array) {				
                for (var i = 0; i < list.length; i++) {
                    iterator(list[i], i, list);
                }
			} else {
                for (var index = 0; index < Object.keys(list).length; index++) {
                    var key = Object.keys(list)[index];
                    iterator(list[key], key, list);
                }
            } 
        },

		filter : function(list, test) {
            var arr = [];
            for (var index = 0; index < list.length; index++) {
                if(test(list[index])) {
				    arr.push(list[index]);
				}
            }
            return arr;
        },

		reject : function(list, test) {
            var arr = [];
            for (var index = 0; index < list.length; index++) {
                if(!test(list[index])) {
				    arr.push(list[index]);
				}
            }
            return arr;
        },

		map : function(list, iterator) {
            var arr = [];
            for (var index = 0; index < list.length; index++) {
                var element = iterator(list[index]);
                arr.push(element);
            }
            return arr;
        },

		pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {
            if (accumulator == undefined) {
				accumulator = list[0];
			}
			for (var index = 0; index < list.length; index++) {
				accumulator = iterator(accumulator, list[index]);
				}
				return accumulator;
        },

		every : function(list, iterator) {
            if (list.length == 0) {
				return true;
			}
			if (iterator == undefined) {
				iterator = this.identity;
			}
			for (var index = 0; index < list.length; index++) {
				if(!iterator(list[index])) {
				return false;
				}		
			}
			return true;
        },

		some : function(list, iterator) {
            if (list.length == 0) {
				return false;
			}
			if (iterator == undefined) {
				iterator = this.identity;
			}
			for (var index = 0; index < list.length; index++) {
				if(iterator(list[index])) {
					return true;
				}
			}
			return false;
        },

		contains : function(list, target) {
            if (list.constructor === Array) {
			for (var index = 0; index < list.length; index++) {
				if (list[index] == target){
					return true;
				}
			}
			} else {
				for (var index = 0; index < Object.keys(list).length; index++) {
				var key = Object.keys(list)[index];
				if (list[key] == target) {
					return true;
				}
				}
			}
			return false;
        },

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {},

		invoke : function(list, methodName, args) {},

		sortBy : function(list, iterator) {},

		// Objects --- Complete Functions Below
		extend : function(obj) {},

		defaults : function(obj) {},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {},

		indexOf : function(array, target){},

		uniq : function(array) {},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {},

		memoize : function(func) {},

		delay : function(func, wait) {}
	}
})();




