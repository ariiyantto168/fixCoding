// // //  mengurutkan nilai tertinggi - terendah

var students = [
    {
        name : 'ariyanto',
        matkul : {
            matematika: 77,
            bahasaIndonesia: 80,
            bahasaInggris: 66,
            IPA: 80,
            IPS: 88
        }
    },
    {
        name : 'taufik',
        matkul : {
            matematika: 100,
            bahasaIndonesia: 77,
            bahasaInggris: 70,
            IPA: 84,
            IPS: 88
        }
    },
    {
        name : 'ayu',
        matkul : {
            matematika: 100,
            bahasaIndonesia: 80,
            bahasaInggris: 66,
            IPA: 80,
            IPS: 88
        }
    },
    {
        name : 'Shely Endah P',
        matkul : {
            matematika: 80,
            bahasaIndonesia: 90,
            bahasaInggris: 88,
            IPA: 70,
            IPS: 78
        }
    },
]

   
// console.log(students)

for (let i = 0; i < students.length; i++) {
    var total = [0,0]
    for (var key in students[i]['matkul']) {
        total[0] += students[i]['matkul'][key]  
        total[1]++ 
    }
    students[i]['ratarata'] = total[0] / total[1]
    // console.log(total)
}
console.log(students)



