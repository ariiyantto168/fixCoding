// sort berdasarkan karakter

var list = [
    ['Ayam Bakar', 25000],
    ['Sphageti', 38000],
    ['Pizza', 53500],
    ['Mie Ayam', 36000],
    ['Ikan Bakar', 42000],
    ['Sop Buah', 13000]
]

for (let i = 1; i < list.length; i++) {
    for (let j = 0; j < i; j++) {
        if (list[i][0] < list[j][0]) {
            var temp = list[i];
            list[i] = list[j];
            list[j] = temp; 
        }
    }
}

console.log(list)