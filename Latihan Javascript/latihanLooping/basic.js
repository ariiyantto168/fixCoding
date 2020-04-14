// // 12345
// // 2345
// // 345
// // 45
// // 5

// var row = 5
// for (var i = 1; i < row; i++) {
// var num = ''
//     console.log('------')

//     for (var j = i; j <= row; j++) {
//     num += j;
        
//     }   
//     console.log(num) 
    
// }


// // 54321
// // 5432
// // 543
// // 54
// // 5
// var row = 5
// for (var i = 1; i <= row; i++) {
//     var num = ''

//     for (var j = 5; j >= i; j--) {        
//         num += j
//     }
//     console.log(num);

// }

// // 12345
// // 1234
// // 123
// // 12
// // 1

// var row = 5;

// for (var i = row; i >= 1; i--) {
// 	var tmp = '';

// 	for (var j = 1; j <= i; j++) {
// 		tmp += j;
// 	}
// 	console.log(tmp);
// }

// // 11111
// // 2222
// // 333
// // 44
// // 5

// var row = 5;
// for (var i = row; i >= 1; i--) {
//     var tampung = '';
//     for (var j = i; j >= 1; j--) {
        
//         tampung += j
//     }
//     console.log(tampung)
    
// }

// var row = 5;

// for (var i = row; i >= 1; i--) {
// 	var tmp = '';

// 	for (var j = i; j >= 1; j--) {
// 		tmp += j;
// 	}
// 	console.log(tmp);
// }

/*Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.

Contoh:
  - height: 3
  - output:
    ***
    ###
    ***

  - height: 1
  - output:
    *

  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****

Tinggi dan lebar dari persegi sesuai dari variable height
*/

// var row = 5
// for (var i = 0; i < row; i++) {
//     var tampung = ''

//     for (var j = 0; j < row; j++) {
//         if (i % 2 === 0) {
//             tampung += '*'
//         }else {
//             tampung += '#'
//         }
        
//     }
//     console.log(tampung)
    
// }


// Competencies: Loopings
/*
=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:

contoh 1 (height = 3):
123
23
3

contoh 2 (height = 5):
12345
2345
345
34
5

contoh 3 (height = 1):
1

tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)

// var height = 5
// for (var i = 1; i <= 5; i++) {
//     var tampung = ''
//     for (var j = 1; j <= height; j++) {
//         tampung += j    
//     }
//     console.log(tampung)
    
// }



// Instruksi
// =========
// Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
// Function tidak perlu mengembalikan nilai (tidak perlu ada return).

// Contoh 1
// --------
// input: 3
// tampilan:
// x
// oo
// xxx

// Contoh 2
// --------
// input: 6
// tampilan:
// x
// oo
// xxx
// oooo
// xxxxx
// oooooo

