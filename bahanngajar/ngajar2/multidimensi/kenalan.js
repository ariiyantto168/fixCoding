// var students = [
//     ["ari", "male"], // -> 0
//     ["ayu", "female"], //-> 1
//     ["audrick", "male"] //-> 2
// ]

// // console.log(students[0])

// // console.log(students.push(["daniel", "male"]))
// var newStudents = students.push(["daniel", "male"])
// console.log(students)
// console.log("-----------")
// console.log(students[3])

// var newList = list.push(["sea fod", 88])
// console.log(list)

// var key = ['Ayam Bakar','Sphageti','Pizza','Mie Ayam','Ikan Bakar']

// for(var i = 0; i < key.length; i++){
//     for(var j = 0; j < list.length; j++){
//         if(key[i] == list[j][0]){
//             list[j][1]++
//         }
//     }
// }
// console.log(list)

// var list = [
//     ['Ayam Bakar', 25], //-> 0
//     ['Sphageti', 38], // -> 1
//     ['Pizza', 53], // -> 2
//     ['Mie Ayam', 36], // -> 3
//     ['IkanBakar', 42], // -> 4
// ]

// var key = ['Ayam Bakar','Sphageti','Pizza','Mie Ayam','Ikan Bakar']

// for(var i = 1; i < list.length; i++){
//     for(var j = 0; j < i; j++){
//         if (list[i][0] < list[j][0]) {
//             var tukar = list[i]
//             list[i] = list[j]
//             list[j] = tukar
//         }
//     }
// }
// console.log(list)

// var list = [
//     ['Ayam Bakar', 25], //-> 0
//     ['Sphageti', 38], // -> 1
//     ['Pizza', 53], // -> 2
//     ['Mie Ayam', 36], // -> 3
//     ['IkanBakar', 42], // -> 4
// ]

// function change(arr) {
//     var hasil = []
//     var huruf = 'abcdefghijklmnopqrstuvwxyz'
//     var angka = '0123456789'
//     var simbol = '@#$%^&*'

//     for(var i = 0; i < arr.length; i++){
//         hasil[i] = []
//         for(var j = 0; j < arr[i].length; j++){

//             for(var h = 0; h < huruf.length; h++){
//                 if (arr[i][j] === huruf[h]) {
//                     hasil[i].push('x')
//                 }
//             }


//             for(var s = 0; s < simbol.length; s++){
//                 if (arr[i][j] === simbol[s]) {
//                     hasil[i].push('y')
//                 }
//             }
//         }
//         return hasil
//     }
// }
//   console.log(change([
//       ['a','a',4,5,'$'],
//       ['@','$',5,'d','#'],
//       [9,8,'g','t','%'],
//   ]));
// /**
//  * [ 
//  * [x,x,o,o,x],
//  * [y,y,o,x,y],
//  * [o,o,x,x,y]
//  * 
//  * ]
//   **/
//  console.log(change([
//   ['a','$',4,'*','$'],
//   ['@','$',5,'d','#'],
//   [9,8,'g','t','%'],
// ]));
// /**
// * [ 
// * [x,y,o,y,y],
// * [y,y,o,x,y],
// * [o,o,x,x,y]
// * 
// * ]
// **/

// console.log(change([
//     ['a',4],
//   ]));
  

// var list = [
//     ['A', 25], //-> 0
//     ['B', 38], // -> 1
//     ['D', 53], // -> 2
//     ['C', 53]
// ]



// for(var i = 1; i < list.length; i++){
//     for( var j = 0; j < i; j++){
//         if (list[i][0] < list[j][0]) {
//             var tuker = list[i]
//             list[i] = list[j]
//             list[j] = tuker
//         }
//     }
// }

// console.log(list)
/**
  Diberikan sebuah function change dimana menerima inputan berupa number, karakter dan simbol.
  Function ini akan mengembalikan array multidimensi yang isi value memiliki kamus dan beserta logo yang telah di berikan: 
  kamus : 
    huruf = 'abcdefghijklmnopqrstuvwxyz'
    angka = '0123456789'
    simbol = '@#$%^&*'
  -  
    karakter = x
    angka = o
    simbol = y


  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 'a', 'b' ],
            [ '#', 5, 4 ],
            [ '*', 'a', 9 ]
          ]
  output:
          [
            [o, x, x],
            [y, o, o],
            [y, x, o]
          ]

          angka = o
          huruf = x
          simbol = y
**/
function change(arr) {
    var hasil = []
    var huruf = 'abcdefghijklmnopqrstuvwxyz'
    var angka = '0123456789'
    var simbol = '@#$%^&*'

    for (var i = 0; i < arr.length; i++) {
        hasil[i] = []
        for (var j = 0; j < arr[i].length; j++) {
            ///ngecek di huruf
            for (var h = 0; h < huruf.length; h++) {
                if (arr[i][j] === huruf[h]) {
                    hasil[i].push('x')
                }
            }

            ///ngecek di angka
            for (var a = 0; a < angka.length; a++) {
                if (arr[i][j] == angka[a]) {
                    hasil[i].push('o')
                }
            }

            ///ngecek di simbol
            for (var s = 0; s < simbol.length; s++) {
                if (arr[i][j] === simbol[s]) {
                    hasil[i].push('y')
                }
            }
        }
    }

    return hasil
}
  console.log(change([
      ['a','a',4,5,'$'],
      ['@','$',5,'d','#'],
      [9,8,'g','t','%'],
      ['!'],
  ]));
/**
 * [ 
 * [x,x,o,o,x],
 * [y,y,o,x,y],
 * [o,o,x,x,y]
 * 
 * ]
  **/
 console.log(change([
  ['a','$',4,'*','$'],
  ['@','$',5,'d','#'],
  [9,8,'g','t','%'],
]));
/**
* [ 
* [x,y,o,y,y],
* [y,y,o,x,y],
* [o,o,x,x,y]
* 
* ]
**/

console.log(change([
    ['a',4],
  ]));
  