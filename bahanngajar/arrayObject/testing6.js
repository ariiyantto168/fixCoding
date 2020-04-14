var students = [
    {
        name: "fadil",
        age: 23,
        friend: ["ismail", "ridwan", "toni", "ishak"],
        scores: 90
    },
    // {
    //     name: "ismail",
    //     age: 19,
    //     friend: ["ridwan", "toni", "ishak"],
    //     scores: 90
    // },
    {
        name: "taufik",
        age: 20,
        friend: ["ridwan", "ishak", "doni"],
        scores: 80
    },
    // {
    //     name: "seni",
    //     age: 24,
    //     friend: ["ridwan", "ishak"],
    //     scores: 88
    // },
    // {
    //     name: "ihsan",
    //     age: 23,
    //     friend: ["ridwan", "ishak","idis"],
    //     scores: 88
    // },
]

// jangan menggunakan function
var result = []
for (let i = 0; i < students.length; i++) {
    var obj = {}
    if (students[i].age > 20) {

        var temp 
        temp = students[i]['age']
        temp.push(obj)
        console.log(obj)
    } 
    
 
}

// console.log(students)


