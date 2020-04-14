var foo = [1, 2, 3, 4, 5];
console.log(foo);
// Array [ 1, 2, 3, 4, 5 ]
var bar = ["a", "b", "c"];
console.log(bar);
console.log(bar[1, 0])
// Array [ "a", "b", "c" ]
var baz = ["aku", 999, true, 0.085, null];
console.log(baz);
// Array [ "aku", 999, true, 0.085, null ]
console.log(typeof baz); // object

// change element aray
var change = ['andi', 'santi', 'joko']
change[0] = 'alex'
change[2] = 'ariyanto'
console.log(change)

console.log("Array 2 dimenssi")
var koordinat = [[2,5],[9,5],[3,5]]
console.log(koordinat[0][0]) // [0] mengakses array 1 dimensi elemen [0] mengakses nilai 2 
console.log(koordinat[0][1])
console.log(koordinat[1][0])
console.log(koordinat[2][0])

console.log("array 3 dimensi")
var tiga = [["makan"]]

console.log(tiga[0])

console.log("masih multi dimensi")

var multi = [
        ["sedang","belajar","javascript"],
        ["selamat","pagi","dunia"],
        ["a","b","c","d","e"]
];

console.log(multi[1][2])
console.log(multi[0][2])
console.log(multi[2][4])