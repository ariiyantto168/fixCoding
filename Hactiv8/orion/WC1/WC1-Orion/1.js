/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * 'steps' adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan,
 * lokasi yang sudah di lewati oleh penambang, akan menjadi kosong
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 * Dan jika variable mine yang di tambang di console.log maka penampakan terakhirnya adalah seperti ini:
 *    [
 *      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 *      [' ', ' ', ' ', ' ', 'd', '#', '#'],
 *      ['#', '#', '#', 'g', '#', '#', '#']
 *    ]
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf
 */

function mineTycoon(mine, steps) {
    //implementasi function disini!
    let stepCount = 0;

  let hasilMining = [];
  let minerals = [];

  let countCopper = 0;
  let countSilver = 0;
  let countGold = 0;
  let countDiamond = 0;

  for (i = 0; i < mine.length; i++) {
    steps -= stepCount;

    for (j = 0; j < steps; j++) {
      if (mine[i][j] == undefined) {
        break;
      }

      if (mine[i][j] == 'c') {
        countCopper++;
        mine[i][j] = ' ';
      } else if (mine[i][j] == 's') {
        countSilver++;
        mine[i][j] = ' ';
      } else if (mine[i][j] == 'g') {
        countGold++;
        mine[i][j] = ' ';
      } else if (mine[i][j] == 'd') {
        countDiamond++;
        mine[i][j] = ' ';
      } else {
        mine[i][j] = ' ';
      }
      stepCount = j + 1;
    }
  }
  if (countCopper) {
    minerals.push(countCopper, 'copper');
  }
  if (countSilver) {
    minerals.push(countSilver, 'silver');
  }
  if (countGold) {
    minerals.push(countGold, 'gold');
  }
  if (countDiamond) {
    minerals.push(countDiamond, 'diamond');
  }

  if (minerals.length) {
    hasilMining.push(minerals);
  }
  return hasilMining;
}

var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine2, 20));
// [[2, copper], [1, diamond]]

var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineTycoon(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]