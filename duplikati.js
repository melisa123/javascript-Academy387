
function pronadjiDuplikate (arr1, arr2){
	var	rezultat = [];	



		for (var i = 0; i <  arr1.length; i++) {
			for (var j = 0; j < arr2.length; j++) {
				if (arr1[i]==arr2[j]) {
					rezultat.push(arr2[j]);
				}
			}

		}

		return rezultat;

}

    
var array1= [1,2,3];
var array2= [100,2,1,10];
array2[1]

   
var pronadjeniDuplikati = pronadjiDuplikate(array1, array2 );
console.log(pronadjeniDuplikati);



function union (array1,array2){


	var duplikati= pronadjiDuplikate(array1,array2);

   	for (var i=0; i<duplikati.length; i++){
   		array1.splice(array1.indexOf(duplikati[i]),1);
   		array2.splice(array2.indexOf(duplikati[i]),1);
   		
   	}

   	return array1.concat (array2.concat(duplikati));
}

	console.log(union(array1,array2));
