
var students = [
    {
        name: 'taufik',
        age: 30,
        scores: 100
    },
    {
        name: 'audrick',
        age: 22,
        scores: 99
    },
    {
        name: 'ayu',
        age: 20,
        scores: 88
    },
]

// rata-rata
var total = 0
var hasil = 0
for(var i = 0; i < students.length; i++){
        total += students[i].scores
        hasil = total / students[i].scores
}

console.log(hasil)