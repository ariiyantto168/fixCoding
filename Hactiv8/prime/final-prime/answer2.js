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
    var result = [];
    if (numbers.length < 1) {
		return `Maaf, tidak bisa digrouping`;
	}
	if (limit > numbers.length) {
		return `Maaf, limit melebihi jumlah`;
	}  else {
		numbers = bubblesort(numbers);
		var length = numbers.length;
		var counter = 0;
		for (let i = 0; i < limit; i++) {
			var temp = [];
			for (let j = 0; j < limit; j++) {
				temp.push(numbers[counter]);
				counter++;
				if (counter == length) {
					break;
				}
			}
			result.push(temp);
		}
	}
	return result;
}
function swap(arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }

function bubblesort(arr) {
	var swapped = true;

	// keep going unless no elements can be swapped anymore
	while (swapped) {
		// set swapped to false so that the loop stops
		// unless two element are actually swapped
		swapped = false;

		// loop through the whole array swapping adjacent elements
		for (var i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				swap(arr, i - 1, i);
				swapped = true;
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