/**
 * Bantulah rumah sakit untuk mengolah data pasien dengan cara menghitung biaya konsultasi dokter dan biaya pengobatan untuk masing-masing pasien yang masuk rumah sakit tersebut.
 * Untuk itu, buatlah sebuah aplikasi yang dapat membantu Rumah Sakit ini untuk mengolah data-data dari pasien-pasien tersebut.
 * Program ini akan dibagi menjadi berbagai macam function yang memiliki kegunaan yang berbeda-beda.
 *
 * Penyakit-penyakit yang bisa di diagnosa oleh RS tersebut tersedia di database penyakit dibawah ini.
 * Tiap penyakit berada di dalam Object db_penyakit. Masing masing penyakit adalah satu object (flu atau antrax), dengan property masing-masing penyakit:
 * - ciri: ciri-ciri dari penyakit tersebut
 * - obat: array multidimensi, dimana inner array nya berisi nama obat di indeks pertama, dan harga obat di indeks kedua
 * - konsultasi: yang merupakan biaya yang harus dikeluarkan untuk konsultasi ke dokter untuk penyakit tersebut
 *
 * Bacalah dengan teliti deskripsi dari masing-masing function yang harus kalian buat
 *
 * Rules:
 * - Untuk soal ini tidak ada batasan built-in function.
 *
 */

//database penyakit yang ada di rumah sakit tersebut.
var db_penyakit = {
	flu: {
		ciri: [
			'lemas',
			'sesak nafas',
			'ngilu',
			'tidak enak badan',
			'mual',
			'diare',
			'demam',
			'nyeri otot',
			'batuk kering',
			'gangguan pernafasan akut',
			'cairan di paru-paru',
			'sakit bagian abdominal',
			'tidak nafsu makan'
		],
		obat: [
			['kunyit', 10000],
			['jahe merah', 5000],
			['jahe kuning', 4000]
		],
		konsultasi: 1000000
	},

	antrax: {
		ciri: [
			'Sakit tenggorokan',
			'sulit bernafas',
			'demam',
			'tidak nyaman di dada',
			'nyeri otot',
			'nyeri saat menelan',
			'mual',
			'batuk darah',
			'lemas'
		],
		obat: [
			['antibiotik', 45000],
			['doksisilin', 20000],
			[('penicilin', 35000)]
		],
		konsultasi: 50000
	}
};

/**
 * Buatlah function untuk mencari apa penyakit pasien tersebut berdasarkan simptom yang ada.
 * Function ini menerima input berupa 1 pasien, dan database penyakit.
 * Jika jumlah simptom flu > jumlah simptom antrax, maka pasien tersebut menderita 'flu'. Berlaku juga sebaliknya
 * Jika jumlah simptom nya sama atau penyakit tidak ada di dalam database, maka pasien tersebut 'ambigu'.
 *
 */
function cariPenyakit(pasien, database) {
	var pasien_symptoms = pasien.keluhan;
	var count_flu = 0;
	var count_antrax = 0;
	for (let i = 0; i < pasien_symptoms.length; i++) {
		if (database.antrax.ciri.includes(pasien_symptoms[i])) {
			count_antrax++;
		}
		if (database.flu.ciri.includes(pasien_symptoms[i])) {
			count_flu++;
		}
	}
	if (count_flu > count_antrax) {
		return 'flu';
	} else if (count_antrax > count_flu) {
		return 'antrax';
	} else {
		return 'ambigu';
	}
}

//Test-case untuk membantu menguji function cariPenyakit
console.log(
	cariPenyakit(
		{
			nama: 'thanos',
			keluhan: ['sulit bernafas', 'lemas', 'demam', 'batuk darah']
		},
		db_penyakit
	)
); //Karena simptom untuk penyakit antrax lebih banyak, maka Thanos dinyatakan sakit 'Antrax.
//Output: 'antrax'

console.log(
	cariPenyakit(
		{ nama: 'heri wahyudianto', keluhan: ['mata berair', 'berkunang kunang'] },
		db_penyakit
	)
); // Output: 'ambigu'

console.log(
	cariPenyakit(
		{
			nama: 'joker',
			keluhan: ['nyeri otot', 'lemas', 'mual', 'batuk kering']
		},
		db_penyakit
	)
); //Karena simptom untuk penyakit flu lebih banyak, maka joker dinyatakan sakit flu.
//Output: 'flu'

/**
 * Function untuk mencari obat paling murah dari obat-obatan yang tersedia.
 * Function ini menerima input berupa nama penyakit, dan database. 
 * Function ini akan mengembalikan array berisi nama obat termurah di index pertama, dan harga obatnya di index kedua.
 * Namun, jika 'ambigu', maka function akan mengembalikan string 'tidak ada obat'.
 */
