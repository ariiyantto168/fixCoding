
var students = [
    {
        name: 'taufik',
        score: 60
    },
    {
        name: 'audrick',
        score: 60
    },
    {
        name: 'ayu',
        score : 100
    }
]


// cari rata
// yg lulus >= 65

var total = 0;
for(var i = 0; i < students.length; i++){
    total += students[i].score
}
ratarata = total / students.length

for(var j = 0; j < students.length; j++){
    if(students[j].score >= 65){
        console.log('lulus')
    }else{
        console.log('belum lulus')
    }
}
