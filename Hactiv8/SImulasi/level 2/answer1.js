function hitungSaya(nama) {
  var hasil = {};
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  for (var a = 0; a < abjad.length; a++) {
      for (var i = 0; i < nama.length; i++) {
          for (var j = 0; j < nama[i].length; j++) {
              if (abjad[a] == nama[i][j]) {
                  if (hasil[nama[i][j]] === undefined) {
                      hasil[nama[i][j]] = 0
                  }
                  hasil[nama[i][j]] += 1
              }
          }
      }
  }
  return hasil;
}
console.log(hitungSaya(['fadhil', 'ismail', 'budi', 'untung']));

/*
{ a: 2,
  b: 1,
  d: 2,
  f: 1,
  g: 1,
  h: 1,
  i: 4,
  l: 2,
  m: 1,
  n: 2,
  s: 1,
  t: 1,
  u: 3 }
*/

console.log(hitungSaya(['andrean', 'khairil', 'rizqa', 'venita','tubagus','fadhlan']));
/*
{ a: 8,
  b: 1,
  d: 2,
  e: 2,
  f: 1,
  g: 1,
  h: 2,
  i: 4,
  k: 1,
  l: 2,
  n: 4,
  q: 1,
  r: 3,
  s: 1,
  t: 2,
  u: 2,
  v: 1,
  z: 1 }
*/