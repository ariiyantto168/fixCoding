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

/**
 * PSEUDOCODE:
 * READ ARRAY PARAMETER AS ARR
 * IF ARRAY IS EMPTY THEN RETURN "Tidak ada orang dalam antrian."
 * ELSE IF ARR LENGTH EQUALS TO ONE THEN RETURN "Orang yang berikutnya dipanggil: ${FIRST ELEMENT}. Isi sisa antrian kosong."
 * ELSE
 *   STORE NAMES AS EMPTY STRING
 *   FOR LOOP THROUGH ARR WITH INDEX I STARTING FROM 1 UP TO LAST ELEMENT
 *      IF LAST ELEMENT THEN NAMES EQUALS TO NAMES APPENDED WITH "{NAMES AT INDEX I}."
 *      ELSE NAMES EQUALS TO NAMES APPENDED WITH "{NAMES AT INDEX I}, "
 *      ENDIF
 *   ENDFOR
 * ENDIF
 */

function fifo(arr) {
	if (!arr.length) return 'Tidak ada orang dalam antrian.';
	else if (arr.length == 1)
		return `Orang yang berikutnya dipanggil: ${arr[0]}. Isi sisa antrian kosong.`;
	let array = '';
	for (let i = 1; i < arr.length; i++) {
		if (i !== arr.length - 1) array += `${arr[i]}, `;
		else array += arr[i] + '.';
	}
	return `Orang yang berikutnya dipanggil: ${arr[0]}. Isi sisa antrian:  ${array}`;
}

console.log(fifo(['rifqy', 'ariel', 'ran', 'sinichi', 'rose'])); //Orang yang berikutnya dipanggil: rifqy. Isi sisa antrian:  ariel, ran, sinichi, rose.
console.log(fifo([])); //Tidak ada orang dalam antrian.
console.log(fifo(['rani'])); //Orang yang berikutnya dipanggil: rani. Isi sisa antrian kosong.
console.log(fifo(['ayu', 'audrick'])); //Orang yang berikutnya dipanggil: ayu. Isi sisa antrian:  audrick.
