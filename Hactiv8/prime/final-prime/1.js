/**
 * Bioskop PrimeFive baru buka, bioskop ini memutarkan kembali film-film lama dan juga mengadakan promo 
 * terhadap harga tiketnya:
 *   - Penonton yang umurnya di bawah 13 tahun mendapatkan diskon sebesar 30%,
 *   - Penonton yang umurnya di antara 13 tahun - 20 tahun mendapatkan diskon sebesar 20%,
 *   - Penonton yang umurnya di atas 20 tahun mendapatkan diskon sebesar 10%.
 *
 * Semua film di bioskop ini memiliki harga tiket 35.000 rupiah. Tiap pengunjung bisa menonton lebih dari 1 film. 
 * Harganya ekonomis dengan promo dan tergolong murah untuk anak sekolah. Namun beberapa film memiliki batasan 
 * umur untuk 17 tahun keatas.
 * 
 * Sebagai contoh, jika pengunjung berumur 12 tahun dan hendak menonton salah satu dari film berikut ini:
 * - Beauty and the Beast
 * - 500 Days of Summer
 * - Twilight
 *  Maka pihak bioskop tidak mengizinkan pengunjungnya untuk menonton film ini.
 *
 * Buatlah sebuah function untuk mensimulasikan bioskop PrimeFive ini.
 * Function tersebut akan menerima input berupa object yang merepresentasikan pengunjung bioskop. 
 * Object tersebut memiliki nama, umur, dan list film yang akan di toton pengunjung.
 * Output yang diharapkan dari function tersebut adalah total harga tiket setelah promo dari semua film 
 * yang akan ditonton pengunjung.
 *
 * Note:
 *   - Dilarang menggunakan built-in function kecuali .push() dan Math
 *   - Jawaban harus disertai dengan pseudocode!!!!
 */
/**
 * Tuliskan pseudocode kalian di sini.
 */
function simulasiBioskop(visitor) {
    //implementasikan function disini!

}

//Test cases
console.log(
    simulasiBioskop({
        name: 'Acong',
        age: 25,
        watch_list: ['The Expendables', '500 Days of Summer', 'Twilight']
    })
)
// Acong membayar 94500 untuk menonton 3 film.

console.log(
    simulasiBioskop({
        name: 'Irfan',
        age: 10,
        watch_list: ['500 Days of Summer', 'Incredibles', 'Twilight']
    })
)
// Irfan membayar 24500 untuk menonton 1 film.