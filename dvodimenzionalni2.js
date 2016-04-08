var myArray = [["John", 23], ["cat", 2]];

// 1: koristeci funkciju push() dodati  ["dog", 3] unutar ovog dvodimenzionalnog arraya.
myArray.push(["dog", 3]);
console.log(myArray);

// 2: koristeci funkciju push() dodati  ["dog", 3] unutar ovog dvodimenzionalnog arraya.
myArray.pop();
console.log(myArray);

// 3. Nakon toga izbaciti prvi element iz arraya koristeci .hift() funkciju.
myArray.shift();
console.log(myArray);

// 4. Poslije toga dodajte neki drugi element na pocetak arraya koristeci funkciju unshift()
myArray.unshift(["horse", 31]);
console.log(myArray);

// 5. Koristiti indexOf() funkciju naci "cat" u arrayu te onda koristeci splice obrisati cat i elemnt nakon tog. 
// indexOf() se ne moze koristiti za pretrazivanje dvodimenzionalnih nizova
// var i = myArray.indexOf(["cat", 2]);
// 
// console.log(i);