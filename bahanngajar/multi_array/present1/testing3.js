
// var numbers = [1,2,3]

// for (var i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length-1 ; j++) {
//         if (numbers[j] < numbers[j + 1]) {
//             var temp = numbers[j+1]
//             numbers[j+1] = numbers[j]
//             numbers[j] = temp
//         }
        
//     }
    
// }
// console.log(numbers)
// // output : 321

var numbers = [1,2,3,4,5,6,7,8,9]

for (var i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length-1 ; j++) {
        if (numbers[j] < numbers[j + 1]) {
            var temp = numbers[j+1]
            numbers[j+1] = numbers[j]
            numbers[j] = temp
        }
        
    }
    
}
console.log(numbers)