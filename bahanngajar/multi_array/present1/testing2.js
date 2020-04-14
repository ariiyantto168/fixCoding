var string = "aabccbbaabc"
var count = 0;

function counts(){
    var huruf = "abc"
    var result = []
    for (let j = 0; j < huruf.length; j++) {
        for (let i = 0; i < string.length; i++) {
            if (huruf[j] === string[i]) {
                count++
            }
        }
        result.push([huruf[j], count])
    }
    
    return result
    // console.log(result)

}
console.log(counts())
// console.log(counts())
// [
//     ["a". 4],
//     ["b", 5],
//     ["c", 3]
// ]