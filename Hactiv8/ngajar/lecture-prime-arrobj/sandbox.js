// // var snacks = [
// //     {name  : 'c', price : 15000},
// //     {name  : 'permen', price : 4000},
// //     {name  : 'pringlos', price : 16000}
// // ]

// // var snackInFebruary = []
// // for (var i=0; i< snacks.length; i++){
// //     snackInFebruary.push({
// //         name : snacks[i].name,
// //         price : snacks[i].price - 2000})
// // }

// // console.log(snacks)
// // console.log('----------')
// // console.log(snackInFebruary)
// /**
//   Diberikan sebuah function change dimana menerima inputan berupa number dan karakter.
//   Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
//   proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
//   alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
//   - jika value merupakan bilangan angka maka diganti menjadi karakter 'o'
//   - jika value merupakan karakter maka diganti menjadi karakter 'x'
//   - jika value merupakan simbol '@#$%^&*' di ganti dengan 'y'
//   -  
//   Contoh 1:
//   ==========
//   input: 3
//   proses:
//           [
//             [ 1, 'a', 'b' ],
//             [ '#', 5, 4 ],
//             [ '*', 'a', 9 ]
//           ]
//   output:
//           [
//             [o, x, x],
//             [y, o, o],
//             [y, x, o]
//           ]

//           angka = o
//           huruf = x
//           simbol = y
// **/
// function change(arr) {
//     var hasil = []
//     var huruf = 'abcdefghijklmnopqrstuvwxyz'
//     var angka = '0123456789'
//     var simbol = '@#$%^&*'

//     for (var i = 0; i < arr.length; i++) {
//         hasil[i] = []
//         for (var j = 0; j < arr[i].length; j++) {
//             ///ngecek di huruf
//             for (var h = 0; h < huruf.length; h++) {
//                 if (arr[i][j] === huruf[h]) {
//                     hasil[i].push('x')
//                 }
//             }

//             ///ngecek di angka
//             for (var a = 0; a < angka.length; a++) {
//                 if (arr[i][j] == angka[a]) {
//                     hasil[i].push('o')
//                 }
//             }

//             ///ngecek di simbol
//             for (var s = 0; s < simbol.length; s++) {
//                 if (arr[i][j] === simbol[s]) {
//                     hasil[i].push('y')
//                 }
//             }
//         }
//     }

//     return hasil
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
//     ['a'],
//   ]));

/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*
---------------
Students Report
---------------
PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:
[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]
Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]
Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
    let result = [];
    
    for (let i = 0; i < grades1.length; i++) {
      let adaKelas = false;
      for (let j = 0; j < result.length; j++) {
        if (grades1[i].classCode === result[j].classCode) {
          adaKelas = true;
        }
      }
      
      
      if (!adaKelas) {
        let obj = {};
        obj.classCode = grades1[i].classCode;
        obj.passed = [];
        obj.failed = [];
        result.push(obj);
      }
  
      if (grades1[i].score >= 70) {
        for (let j = 0; j < result.length; j++) {
          if (result[j].classCode == grades1[i].classCode) {
            result[j].passed. push(grades1[i].name);
          }
        }
      } else {
        for (let j = 0; j < result.length; j++) {
          if (result[j].classCode == grades1[i].classCode) {
            result[j].failed.push(grades1[i].name);
          }
        }
      }
    }
  
  
    return result;  
  }
  
  var grades1 = [
    { name: 'John', score: 80, classCode: 'A' },
    { name: 'Mike', score: 60, classCode: 'B' },
    { name: 'Budi', score: 70, classCode: 'C' },
    { name: 'Siti', score: 50, classCode: 'A' },
    { name: 'Aaron', score: 10, classCode: 'A' },
    { name: 'Arthur', score: 10, classCode: 'C' },
    { name: 'Osass', score: 10, classCode: 'B' },
    { name: 'Yolo', score: 90, classCode: 'C' },
  ];
  
  console.log(getReport(grades1));
  
  /*
  [
    { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
    { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
    { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
  ]
  */
  