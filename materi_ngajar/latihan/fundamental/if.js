// Menggunakan letkata kunci, deklarasikan variabel bernama sale. Tetapkan nilai trueuntuk itu.
// Sekarang buat ifpernyataan. Berikan ifpernyataan kondisi dari sale. Di dalam blok kode ifpernyataan, console.log()string 'Time to buy!'.
// Perhatikan bahwa kode di dalam ifpernyataan dijalankan, karena 'Time to buy!'telah dicatat ke konsol.

// Di bawah saledeklarasi variabel, tetapi sebelum ifpernyataan, tetapkan kembali saleke false. Jalankan kode Anda dan amati apa yang terjadi, kami akan mengubah perilaku ini di latihan berikutnya
let sale = true;

sale = false;

if (sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}


// Kurang dari: <
// Lebih besar dari: >
// Kurang dari atau sama dengan: <=
// Lebih dari atau sama dengan: >=
// Adalah sama dengan: ===
// TIDAK sama dengan: !==


// Tulis if...elsepernyataan menggunakan operator perbandingan. Kondisi harus memeriksa apakah hungerLevellebih besar dari 7. Jika demikian, pernyataan bersyarat harus masuk 'Time to eat!',. Kalau tidak, itu harus login 'We can eat later!'.

// Setelah Anda tekan menjalankan, bermain-main dengan kondisi dengan mengutak-atik perbandingan hungerLeveldengan menggunakan operator yang berbeda seperti <=, >=, >, dan <.

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
};


// 1 .
// Di main.js ada dua variabel mooddan tirednessLevel.

// Mari kita buat if...elsepernyataan yang memeriksa apakah moodada 'sleepy'dan tirednessLevellebih besar dari 8.

// Jika kedua kondisi dievaluasi true, maka console.log()string 'time to sleep'. Kalau tidak, kita harus console.log() 'not bed time yet'.

// Setelah Anda menekan "Run", bermain-main dengan ||operator dan !operator! Apa yang terjadi jika Anda meniadakan nilai seluruh pernyataan dengan !dan beralih ke ||bukan &&?

let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel > 8) {
	console.log('time to sleep')
} else{
	console.log('not bed time yet');
}


// Ubah nilainya wordCountsehingga itu benar. Nilai ini harus tetap berupa angka.

// Setelah Anda melakukan perubahan ini dan menjalankan kode Anda, 'Great! You've started your work!'harus masuk ke konsol.


// Ubah nilainya favoritePhrasesehingga masih berupa string tetapi falsy.

// Setelah Anda melakukan perubahan ini dan menjalankan kode Anda, 'This string is definitely empty.'harus masuk ke konsol.


// 1.

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
// } else {
//   console.log('Better get to work!');
// }

// 2.

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Mari kita gunakan evaluasi hubung singkat untuk menetapkan nilai writingUtensil. Jangan diedit tool, kami akan kembali ke toolpada langkah berikutnya.

// Tetapkan writingUtensilnilai tooldan jika toolfalsy, tetapkan nilai default 'pen'.


let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

if (tool){
  writingUtensil = tool;
  
}else {
  writingUtensil = 'pen';
}

console.log(`The ${writingUtensil} is mightier than the sword.`);


// Refactor, atau edit, if...elseblok pertama yang menggunakan operator ternary.
// // Refactor if...elseblok kedua untuk menggunakan operator ternary.
// Perbaiki if...elseblok ketiga untuk menggunakan operator ternary.
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");



//  .
// Mari kita membuat program yang melacak perubahan lingkungan dengan musim. Tulis pernyataan bersyarat untuk mewujudkannya!

// Di main.js sudah ada if...elsepernyataan di tempat. Mari kita tambahkan else ifpernyataan yang memeriksa apakah seasonsama dengan 'winter'.

// Di dalam blok kode else ifpernyataan, tambahkan console.log()yang mencetak string 'It\'s winter! Everything is covered in snow.'.


// Tambahkan else ifpernyataan lain yang memeriksa apakah seasonsama dengan 'fall'.

// Di dalam blok kode else ifpernyataan yang baru saja Anda buat, tambahkan console.log()yang mencetak string 'It\'s fall! Leaves are falling!'.



// Tambahkan else ifpernyataan akhir yang memeriksa apakah seasonsama dengan 'summer'.

// Di dalam blok kode else ifpernyataan yang baru saja Anda buat, tambahkan console.log()yang mencetak string 'It\'s sunny and warm because it\'s summer!'


let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}