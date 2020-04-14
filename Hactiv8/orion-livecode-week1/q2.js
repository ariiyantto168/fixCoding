/**
  * Seseorang akan mendaftar paket Indiehome terbaru. Buatlah program untuk menghitung harganya. Untuk mendaftar, dia perlu menyertakan nama, nomor ktp, alamat, serta jenis rumah.
  * Jika nama tidak diisi, program akan mengoutput 'NAMA HARUS DIISI!'. 
  * - Jika panjang nomor KTP dibawah 4 angka atau nomor KTP tidak diisi, maka keluarkanlah output 
  * 'NOMOR KTP TIDAK VALID'.
  * - Untuk soal ini, terdapat 4 lokasi alamat: 'Jakarta', 'Surabaya', 'Yogyakarta', dan 'Bandung'. Selain keempat alamat tersebut, maka program akan mengeluarkan 
  * 'Alamat tidak diketahui'. Saat kalian membuat program, jangan lupa untuk menangani kasus-kasus input kota yang tidak ada dalam daftar.
  * Masing-masing lokasi memiliki harga dasar paket yang berbeda:
  *     - Jakarta   100000
  *     - Surabaya   50000
  *     - Yogyakarta 45000
  *     - Bandung    90000
  * -Jenis rumah ada 3 macam: 'normal', 'large', 'kosan'. Jika jenis rumah tidak ada di dalam ketiga rumah tersebut, program akan mengeluarkan output 'Jenis rumah salah'
  * Masing-masing jenis rumah akan mendapatkan biaya yang berbeda-beda. Namun, jika jenis rumah adalah 'kosan' maka tidak boleh mendaftar ke program ini.
  *     - Biaya 'normal': 30000
  *     - Biaya 'large' : 50000
  * Buatlah program yang akan menghitung biaya total dari paket Indiehome tersebut. Program tersebut akan mengoutput:
  * 'NAMA_PENDAFTAR NO_KTP TOTAL_BIAYA'
  * contoh: 'Rani 10049581293 500000'
  * 
  * RULES :
  * - DILARANG MENGGUNAKAN BUILT-IN FUNCTION / METHODS KECUALI .length
  * - HARUS MENULIS PSEUDOCODE / ALGORITMA, TIDAK MENULIS = 0!
  * 
  */

let name = 'ari'; // silakan berikan nilai bebas
let id_number = '22'; //silahkan berikan nilai bebas
let address = 'Jakarta' //bisa diisi 4 kota yang disebutkan diatas
let house_type = 'rumah'; //bisa diisi dengan 3 jenis rumah diatas

function cekHarga(nama, nomor_ktp, alamat, jenis_rumah) {
  
}

console.log(name, id_number, address, house_type)

/**
 * Seseorang akan mendaftar paket Indiehome terbaru. Buatlah program untuk menghitung harganya. Untuk mendaftar, dia perlu menyertakan nama, nomor ktp, alamat, serta jenis rumah.
 * Jika nama tidak diisi, program akan mengoutput 'NAMA HARUS DIISI!'.
 * - Jika panjang nomor KTP dibawah 4 angka atau nomor KTP tidak diisi, maka keluarkanlah output
 * 'NOMOR KTP TIDAK VALID'.
 * - Untuk soal ini, terdapat 4 lokasi alamat: 'Jakarta', 'Surabaya', 'Yogyakarta', dan 'Bandung'. Selain keempat alamat tersebut, maka program akan mengeluarkan
 * 'Alamat tidak diketahui'. Saat kalian membuat program, jangan lupa untuk menangani kasus-kasus input kota yang tidak ada dalam daftar.
 * Masing-masing lokasi memiliki harga dasar paket yang berbeda:
 *     - Jakarta   100000
 *     - Surabaya   50000
 *     - Yogyakarta 45000
 *     - Bandung    90000
 * -Jenis rumah ada 3 macam: 'normal', 'large', 'kosan'. Jika jenis rumah tidak ada di dalam ketiga rumah tersebut, program akan mengeluarkan output 'Jenis rumah salah'
 * Masing-masing jenis rumah akan mendapatkan biaya yang berbeda-beda. Namun, jika jenis rumah adalah 'kosan' maka tidak boleh mendaftar ke program ini.
 *     - Biaya 'normal': 30000
 *     - Biaya 'large' : 50000
 * Buatlah program yang akan menghitung biaya total dari paket Indiehome tersebut. Program tersebut akan mengoutput:
 * 'NAMA_PENDAFTAR NO_KTP TOTAL_BIAYA'
 * contoh: 'Rani 10049581293 500000'
 *
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN FUNCTION / METHODS
 * - HANYA diperbolehkan untuk mengambil properties .length dari String
 *
 */

var name = 'Rani' // silakan berikan nilai bebas
var nomor_ktp = '10049581293' //silahkan berikan nilai bebas
var alamat = 'Jakarta' // bisa diisi dengan alamat Jakarta atau Surabaya atau Yogyakarta atau Bandung selain alamat tersebut silahkan keluarkan output seperti yang diminta
var jenis_rumah = 'large' //bisa diisi dengan 3 jenis rumah normal atau large atau kosan selain jenis rumah tersebut silahkan keluarkan output seperti yang diminta

//tulislah kode disini
var biaya = 0;
if (name === '') {
  console.log('NAMA HARUS DIISI!');
  biaya -= 1000000000;
}
if (nomor_ktp.length < 4) {
  console.log('NOMOR KTP TIDAK VALID');
  biaya -= 1000000000;
}

if (alamat === 'Jakarta' ) {
  biaya += 100000;
}
else if (alamat === 'Surabaya') {
  biaya += 50000;
}
else if (alamat === 'Yogyakarta') {
  biaya += 45000;
}
else if (alamat === 'Bandung') {
  biaya += 90000;
}
else {
  console.log('Alamat tidak diketahui');
  biaya  -= 1000000000;
}

if(jenis_rumah === 'normal') {
  biaya += 30000;
}
else if (jenis_rumah === 'large') {
  biaya += 50000;
}
else if (jenis_rumah === 'kosan') {
  console.log('tidak boleh mendaftar ke program ini');
  biaya -= 1000000000;
}
else {
  console.log('Jenis rumah salah');
  biaya -= 1000000000;
}

if(biaya > 0){
  console.log(name + ' ' + nomor_ktp + ' ' + biaya);
}