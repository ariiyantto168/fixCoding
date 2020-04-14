var students = [
    {
        name: 'ayu',
        age: 20,
        scores:[100,100,100]
    },
    {
        name: 'taufik',
        age: 24,
        scores:[100,80,100]
    },
    {
        name: 'audrick',
        age: 20,
        scores:[90,100,100]
    }
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
        if(students[i].avg > students[j].avg){
            var tukar = students[i]
            students[i] = students[j]
            students[j] = tukar
        }
    }
}

for(var i = 0; i < students.length; i++){
    students[i].ranking = i+1
}

var tinggi = students[0].scores[0]
var studentsIndex = 0

for(var i = 0; i < students.length; i++){
    if(students[i].scores[0] > tinggi){
        tinggi = students[i].scores[0]
        studentsIndex = i
    }
}
console.log(students[studentsIndex])