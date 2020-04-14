/**
 * Tugas kalian adalah membantu perekrutan tentara bayaran oleh perusahaan Umbrella Corp.
 * Perusahaan ini menginginkan tentara-tentara yang memenuhi standar perekrutan mereka yang tinggi.
 *
 * Function mercRecruiter menerima input berupa object yang merepresentasikan seorang tentara bayaran.
 * Function ini akan mengevaluasi apakah seorang tentara bayaran layak direkrut oleh Umbrella Corp. atau tidak.
 * Function ini menghasilkan output berupa objek yang berisi nama dan status kelulusan dari tentara bayaran tersebut.
 *
 * Format object yang merepresentasikan tentara
 * {
 *  name: '' (String berisi nama tentara tersebut),
 *  age : (Number umur tentara tersebut),
 *  skills: [] (Array berisi skills yang dimiliki tentara tersebut),
 *  weapons: [] (Array berisi senjata-senjata yang dimiliki tentara tersebut)
 * }
 *
 * Tiap ciri-ciri (name,....,weapons) dari para tentara memiliki bobot nilai masing-masing.
 * Jika nilai ciri-ciri tentara tersebut 60 atau keatas. Maka tentara bayaran tersebut akan di hire oleh Umbrella Corp.
 * Berikut ini adalah bobot poin-poin ciri-ciri:
 * 1. Jika nama tentara tersebut mengandung unsur '.' (Contoh: 'D.' , 'A.' ,'M.' ), maka tentara ini akan mendapatkan 20 poin
 * 2. Untuk umur tidak berpengaruh kepada penilaian
 * 3. Jika tentara memiliki skill 'assassin', 'sabotage', atau 'rambo'. Maka dia akan mendapatkan 10 poin untuk masing-masing skill tersebut
 * 4. Jika tentara memiliki senjata 'great sword', 'katana', 'missile', dan 'sniper' maka dia akan mendapatkan 20 poin untuk masing-masing senjata tersebut.
 *
 * Jika nilai dapat mencapai 60, maka tentara tersebut 'Passed'. Jika tidak, maka dia 'Failed'.
 *
 * Berikut ini format output: {name: 'Nama Tentara', status: 'Failed/Passed }
 *
 * Contoh:
 *
 * INPUT: {name: 'Drago', age: 15, skills: ['espionage', 'rambo'], weapons: ['knife', 'great sword', 'katana']}
 * OUTPUT: { name: 'Drago', status: 'Failed' }
 *
 *
 * Rules and Conditions:
 * 1. Asumsikan semua input pada test-case mengikuti batasan format object yang sudah dijelaskan diatas
 * 2. Dilarang menggunakan built-in function, kecuali:
 *     - .push()
 *     - .toUpperCase() dan .toLowerCase()
 *     - Built-in Math
 *     - Built-in Informative (.length, isNaN(), isArray(), isInteger)
 *     - Built-in function yang mengubah type data ( string --> number / number --> string )
 */

function mercRecruiter(mercenary) {
	// implementasikan function disini
	let extra = [
		['.', 20],
		[['assassin', 'sabotage', 'rambo'], 10],
		[['great sword', 'katana', 'missile', 'sniper'], 20],
	];
	let point = 0;
	for (let i = 0; i < mercenary.name.length; i++) {
		if (mercenary.name[i] == '.') point += extra[0][1];
	}
	for (let i = 0; i < mercenary.skills.length; i++) {
		for (let j = 0; j < extra[1][0].length; j++) {
			if (extra[1][0][j] == mercenary.skills[i]) {
				point += extra[1][1];
			}
		}
	}
	for (let i = 0; i < mercenary.weapons.length; i++) {
		for (let j = 0; j < extra[2][0].length; j++) {
			if (extra[2][0][j] == mercenary.weapons[i]) {
				point += extra[2][1];
			}
		}
	}
	status = point >= 60 ? 'Passed' : 'Failed';
	return { name: mercenary.name, status };
}

//Test Cases
console.log(
	mercRecruiter({
		name: 'Drago',
		age: 15,
		skills: ['espionage', 'rambo'],
		weapons: ['knife', 'great sword', 'katana'],
	})
); //{ name: 'Drago', status: 'Failed' }
console.log(
	mercRecruiter({
		name: 'D. Luffy',
		age: 30,
		skills: ['assassin'],
		weapons: ['gun', 'knife'],
	})
); //{ name: 'D. Luffy', status: 'Failed' }

console.log(
	mercRecruiter({
		name: 'Revan',
		age: 25,
		skills: ['jedi', 'sabotage', 'rambo'],
		weapons: ['lightsaber', 'sniper', 'missile'],
	})
); //{ name: 'Revan', status: 'Passed' }

console.log(
	mercRecruiter({
		name: 'C. Redfield',
		age: 25,
		skills: ['jedi', 'sabotage', 'rambo'],
		weapons: ['lightsaber', 'sniper', 'missile'],
	})
); //{ name: 'C. Redfield', status: 'Passed' }
