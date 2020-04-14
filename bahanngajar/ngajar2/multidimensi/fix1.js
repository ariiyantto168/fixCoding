// looping menambahkan value

var list = [
    ['Ayam Bakar', 25],
    ['Sphageti', 38],
    ['Pizza', 53],
    ['Mie Ayam', 36],
    ['Ikan Bakar', 42],
]

var key = ["Ayam Bakar", "Sphageti", "Pizza", "Mie Ayam", "ikan bakar"]

// console.log(activity[0])
// console.log(activity[1][1])

for(var i = 0; i < key.length; i++){
    // console.log(key[i])
    for(var j = 0; j < list.length; j++){
        // console.log(activity[j])
        if(key[i] == list[j][0]){
            list[j][1]++;
        }
    }
}
console.log(list)

