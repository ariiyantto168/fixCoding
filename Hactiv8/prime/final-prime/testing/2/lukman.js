/**
 * Buatlah sebuah function yang memerima dua parameter,yaitu numbers berupa array dan limit berapa angka.
 * Function sortAndGroup akan menghasilkan output berupa array 2 dimensi yang panjang di dapat dari paramter kedua. 
 * elemen pada output adalah array of numbers (inner array) dari paramter pertama yang telah terurut dari terbesar ke kecil
 *
 * Contoh:
 * PARAM1: [22, 33, 44, 11, 24, 36, 53, 79]
 * PARAM2: 3
 * OUTPUT: [ 
 *   [ 79, 53, 44 ], 
 *   [ 36, 33, 24 ],
 *   [ 22, 11 ] 
 * ]
 *
 * Jika param pertama tidak memiliki elemen apapun, maka outputnya "Maaf, tidak bisa digrouping"
 * Jika param kedua lebih besar dari jumlah semua elemen, maka outputnya "Maaf, limit melebihi jumlah"
 *
 * RULES:
 * Dilarang menggunakan built-in function kecuali .push() dan Math 
 */

function sortAndGroup(numbers, limit) {
    //your code here
  
    //sort code
  
    var urut = true
    
    while (urut === true) {
      urut = false;
      for (var i = 0; i < numbers.length -1; i++) {
        var temp = numbers[i]
        if (numbers[i] > numbers[i+1]) {
          
        }
      }
    }
  
  
    let arrLuar = []
  
    for (var i = 0; i < numbers.length; i++) {
      for (var j = 0; j < limit;) {
        let temp = []
        if (j < numbers.length) {
          arrLuar.push(temp)
        }
      }
    }
  }
  
  console.log(sortAndGroup([], 2));
  // Maaf, tidak bisa digrouping
  
  console.log(sortAndGroup([1, 2, 5, 4], 7));
  // Maaf, limit melebihi jumlah
  
  console.log(sortAndGroup([1, 17, 21, 27, 83, 67, 78], 3));
  // [
  //   [83, 78, 67], 
  //   [27, 21, 17], 
  //   [1]
  // ]
  