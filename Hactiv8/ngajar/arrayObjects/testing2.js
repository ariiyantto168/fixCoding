function hitungSaya(nama) {
    var hasilArray = [];
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
    hasilArray.push(hasil);
    return hasilArray;
}
  console.log(hitungSaya(['fadhil', 'ismail', 'budi', 'untung']));