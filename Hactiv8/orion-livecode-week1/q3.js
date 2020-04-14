/**
 * Instruksi
 *
 * ===============
 * Count Stuff
 * ===============
 * 
 * Pada program ini kalian harus mencari beberapa hal yang terdapat di dalam sebuah string.
 * Kalian diberikan 2 input, 'line' dan 'param'.
 * String line berisi angka (0-9), huruf (lowercase) atau karakter lain yang sembarang ('/', '#', '@', '$', dll). String ini merupakan string yang akan kalian proses.
 * Contoh line: '123abcdfghi9657$%^&*'
 * String param berisi parameter yang akan menentukan barang yang kalian cari di dalam string tersebut.
 * param bisa berupa: - 'sigma'
 *                         jika param berupa sigma, maka jumlahkan semua angka di dalam string.
 *                     - 'letters'
 *                         jika param berupa letters, maka carilah jumlah huruf di dalam string.
 *                     - 'length'
 *                         jika param berupa length, maka program akan mengoutput panjang dari elemen string yang berupa huruf dan angka.
 *                     - Selain ketiga param diatas, maka program akan mengoutput 'Parameter salah'
 * Contoh 
 * 
 * 1.
 * 'line' : 'abcdefghijklmonjasd'
 * 'param': 'letters'
 * 
 * Output: 19 
 * 
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'sigma'
 * 
 * Output: 0
 * 
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'length'
 * 
 * Output: 19
 * 
 * 2. line: 'abcde#$%^&12345
 * 
 * param : 'sigma'
 *  
 * Output: 15
 * 
 * line: 'abcde#$%^&12345
 * 
 * param : 'length'
 * 
 * Output: 10
 * 
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN METHOD / FUNCTION
 * 
 */

let line = 'abcdefghijklmonjasd'; //kalian bisa mengubah isi dari 'line' untuk menguji contoh-contoh string yang lainnya
let param = '' //kalian bisa mengisi param ini dengan 'sigma', 'letters', 'length', dll

function countStuff(line, param) {
   

}

console.log(countStuff(line, param))

/**
 * Instruksi
 *
 * ===============
 * Count Stuff
 * ===============
 *
 * Pada program ini kalian harus mencari beberapa hal yang terdapat di dalam sebuah string.
 * Kalian diberikan 2 input, 'line' dan 'param'.
 * String line berisi angka (0-9), huruf (lowercase) atau karakter lain yang sembarang ('/', '#', '@', '$', dll). String ini merupakan string yang akan kalian proses.
 * Contoh line: '123abcdfghi9657$%^&*'
 * String param berisi parameter yang akan menentukan barang yang kalian cari di dalam string tersebut.
 * param bisa berupa: - 'sigma'
 *                         jika param berupa sigma, maka jumlahkan semua angka di dalam string.
 *                     - 'letters'
 *                         jika param berupa letters, maka carilah jumlah huruf di dalam string.
 *                     - 'length'
 *                         jika param berupa length, maka program akan mengoutput panjang dari elemen string yang berupa huruf dan angka.
 *                     - Selain ketiga param diatas, maka program akan mengoutput 'Parameter salah'
 * Contoh
 *
 * 1.
 * 'line' : 'abcdefghijklmonjasd'
 * 'param': 'letters'
 *
 * Output: 19
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'sigma'
 *
 * Output: 0
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'length'
 *
 * Output: 19
 *
 * 2. line: 'abcde12345
 *
 * param : 'sigma'
 *
 * Output: 15
 *
 * line: 'abcde12345
 *
 * param : 'length'
 *
 * Output: 10
 *
 * RULES :
 * - HANYA BOLEH MENGGUNAKAN BUILT-IN METHOD / FUNCTION dari tipe data Number
 *
 */

var line = 'abcdefghijklmonjasd' //kalian bisa mengubah isi dari 'line' untuk menguji contoh-contoh string yang lainnya
var param = 'letters' //kalian bisa mengisi param ini dengan 'sigma', 'letters', 'length', dll

//tulis kode kalian disini
switch(param) {
    case 'sigma':
        var result = 0;
        for(var i = 0; line[i] !== undefined; i++) {
            var parsedNumber = Number.parseInt(line[i], 10);
            if(!Number.isNaN(parsedNumber)) {
                result += parsedNumber;
            }
        }
        console.log(result);
        break;
    case 'letters':
        var count = 0;
        for(var i = 0; line[i] !== undefined; i++) {
            if(line[i] >= 'a' && line[i] <= 'z') {
                count += 1;
            }
        }
        console.log(count);
        break;
    case 'length':
        var count = 0;
        for(var i = 0; line[i] !== undefined; i++) {
            var parsedNumber = Number.parseInt(line[i], 10);        
            if(line[i] >= 'a' && line[i] <= 'z' || !Number.isNaN(parsedNumber)) {
                count += 1;
            }
        }
        console.log(count);
        break;
    default:
        console.log('Parameter salah');
}

