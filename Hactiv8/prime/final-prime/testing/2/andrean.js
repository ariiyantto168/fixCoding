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
    else if (numbers.length < limit) {
      return 'Maaf, limit melebihi jumlah'
    }
    else {
      var arr = [];
      for (var i = 0; i < limit; i++) {
        arr.push([]);
      }
  
      for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length-1; j++) {
          var temp= numbers[j];
          if (numbers[j] > numbers[j+1]) {
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp;
          }
        }
      }
      var counter = 0;
      for (var k = 0; k < numbers.length; k++) {
        if (arr[counter].length === limit) {
          counter++;
          arr[counter].push(numbers[j]);
        }
        else {
          arr[counter].push(numbers[k]);
        }
      }
    }
    return arr;
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
  