function target(arr) {
    // var x = []
    // var o = []
    // for(let i = 0; i < testing.length; i++){
    //  if(testing[i] === 'x'){
    //      x.push(i)
    //  }else if(testing[i] === 'o'){
    //     o.push(i)
    //  }
    // }
    // // return x
    // if (x.length == 0) {
    //     return 0;
    // }
    // else{
    //     var hasilAri = 0
    //     for (let j = 0; j < x.length; j++) {
    //         var temp = x[j] - o[0]
    //         if (temp < 0) {
    //             temp = temp * -1
    //         }
    //         else if (hasilAri == 0 || temp < hasilAri ){
    //             hasilAri = temp
    //         }
            
    //     }
    // }

    // return hasilAri
    var posX = [];
    var posO = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            posX.push(i);
        }
        else if (arr[i] === 'o') {
            posO.push(i);
        }
    }

    if (posX.length == 0) {
        return 0;
    }
    else {
        var hasil = 0;
        for (let j = 0; j < posX.length; j++){
            var temp = posX[j]-posO[0];

            if (temp < 0) {
                temp = temp * -1;
            }
            
            if (hasil == 0 || temp < hasil){
                hasil = temp;
            }
        }
    }
    return hasil;
}

// TEST CASES
console.log(target([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(target(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(target(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(target([' ', ' ', 'o', ' '])); // 0
console.log(target([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2