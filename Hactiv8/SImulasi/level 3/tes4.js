/**
 * 
 * Kalian akan membuat sebuah program yang akan mensimulasikan program yang menghitung ongkos kirim dari sebuah kumpulan input transaksi pengiriman barang yang berupa kumpulan teks.
 * Input ini merupakan array yang masing-masing berisi string dengan format sebagai berikut:
 * [Nomor Transaksi]-[Nama]-[Asal Pengiriman]-[Tujuan Pengiriman].
 * 
 * Asal Pengiriman dan Tujuan pengiriman adalah nama kota yang merepresentasikan asal kota tersebut. 
 * Biaya pengiriman dari 1 kota ke kota lain yang berdekatan (bersebalahan) adalah 20.000
 * Terdapat 4 kota yang memiliki urutan:
 * Jakarta -> Depok -> Bogor -> Tangerang -> Bekasi
 *  
 *  - Jakarta ke Depok memiliki biaya pengiriman 20.000, karena hanya melalui 1 kota
 *  - Jakarte ke Bogor memiliki biaya pengiriman 40.000, karena melalui 2 kota
 *  
 * Pengiriman juga bisa berlaku sebaliknya, yaitu pengiriman dari Bekasi -> Tangerang atau Bekasi -> Jakarta. Harganya juga 20.000 per kota.
 * Contoh: 
 *     - Bekasi ke Bogor memiliki biaya pengiriman 40.000, karena melalui 2 kota
 *     - Bekasi ke Jakarta memiliki biaya pengiriman 80.000, karena melalui 4 kota
 * 
 * Program ini dibagi menjadi 5 fungsi.  Kalian harus mengimplementasikan fungsi-fungsi tersebut. Masing masing function akan memiliki 
 * deskripsi tentang apa fitur yang diperlukan di dalam masing-masing function.
 * 
 * Function `hitungOngkir` merupakan driver function, function tersebut sudah diisi dengan urutan pemanggilan yang diperlukan soal.
 * 
 *  Rules:
 * -Tidak boleh mengubah isi/urutan pemanggilan function yang ada di function hitungOngkir()!
 *
 */
​
​
/** 
 * FUnction ini akan menerima input berupa array berisi string transaksi pengiriman barang.
 * Function ini akan memisahkan input dengan delimiter '-'. 
 * 
 * Output dari function ini adalah array multidimensi yang memisahkan string input transaksi tersebut. 
 * 
*/
function splitTransactions(array) {
   //implementasikan fungsi ini 
   var arr = [];
   for (var i = 0; i < array.length; i++) {
       // var temp = array[i].split('-')
       var temp = []
       var str = ''
for (var j = 0; j < array[i].length; j++) {
            //jika string adalah -, maka push string ke temp, dan kosongkan 
            //string
            //selain itu, tambahkan array [i][j] ke string.
            if (array[i][j] == '-') {
                temp.push(str);
                str = '';
                // console.log(str);
            } else {
                str += array[i][j];
            }
        }
        arr.push(temp)
   }
   return arr;
} 
​
​
//test case
// console.log(splitTransactions(['1-Rafi-Jakarta-Depok-', '4-Afif-Bekasi-Tangerang-', '3-Rafki-Bogor-Bekasi-', '2-Zara-Tangerang-Bekasi-']))

//test case
// console.log(splitTransactions(['1-Rafi-Jakarta-Depok-', '4-Afif-Bekasi-Tangerang-', '3-Rafki-Bogor-Bekasi-', '2-Zara-Tangerang-Bekasi-']))

//Function ini menerima input berupa array multidimensi dari 
// fungsi `splitTransactions`, dan 
//akan mengurutkan array-array di dalamnya dari angka yang paling kecil 
// terlebih dahulu (disebelah kiri)
//Output yang diharapkan adalah sebuah array multidimensi yang terurut
function sortItemsByNumber(array) {
// tidak bisa menggunakan buble sort di modular function
    var counter = 1;
    var res = [];
    //implementasikan fungsi ini 
    //looping utk akses array multi dimensi
    while (counter <= 4) {
        for (var i = 0; i < array.length; i++) {
            // for (var l = 0; l < array[i][j].length; l++) {
            if (array[i][0] == counter) {
                res.push(array[i])
                counter++
            }
        }
    }
    // }
    return res;
}
​
​
//Function ini akan menerima input berupa array multidimensi 
//yang sudah diurutkan dari `SortItemsByNumber`, Ubahlah masing-masing 
//array di dalamnya menjadi object
//Output yang diharapkan dari function ini adalah sebuah array
// of objects, dimana masing-masing object memiliki format:
// {Number: [Nomor Transaksi], Name: [Nama pengirim],
// Origin: [Asal pengiriman barang], 
//Destination: [Tujuan pengiriman barang]}
function objectify(items) {
   //implementasikan fungsi ini 
    var res = []
    var count =0;
    //implementasikan fungsi ini 
    //Jakarta -> Depok -> Bogor -> Tangerang -> Bekasi
    var kota = ['Jakarta', 'Depok', 'Bogor', 'Tangerang', 'Bekasi'];
    //hitung jarak antara asal dan tujuan 
    for (var i = 0; i < items.length; i++) {
        var obj = {}
        for (var j = 0; j < kota.length; j++) {
            if (items[i].origin == kota[j]) {
                countAwal = j + 1
            }
            if (items[i].destination == kota[j]) {
                countAkhir = j + 1;
            }
        }
        if (countAwal > countAkhir) {
            var count = countAwal-countAkhir
        } else {
            var count = countAkhir-countAwal;
        }
        obj.name = items[i].name;
        obj.price = count*20000
        res.push(obj)
    }
    return res;
}
​
​
​
/**
 * Function ini akan menerima input berupa array of objects dari function `objectify`. 
 * Hitunglah biaya pengiriman dari masing-masing transaksi tersebut dan taruh hasilnya ke dalam objek baru yang berisi:
 * {Name: [Nama pengirim], Cost: [Biaya Pengiriman]}
 */
function calculatePrice(items) {
    //implementasikan fungsi ini 
    var obj = {};
    
}
​
//Function ini akan menerima input berupa array of objects dari function `calculatePrice`. 
//Jangan ubah isi dari function ini!
function hitungOngkir(objects) {
     return calculatePrice(objectify(sortItemsByNumber(splitTransactions(objects))));}
​
​
console.log(hitungOngkir(['1-Rafi-Jakarta-Depok', '4-Afif-Bekasi-Tangerang','3-Rafki-Bogor-Bekasi', '2-Zara-Tangerang-Bekasi']))
/*
 [
  { Name: 'Rafi', Cost: 20000 },
  { Name: 'Zara', Cost: 20000 },
  { Name: 'Rafki', Cost: 40000 },
  { Name: 'Afif', Cost: 20000 }
   ]
 */
