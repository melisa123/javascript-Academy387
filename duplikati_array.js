function pronadjiDuplikate(arr) {
	var pronadjeni = {},
		rezultat = [];

	for (var i in arr) {
		if (!pronadjeni[arr[i]]) {
			pronadjeni[arr[i]] = 1; 
		} else {
			pronadjeni[arr[i]]++;
		}
	}

	for (i in pronadjeni) {
		if (pronadjeni[i] > 1) {
			rezultat.push(i);
		}
	}

	return rezultat;
}

var brojevi = [1, 2, 8, 2, 3, 1, 7, 15, 7],
	brojevi2 = [8, 9, 11, 23];

var pronadjeniDuplikati = pronadjiDuplikate(brojevi);
var pronadjeniDuplikati2 = pronadjiDuplikate(brojevi2);

console.log(pronadjeniDuplikati, pronadjeniDuplikati2);