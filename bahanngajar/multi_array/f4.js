function string(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i][1])
        var total = 0
        for (let j = 0; j < arr[i][1].length; j++) {
            total += arr[i][1][j]
            
        }
        var rata2 = total / arr[i][1].length
        console.log(rata2)
        result.push(rata2, arr[i][0])
    
    }

    console.log(result)

    for (let k = 0; k < result.length; k++) {
        for (let l = 0; l < result.length; l++) {
            if (resul[i][0] > result[k][0]) {
                var temp = result[l]
                result[l] = result[k]
                result[k] = temp
            }
            
        }        
    }
    var hasil = []
    for (let m = 0; m < resul.length; m++) {
        hasil.push(result[m][1])
        
    }

    return hasil
}

var list = [
    ["audrick", [90,70,80]],
    ["TAUFICK", [90,70,80]],
]