//  array push

var fruits = ["jeruk","apel","mangga"];
var total = fruits.push("melon");

console.log(fruits);


// array push
var animal = ["macan","zebra","gajah"];
var totanimal = animal.push("kuda","kelinci");
console.log(animal);


// update array 
// penggunaan 

arrObj = [
{
	name: 'ari',
	age: '24 tahun'
},

{
	name: 'aira',
	age: '10 tahun'
},
];

// arrObj.push({
// 	name:'aira zuliyanti',
// 	age: '10 tahun'
// });

// arrObj.pop({
// 	name:'airazuliyanti',
// 	age: '10 tahun'
// })


//  array shift berfungsi menghapus value paling depan

// arrObj.shift({
// 	name:'aira zuliyanti',
// 	age: '10 tahun'
// });

arrObj.unshift({
	name:'aira zuliyanti',
	age: '10 tahun'
});

console.log(arrObj);