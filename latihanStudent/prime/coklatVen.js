// // function saleCoklat(list, money) {
// //     var hasil = [];
// //     ///sort list cokelat dari yang termahal ke termurah
// //     for (var i = 1; i < list.length; i++) {
// //         for (var j = 0; j < i; j++) {
// //             if (list[i][1] > list[j][1]) {
// //                 var tukar = list[i];
// //                 list[i] = list[j];
// //                 list[j] = tukar;
// //             }
// //         }
// //     }
    
// //     return list;
// // }
// // console.log(
// // 	saleCoklat(
// // 		[
// // 			['Ferrero Rocher', 25000],
// // 			['Cadbury', 38000],
// // 			['Hersheys', 53500],
// // 			['Waltz', 36000],
// // 			['Toblerone', 42000],
// // 			['Guylian', 13000]
// // 		],
// // 		100000
// // 	)
// // );
// // //[ [ 'Hersheys', 1 ], [ 'Toblerone', 1 ] ]
// // // console.log(
// // // 	saleCoklat(
// // // 		[
// // // 			['Ferrero Rocher', 25000],
// // // 			['Cadbury', 38000],
// // // 			['Hersheys', 53500],
// // // 			['Waltz', 36000],
// // // 			['Toblerone', 42000],
// // // 			['Guylian', 13000]
// // // 		],
// // // 		200000
// // // 	)
// // // );
// // // // /**
// // // //  * 
// // // //  * [
// // // //   [ 'Hersheys', 1 ],
// // // //   [ 'Toblerone', 1 ],
// // // //   [ 'Cadbury', 1 ],
// // // //   [ 'Waltz', 1 ],
// // // //   [ 'Ferrero Rocher', 1 ]
// // // // ]
// // // //  * 
// // // //  */
// // // console.log(
// // // 	saleCoklat(
// // // 		[
// // // 			['Ferrero Rocher', 25000],
// // // 			['Cadbury', 38000],
// // // 			['Hersheys', 53500],
// // // 			['Waltz', 36000],
// // // 			['Toblerone', 42000],
// // // 			['Guylian', 13000]
// // // 		],
// // // 		500000
// // // 	)
// // // );
// // // /**
// // //  *
// // // [
// // //   [ 'Hersheys', 3 ],
// // //   [ 'Toblerone', 2 ],
// // //   [ 'Cadbury', 2 ],
// // //   [ 'Waltz', 2 ],
// // //   [ 'Ferrero Rocher', 3 ],
// // //   [ 'Guylian', 2 ]
// // // ]
// // //  * 
// // //  */
// // console.log(
// // 	saleCoklat(
// // 		[
// // 			['Waltz', 25000],
// // 			['Lindt', 30000],
// // 			['Toblerone', 20000]
// // 		],
// // 		100000
// // 	)
// // );
// // /**
// //  * 
// // [ [ 'Lindt', 1 ], [ 'Waltz', 2 ], [ 'Toblerone', 1 ] ]
// //  * 
// //  */
// function countProfit(shoppers) {
//     if (shoppers.length == 0) {
//         return [];
//     }

//     let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
//                        ['Baju Zoro', 500000, 2],
//                        ['Sweater Uniklooh', 175000, 1]
//                      ];
  
//     var hasil = [];

//     for (var b = 0; b < listBarang.length; b++) {
//         ///buat objek baru
//         var obj = {
//             product : listBarang[b][0],
//             shoppers : [],
//             leftOver : listBarang[b][2],
//             totalProfit : 0
//         };

//         ///perulangan di index luar shoppers
//         for (var i = 0; i < shoppers.length; i++) {
//             ///input ke objek baru
//             if (shoppers[i].product == listBarang[b][0] && shoppers[i].amount <= obj.leftOver) {
//                 obj.shoppers.push(shoppers[i].name);
//                 obj.leftOver -= shoppers[i].amount;
//                 obj.totalProfit += listBarang[b][1] * shoppers[i].amount
//             }
//         }
//         ///push objek ke array hasil
//         hasil.push(obj);
//     }
//     return hasil;
// }

// // TEST CASES
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
// //[ { product: 'Sepatu Stacattu',
// //   shoppers: [ 'Windi', 'Vanessa' ],
// //   leftOver: 5,
// //   totalProfit: 7500000 },
// // { product: 'Baju Zoro',
// //   shoppers: [],
// //   leftOver: 2,
// //   totalProfit: 0 },
// // { product: 'Sweater Uniklooh',
// //   shoppers: [],
// //   leftOver: 1,
// //   totalProfit: 0 } ]

// console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
// console.log(countProfit([])); //[]


// let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
//                        ['Baju Zoro', 500000, 2],
//                        ['Sweater Uniklooh', 175000, 1]
//                      ];
  
//     for (let i = 0; i < listBarang.length; i++) {
// 		console.log(listBarang[i])
// 	}

var students = [
	{
		nama: 'testing',
		class: 'aa',
		kelas: 1
	}
]

for (let i = 0; i < students.length; i++) {
	var obj = {
		nama: students[i][0].nama
	}
}