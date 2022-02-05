function foo(param) {
	var noo = function () {
		return param;
	};

	param++;
	console.log(noo());
	return noo;
}

console.log(foo(123));
// 124
// [Function: noo]