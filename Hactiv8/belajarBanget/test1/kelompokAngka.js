function angka(arr) {
    
    let tampung = []
    for (let i = 0; i < 3; i++) {
        tampung.push([])
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] % 3 === 0) {
            tampung[2].push(arr[j])
        }else if (arr[j] % 2 !== 0) {
            tampung[1].push(arr[j])
        }else if (arr[j] % 2 === 0) {
            tampung[0].push(arr[j])
        }
        
    }

    return tampung


}

console.log(angka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(angka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(angka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(angka([])); // [ [], [], [] ]
console.log(angka([5,6,7,8,10]));
