function saleCoklat(list, money) {
    var hasil = [];
    // step 1 : sorting harga termahal ke termurah,
    for (var i = 1; i < list.length; i++) {
        for (var j = 0; j < i; j++) {
            // console.log(list[j+1][1])
            if (list[i][1] > list[j][1]) {
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }



     while (money >= list[list.length-1][1]) {
        for (var a = 0; a < list.length; a++) {
            var cek = false;
           if (money >= list[a][1]) {
               for (var h = 0; h < hasil.length; h++) {
                   if (list[a][0] === hasil[h][0]) {
                       hasil[h][1]++
                       money -= list[a][1];
                       cek = true;
                   }
               }
               if(!cek) {
                  hasil[h] = [];
                  hasil[h].push(list[a][0], 1);
                  money -= list[a][1];
            }
    }
                    
    }
}                
    return hasil
}

console.log(
    saleCoklat(
        [
            ['Ferrero Rocher', 25000],
            ['Cadbury', 38000],
            ['Hersheys', 53500],
            ['Waltz', 36000],
            ['Toblerone', 42000],
            ['Guylian', 13000]
        ],
        100000
    )
);
//[ [ 'Hersheys', 1 ], [ 'Toblerone', 1 ] ]
console.log(
    saleCoklat(
        [
            ['Ferrero Rocher', 25000],
            ['Cadbury', 38000],
            ['Hersheys', 53500],
            ['Waltz', 36000],
            ['Toblerone', 42000],
            ['Guylian', 13000]
        ],
        200000
    )
);
// // /**
// //  * 
// //  * [
// //   [ 'Hersheys', 1 ],
// //   [ 'Toblerone', 1 ],
// //   [ 'Cadbury', 1 ],
// //   [ 'Waltz', 1 ],
// //   [ 'Ferrero Rocher', 1 ]
// // ]
// //  * 
// //  */
console.log(
    saleCoklat(
        [
            ['Ferrero Rocher', 25000],
            ['Cadbury', 38000],
            ['Hersheys', 53500],
            ['Waltz', 36000],
            ['Toblerone', 42000],
            ['Guylian', 13000]
        ],
        500000
    )
);
// /**
//  *
// [
//   [ 'Hersheys', 3 ],
//   [ 'Toblerone', 2 ],
//   [ 'Cadbury', 2 ],
//   [ 'Waltz', 2 ],
//   [ 'Ferrero Rocher', 3 ],
//   [ 'Guylian', 2 ]
// ]
//  * 
//  */
// console.log(
//     saleCoklat(
//         [
//             ['Waltz', 25000],
//             ['Lindt', 30000],
//             ['Toblerone', 20000]
//         ],
//         100000
//     )
// );
