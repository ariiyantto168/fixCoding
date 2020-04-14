// object 
// object literal
// tipe data vs


// var animals = ["anoa", "ayam", "kancil", "zebra"];


// KALO LU NGERTI OBJECT LU NGERTI JAVASCRIPT


var playlist = [
	["jikalau", "3:10"],
	["aku", "2:10"],
]



// var person = [
// 	["rivan", 23, "Radio Dalam"]
// ]


// menggunakan key
var person = {
	nama: "Rivan",
	umur: 23,
	tempatTinggal: "Radio Dalam"

}

console.log(person.umur == 23);

var animal = {};

// properti
animal.nama = "Kambing";
console.log(animal.nama);


// ini key      ini value
animal.nama = "Kambing";
animal["kaki"] = 4;

// key penamapung variabel
// var properti = "kaki";
// animal[properti] = 4;


// key value
 var properti = "kaki"
 animal.properti = "Kambing";
 console.log(animal);







//  var animal = [

//  		nama: "merpati"
//  ];

//  var x = "kaki"
//  animal.nama = "Kambing";
//  animal[x] = 4;
//  console.log(animal);

// // jika menggunakan string maka mengganti value atau nila
//  animal["nama"] = "Kambing"



// delete object
 // var animal = [

 // 		nama: "merpati"
 // ];

 // delete animal.nama;
 // console.log(animal);


 var sorumMobil = {
 	nama: "PT Sinar Jaya",
 	mobil: ["Toyota", "Honda", "Daihatsu", "Mazda"]
 } 

 // console.log(sorumMobil);
// loopimg
 for (var i = 0; < sorumMobil.mobil.length; i++) {
 	console.log(sorumMobil.mobil.mobil[i]);

 }


 // cara nge looping object
 var person = {
	nama: "Rivan",
	umur: 23,
	status:"single",
	"rata-rata" : {
		matematic: 40,
		biologi: 40,
	}

}

// mengambil key dan value /jika menggunakan . dia akan mencari key 
for (var key in person) {
	console.log('$(key)')
}
for (var key in person) {
	console.log('${key}, ${person[key]}')
}


// KEYS OBJECT HAVASCRIPR

var personKeys = Object.key(person);
console.log(personKeys);
for ( var i=0; < person.length; i++){
	console.log(person[personKeys[i]]);

		// mencari nama
		// console.log(person[personKeys[0]]);
}

console.log(person["rata-rata"]);
for( var key in person){
	console.log('${key}, ${person[key}]');
}

for(var key in person) {
	if(person[key] == 'single'){
		console.log(key);
	}
}


console.log(person["rata-rata"].matematic);



var person = {
	nama: "Rivan",
	umur: 23,
	status:"single",
	"rata-rata" : {
		matematic: 40,
		biologi: 40,
	}

}

console.log(person["rata-rata"].matematic);

var person = {
	nama: "Rivan",
	umur: 23,
	status:"single",
	"rata-rata" : {
		matematic: {
			week1: 30,
			week2: 20,
		}
		biologi: 40,
	},

}
console.log(person["rata-rata"].matematic.week1);



// menghitung rata-rata
for(var key in person.nila.matematic){
	// console.log(key)
		// console.log(person.nilai.matematic[key]);
		avg += person.nilai.matematic[key];
}

avg /= person.nilai.matematic.length;
console.log(avg);

avg /= Object.Keys(person.nilai.matematic).length;
console.log(avg);

person.nilai.matematic["rata-rata"] = avg;
console.log(person)


var person = {
	nama: "Rivan",
	umur: 23,
	status:"single",
	"rata-rata" : {
		matematic: {
			week1: 30,
			week2: 20,
		}

},

if (person.namaIbu == undefinied){
	person.namaIbu = "Kokasih";	
}

if (person.hasOwnProperty("namaIbu")) {
	person.namaIbu = "Kokasih"
}
console.log(person.namaIbu);






// falsy = false, undfeinied, null, "", 0
// falsy in javascript

