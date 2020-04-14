var sofa = {
    brand : "IKEA",
 color : "Orange",
 weight : 20,
 onSale : false,
 price : {
     member : 3000000,
     "non-member" : 4000000
 },
 createdBy : ["Harry Potter", "Ron"]
}

for (var key in sofa ) {
	console.log(key); // get key
	if (key === "brand") {
		// console.log(sofa.brand);
console.log(sofa[key]);
   }
}

// sofa.pembeli = 'ariyanto'
// sofa.brand = 'acehardware'

// delete sofa.brand
// console.log(sofa)
 