function deret(arr) {
 

    var tampung = []
    var hasil = 0

    if (arr[0] < arr[1]) {
        for(var i = 0; i < arr.length-1; i++){
            //menanpung var tampung di parameter
            tampung += arr[i+1] / arr[i]
            if (tampung.length > 1 && tampung[i] === tampung[i-1]) {
                hasil +=1   
            }
        }
        // return hasil === (tampung.length-1)
    }



    return hasil === (tampung.length-1)

}







 // TEST CASES
 console.log(deret([1, 3, 9, 27, 81])); // true
 console.log(deret([2, 4, 8, 16, 32])); // true
 console.log(deret([2, 4, 6, 8])); // false
 console.log(deret([2, 6, 18, 54])); // true
 console.log(deret([1, 2, 3, 4, 7, 9])); // false