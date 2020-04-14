/**
 * First in First Out (FIFO)
 *
 * Pada soal ini kalian diminta untuk membuat sebuah simulasi array yang merepresentasikan suatu queue (antrian).
 * Kalian akan diberikan sebuah array berisi nama-nama pengunjung sebagai input.
 * Dari urutan pengunjung ini, kalian harus membuat sebuah program yang akan mengembalikan orang pertama dalam queue dan sisa dari queue tersebut.
 *
 * Rules:
 * - Dilarang menggunakan built-in function selain .push()
 * - Wajib menuliskan PSEUDOCODE!
 */

function fifo(arr) {
	//implementasikan function ini
}

console.log(fifo(["rifqy", "ariel", "ran", "sinichi", "rose"])); //Orang yang berikutnya dipanggil: rifqy. Isi sisa antrian:  ariel, ran, sinichi, rose.
console.log(fifo([])); //Tidak ada orang dalam antrian.
console.log(fifo(["rani"])); //Orang yang berikutnya dipanggil: rani. Isi sisa antrian kosong.
console.log(fifo(["ayu", "audrick"])); //Orang yang berikutnya dipanggil: ayu. Isi sisa antrian:  audrick.
