var myArray = [4, 3, 2, 5, 8, 3, 6, 10];

function izbaciDuplikate(arr) {
	var pronadjeni = {},
		rezultat = [];

	for (var i = arr.length; i > 0; i--) {
		if (!pronadjeni[arr[i]]) {
			pronadjeni[arr[i]] = true;
		} else {
			arr.splice(i, 1);
		}
	}

	return arr;
}

var bezDuplikata = izbaciDuplikate(myArray);
var sortirani = bezDuplikata.sort(function(a, b) {
	return a - b > 0;
});

console.log(sortirani);