function cariObat(penyakit, database) {
	if (penyakit == 'ambigu') {
		return 'tidak ada obat';
	} else if (penyakit == 'flu') {
		var min = database.flu.obat[0];
		for (let i = 0; i < database.flu.obat.length; i++) {
			if (database.flu.obat[i][1] < min[1]) {
				min = database.flu.obat[i];
			}
		}
		return min;
	} else if (penyakit == 'antrax') {
		var min = database.antrax.obat[0];
		for (let i = 0; i < database.antrax.obat.length; i++) {
			if (database.antrax.obat[i][1] < min[1]) {
				min = database.antrax.obat[i];
			}
		}
		return min;
	}
}

console.log(cariObat('flu', db_penyakit)); //[ 'jahe kuning', 4000 ]
console.log(cariObat('antrax', db_penyakit)); //[ 'doksisilin', 20000 ]
console.log(cariObat('ambigu', db_penyakit)); //'tidak ada obat'

/**
 *
 * Buatlah function untuk mendapatkan biaya konsultasi ke Dokter. Function ini menerima input berupa nama penyakit tersebut dan
 * database penyakit diatas.
 * Function ini akan mengembalikan biaya konsultasi atau 'tidak perlu dokter' jika penyakitnya 'ambigu'
 *
 */
function cariHargaKonsultasi(penyakit, database) {
	if (penyakit == 'ambigu') {
		return 'tidak perlu dokter';
	} else if (penyakit == 'flu') {
		return database.flu.konsultasi;
	} else {
		return database.antrax.konsultasi;
	}
}

console.log(cariHargaKonsultasi('flu', db_penyakit)); //1000000
console.log(cariHargaKonsultasi('antrax', db_penyakit)); //50000
console.log(cariHargaKonsultasi('ambigu', db_penyakit)); //'tidak perlu dokter'

/**
 *
 * Function ini merupakan function utama yang akan memanggil function-function yang sudah dibuat diatas.
 * Function ini akan mengembalikan array of objects berisi nama pasien, nama penyakit yang diderita pasien tersebut, nama obat yang
 * diberikan ke pasien tersebut, dan biaya total yang harus dibayarkan oleh pasien tersebut.
 *
 * Jika pasien tersebut penyakitnya 'ambigu', maka biaya nya adalah 'tidak ada biaya'
 *
 * contoh output function ini:
 * [{nama: 'John Doe', penyakit: 'flu', obat: 'penisilin', biaya: 150000 }, .... , {nama: 'John Doe 2', penyakit: 'flu', obat: 'penisilin', biaya: 150000 }]
 * Untuk membuat function ini, gunakanlah function-function yang sudah dibuat diatas!
 *
 *
 *
 */
function diagnosaSemuaPasien(list_pasien, database) {
	var result = [];
	for (let i = 0; i < list_pasien.length; i++) {
		var temp = { nama: list_pasien[i].nama };
		var penyakit = cariPenyakit(list_pasien[i], database);
		var obat = cariObat(penyakit, database);
		var harga_dokter = cariHargaKonsultasi(penyakit, database);
		temp.penyakit = penyakit;
		if (penyakit == 'ambigu') {
			temp.obat = 'tidak ada obat';
			temp.biaya = 'tidak ada biaya';
			result.push(temp);
		} else {
			temp.obat = obat[0];
			temp.biaya = harga_dokter + obat[1];
			result.push(temp);
		}
	}
	return result;
}

//Test case untuk menguji function utama
console.log(
	diagnosaSemuaPasien(
		[
			{
				nama: 'heri wahyudianto',
				keluhan: ['mata berair', 'berkunang kunang']
			},
			{
				nama: 'joker',
				keluhan: ['nyeri otot', 'lemas', 'mual', 'batuk kering']
			},
			{
				nama: 'thanos',
				keluhan: ['sulit bernafas', 'lemas', 'demam', 'batuk darah']
			},
			{
				nama: 'bad boy',
				keluhan: ['cairan di paru-paru', 'sakit bagian abdominal']
			}
		],
		db_penyakit
	)
);
/**
 * Output:
 * [
  {
    nama: 'heri wahyudianto',
    penyakit: 'ambigu',
    obat: 'tidak ada obat',
    biaya: 'tidak ada biaya'
  },
  {
    nama: 'joker',
    penyakit: 'flu',
    obat: 'jahe kuning',
    biaya: 1004000
  },
  {
    nama: 'thanos',
    penyakit: 'antrax',
    obat: 'doksisilin',
    biaya: 70000
  },
  {
    nama: 'bad boy',
    penyakit: 'flu',
    obat: 'jahe kuning',
    biaya: 1004000
  }
]
 * 
 */