// sort berdasarkan angka atau uang terbesar dan terkecil

var list = [
    ['Ayam Bakar', 25],
    ['Sphageti', 38],
    ['Pizza', 53],
    ['Mie Ayam', 36],
    ['Ikan Bakar', 42],
    ['Sop Buah', 13]
]



for (var i = 1; i < list.length; i++) {
    for (var j = 0; j < i; j++) {
        if (list[i][1] > list[j][1]) {
            var tukar = list[i];
            list[i] = list[j];
            list[j] = tukar;
        }
    }
}

console.log(list)


