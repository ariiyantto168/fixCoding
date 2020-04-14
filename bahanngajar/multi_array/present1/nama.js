var nama = [
    ["a", "r", "i"],
    ["y","a","n","t","o"]
    ]
    // output : ari yanto
var a = "";
var b = [];
for (let i = 0; i < nama.length; i++) {
    // console.log(nama[i])
    for (let j = 0; j < nama[i].length; j++) {
        b.push(nama[i][j]);
        a += nama[i][j].toString();
        // console.log(nama[i][j].toString());
        
    }
    // console.log(a);
}
console.log(a);




// console.log(a)

// var nilai = [
//     [80,90,100,70,70],
//     [90,70,78,90,80,]

// ]

// var sum = 0;


// console.log(nilai[1])
// for (let i = 0; i < nilai.length; i++) {
    
//     sum += nilai[i];
// }