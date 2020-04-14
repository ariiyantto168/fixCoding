// var instructors = ["ayu","daniel","taufik"]

// // console.log(instructors[0])

// // for (let i = 0; i < instructors.length; i++) {
// //     console.log
    
// // }

// instructors.splice(1, 1, "audrick")
// console.log(instructors)

// var studentsName = [

//     ['fadhil',"male"],
//     ['fadhil',"male"],

// ]

// console.log(studentsName.push(["yoyok", "male"]))
// console.log(studentsName)


// var todos = [

//     ["makan", 3],
//     ["mandi", 2],
//     ["belajar", 1]
// ]

// var log = ["makan", "belajar", "mandi", "makan"]

// for (let i = 0; i < log.length; i++) {
//     if (log[i] === "makan") {
//         todos[0][1]
//     }else if (log[i] === "belajar"){
//         todos[1][1]
//     }else{
//         todos[2][1]
//     }
    
// }

// console.log(todos)



// sudah benar
var todos = [

    ["makan", 3],
    ["mandi", 2],
    ["belajar", 1]
]

var log = ["makan", "belajar", "mandi"]

for (let i = 0; i < log.length; i++) {
    for (let j = 0; j < todos.length; j++) {
        if (log[i] === todos[j][0]) {
            todos[j][1]--;
        }
        
    }
    
}

console.log(todos)