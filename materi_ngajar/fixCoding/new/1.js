// var items = ['spidol', 'Kabel']

// var result = []

// for (let i = 0; i < items.length; i++) {
//   result.push  
    
// }

// var nilai2 = [30,70,50,80]
// var total = 0

// for (let i = 0; i < nilai2.length; i++) {
//     total += nilai2[i]
    
// }

// console.log(total)

// var rata2 = total/nilai2.length
// console.log(rata2)

// var nilai2 = ["30","70","50","80"]
// var total = 0
// for (let i = 0; i < array.nilai2; i++) {
//     total += Number(nilai2[i])
// }

// console.log(total)


// var angka = [2221, 62273]


// function getGanjil(arr) {
//     var result = []
//     for (let i = 0; i < angka.length; i++) {
//         if (angka[i] % 2 != 0) {
//             result.push(angka[i])
//         }
        
//     }

//     return result.toString()
// }

// console.log(getGanjil(angka))



var nama = ['akmalia','ariyanto','taufiq']

function eyd(people) {
    var res = []

    for (let i = 0; i < nama.length; i++) {
        // console.log(people[i])
        // people[i][0] = people[i][0].toUpperCase()
        // console.log(people[i]) 
        var tampung = ''
        for (let j = 0; j < people[i].length; j++) {
            if (j == 0) {
                tampung += people[i]
            }else{
                tampung += people[i][j]
            }
            
        }  
        console.log(tampung)
    }
}

console.log(eyd(people))



// var nama = ['akmalia','ariyanto','taufiq','ayu','audrick']

// function eyd(people) {
//     var res = []

//     for (let i = 0; i < people.length; i++) {
//         var tampung = people[i][0].toUpperCase()
//         for (let j = 0; j < people[i].length; j++) {
//             if (j == 0) {
//                 tampung += people[i][j]
//             }
//             res.push(tampung)
//         }  
//             return res
//     }
// }

// console.log(eyd(people))


// // penamaan array
// // re assign array
// // push and pop
// // looping array

// function arr(arr1) {
//     var arr1 = [1, 2, 3]
// if (input == arr1) {
//     return true
// }
// return false
// }

// console.log(arr([1,2,3], [1,2,3]))