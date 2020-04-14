
var students = [
    {
        name: 'taufik',
        age: 30,
        scores: [90,80,70]
    },
    {
        name: 'audrick',
        age: 22,
        scores: [100,100,100]
    },
    {
        name: 'ayu',
        age: 20,
        scores: [99,100,80]
    },
]

// rata-rata
for(var i = 0; i < students.length; i++){
    students[i].avg = 0
    for(var j = 0; j < students[i].scores.length; j++){
        students[i].avg += students[i].scores[j]
    }
    students[i].avg /= students[i].scores.length
}

// sort nilai
for(var i = 1; i < students.length; i++){
    for(var j = 0; j < i; j++){
        if (students[i].avg > students[j].avg) {
            var tukar = students[i].avg
            students[i].avg = students[j].avg
            students[j].avg = tukar
        }
    }
}

// rangking
for(var i = 0; i < students.length; i++){
    students[i].ranking = i+1
}

// mencari nilai umur di atas 20 ke atas
// for(var i = 0; i < students.length; i++){
//     if (students[i].age > 20) {
//         console.log(students[i])
//     }
// }

var tinggi = students[0].scores[0]
var studentsIndex = 0
for(var i = 1; i < students.length; i++){
    if (students[i].scores[0] > tinggi) {
        tinggi = students[i].scores[0]
        studentsIndex = i
    }
}
console.log(students[studentsIndex])



