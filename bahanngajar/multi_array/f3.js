

function sortSCore(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j][1] > arr[i][1]) {
                var temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
                // console.log(arr)
            }
            
        }
        
    }
    return arr
}




var nilai = [
    ['Padul', 70],
    ['yoyok', 100],
    ['amalia', 90],
    ['ridwan', 78],
    ['Padul', 88]
]

console.log(sortSCore(nilai))