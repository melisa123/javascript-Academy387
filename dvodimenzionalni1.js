var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

function provjeri(niz) {
	for (var i = 0; i < niz.length; i++) {
		var broj = niz[i];
		if (broj == 8 || broj == 11 || broj == 13) {
			console.log(niz[i]);
		} else if (broj.length > 0) {
			provjeri(broj);
		}
	}
}

provjeri(myArray);