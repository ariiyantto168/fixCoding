/**
 * Buatlah sebuah function yang memerima dua parameter,yaitu numbers berupa array dan limit berapa angka.
 * Function sortAndGroup akan menghasilkan output berupa array 2 dimensi yang panjang di dapat dari paramter kedua. 
 * elemen pada output adalah array of numbers (inner array) dari paramter pertama yang telah terurut
 *
 * Contoh:
 * PARAM1: [22, 33, 44, 11, 24, 36, 53, 79]
 * PARAM2: 3
 * OUTPUT: [
 *  [11, 22, 24],
 *  [33, 36, 44],
 *  [52, 79]
 * ]
 *
 * Jika param pertama tidak memiliki elemen apapun, maka outputnya "Maaf, tidak bisa digrouping"
 * Jika param kedua lebih besar dari jumlah semua elemen, maka outputnya "Maaf, limit melebihi jumlah"
 *
 * RULES:
 * Dilarang menggunakan built-in function kecuali .push() dan Math 
 */

function sortAndGroup(numbers, limit) {
    //code goes here
    if (numbers.length === 0) {
      return 'Maaf, tidak bisa digrouping'
    }
    if (numbers.length < limit) {
      return 'Maaf, limit melebihi jumlah'
    }
    var hasil = []
    var count = 0
  
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length-1; j++) {
        if(numbers[j]>numbers[j+1]){
          var temp=numbers[j];
          numbers[j]=numbers[j+1]
          numbers[j+1]=temp
        }
      }
    }
    for (let i = 0; i < numbers.length / limit; i++) {
      for (let j = 0; j < limit; j++) {
        if (numbers[count] !== undefined) {
          if (hasil[i] === undefined) {
            hasil[i] = []
            hasil[i].push(numbers[count])
            count++
          } else {
            hasil[i].push(numbers[count])
            count++
          }
        }
  
      }
  
    }
    return hasil
  }
  
  console.log(sortAndGroup([], 2));
  // Maaf, tidak bisa digrouping
  
  console.log(sortAndGroup([1, 2, 5, 4], 7));
  // Maaf, limit melebihi jumlah
  
  console.log(sortAndGroup([1, 17, 21, 27, 83, 67, 78], 3));
  /**
   * [
   *   [1, 17, 21],
   *   [27, 67, 78],
   *   [83]
   * ]
   */
  