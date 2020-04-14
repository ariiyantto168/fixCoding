
var students = [
    {
        name: 'taufik',
        age: 30,
        scores: [90,80,70]
    },
    {
        name: 'audrick',
        age: 22,
        scores: [95,88,100]
    },
    {
        name: 'ayu',
        age: 20,
        scores: [99,100,80]
    },
]

for(var i = 0; i < students.length; i++){
    students[i].avg = 0
    for(var j = 0; j < students[i].scores.length; j++){
        students[i].avg += students[i].scores[j]
    }
    students[i].avg /= students[i].scores.length
}

for(var i = 1; i < students.length; i++){
    for(var j = 0; j < i; j++){
        if (students[i].avg > students[j].avg) {
            var tukar = students[i].avg
            students[i].avg = students[j].avg
            students[j].avg = tukar
        }
    }
}

for(var i = 0; i < students.length; i++){
    students[i].ranking = i+1
}

console.log(students)


