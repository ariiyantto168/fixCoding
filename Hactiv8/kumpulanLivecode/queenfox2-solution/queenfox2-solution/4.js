/*
 * ==========
 * Kapal Noah
 * ==========
 *
 * Ketika Noah sedang memasukkan seluruh binatang yang ada ke dalam kapalnya (disebut sebagai Noah's Ark), dia mendapatkan sebuah masalah.
 * Dia memasukkan binatang-binatang tersebut dalam bentuk array of objects. Para binatang tidak terurut sehingga sulit untuk menempatkan mereka di dalam
 * kapalnya.
 * Untuk itu, Noah mendapatkan sebuah ide untuk mengelompokkan mereka ke dalam oject dengan key huruf depan dari masing-masing binatang tersebut dan valuenya berupa
 * array berisi binatang yang huruf depannya sesuai dengan key tersebut. Hal ini dikarenakan masing-masing object yang merepresentasikan binatang bisa memiliki isi property yang berbeda-beda.
 * Cara ini akan mempermudah Noah untuk memasukkan binatang ke dalam kapal karena binatang-binatang tersebut sudah dikelompokkan berdasarkan alfabet.
 *
 * Beginilah contoh output yang diharapkan:
 *  {
 *     a: [], b: [], ...
 *   }
 * PERHATIAN: Urutan key alfabet di dalam object tidak harus terurut, lihatlah contoh jawaban test-case
 *
 * Rules:
 * Dilarang menggunakan built-in function, kecuali:
 * - .push()
 * - .toUpperCase() dan .toLowerCase()
 * - Built-in Math
 * - Built-in Informative (.length, isNaN(), isArray(), isInteger)
 * - Built-in function yang mengubah type data ( string --> number / number --> string )
 *
 */

function groupArk(animals) {
	//Implementasikan function ini
	let result = {};
	for (let i = 0; i < animals.length; i++) {
		let exists = false;
		for (let letter in result) {
			if (animals[i].nama[0] == letter) {
				exists = true;
				result[letter].push(animals[i]);
			}
		}
		if (!exists) {
			result[animals[i].nama[0]] = [animals[i]];
		}
	}
	return result;
}

console.log(
	groupArk([
		{ nama: 'ayam', spesies: '', kelamin: 'jantan' },
		{ nama: 'gajah', spesies: 'mammalia', umur: 20 },
		{ nama: 'anoa', umur: 10 },
		{ nama: 'lalat' },
		{ nama: 'laron', kelas: 'insecta' },
		{ nama: 'zebra', spesies: 'mammalia' },
	])
);
/**
 {
 a: [
   { nama: 'ayam', spesies: '', kelamin: 'jantan' },
   { nama: 'anoa', umur: 10 }
 ],
 g: [ { nama: 'gajah', spesies: 'mammalia', umur: 20 } ],
 l: [ { nama: 'lalat' }, { nama: 'laron', kelas: 'insecta' } ],
 z: [ { nama: 'zebra', spesies: 'mammalia' } ]
}
*/

console.log(
	groupArk([
		{ nama: 'ayam', species: '', kelamin: 'jantan' },
		{ nama: 'gajah', species: 'mammalia', umur: 20 },
		{ nama: 'anoa', umur: 10 },
		{ nama: 'lalat' },
		{ nama: 'laron', kelas: 'insecta' },
		{ nama: 'zebra', kelas: 'mammalia' },
		{ nama: 'gurita', jenis: 'cephalopoda' },
		{ nama: 'penyu belimbing', umur: 50 },
		{ nama: 'kura-kura', spesies: 'tetsudae' },
		{ nama: 'kuda', jenis: 'mammalia' },
	])
);

/**
 {
 a: [
   { nama: 'ayam', species: '', kelamin: 'jantan' },
   { nama: 'anoa', umur: 10 }
 ],
 g: [
   { nama: 'gajah', species: 'mammalia', umur: 20 },
   { nama: 'gurita', jenis: 'cephalopoda' }
 ],
 l: [ { nama: 'lalat' }, { nama: 'laron', kelas: 'insecta' } ],
 z: [ { nama: 'zebra', kelas: 'mammalia' } ],
 p: [ { nama: 'penyu belimbing', umur: 50 } ],
 k: [
   { nama: 'kura-kura', spesies: 'tetsudae' },
   { nama: 'kuda', jenis: 'mammalia' }
 ]
}
*
*/
