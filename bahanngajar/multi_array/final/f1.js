var people = [
    ['semmi','male',37],
    ['ayu','female',37],
    ['kosasi','quotesinale', 81]
    ['aldy','male', 81]
]

function youngest(people){
var baby = 1000000
var nama = 0

    for (let i = 0; i < people.length; i++) {
        if (people[i][2] <= baby) {
            nama = i
            baby = people[i][2]
        }
        
    }
    return nama
}

console.log(youngest(people))

// var menOnly = []

// for (let i = 0; i < people.length; i++) {
//     if (people[i][1] == 'male') {
//         menOnly.push(people[i][0])
//     }
    
// }

// console.log(menOnly)