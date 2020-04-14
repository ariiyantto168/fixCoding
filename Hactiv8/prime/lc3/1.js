/*
 * Implementasikan fixArray, yang menerima input berupa array dan mengembalikan output berupa array yang sudah dibetulkan. 
 * Berikut ini rules untuk memperbaiki array.
 * - Jika elemen merupakan angka, maka biarkan saja di dalam array
 * - Jika elemen merupakan huruf kecil / lowercase, biarkan saja di dalam array
 * - Jika elemen merupakan huruf besar, maka hilangkan dari array
 * 
 * Input tidak akan berisi karakter selain huruf dan angka!
 * 
 * RULES
 *  Tuliskan Pseudocode!!!!!
 *  Built-in function yang diperbolehkan hanya .toLowerCase(), .toUpperCase() dan .push()
 *  
 * 
 * 
 */

//Tuliskan Pseudocode disini!

function fixArray(array) {
    var result = []
    for (let i =0;i<array.length;i++) {
        if (isNaN(array[i])) {
            if (array[i].toUpperCase() === array[i]) {
                //upper case true
            } else if (array[i].toLowerCase() === array[i]) {
                //lowercase true
                result.push(array[i])
            } 
        } else {
            result.push(array[i])
        }
    }
    return result
    }
    
    
    console.log(fixArray([1,2,3,'a', 'b', 'B', 'C', 30,70]))
    /** 
    [
      1,   2,  3,  'a',
      'b', 30, 70
    ]
     */
    console.log(fixArray([1,'b',3,'a', 'b', 'C', 100000]))
    /*
    [ 1, 'b', 3, 'a', 'b', 100000 ]
    */