function test(arr){

    var result = []
    for (let i = 0; i < arr.length; i++) {
        var flag = true
        for (let j = 0; j < result.length; j++) {
            if (arr[i] == result[j]) {
                flag = false
            }            
        }
        if (flag == true) {
            result.push(arr[i])
        }
    }
    return result
}

var array = ["meja","meja","sepatu","buku","buku","buku","meja"]


console.log(test(array))

