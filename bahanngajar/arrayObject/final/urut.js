// // //  mengurutkan nilai tertinggi - terendah

var students = [
    {
        name : 'ariyanto',
        age : 23,
        friends : ['raldes', 'ade'],
        scores : 100
    },
    {
        name : 'taufik',
        age : 22,
        friends : ['vian', 'daniel'],
        scores : 80
    },
    {
        name: 'vian',
        age : 24,
        friends : ['ayu','audrick'],
        scores : 97
    },
    {
        name: 'daniel',
        age : 25,
        friends : ['vian','audrick'],
        scores : 85
    },
    {
        name: 'daniel',
        age : 25,
        friends : ['vian','audrick'],
        scores : 99
    }
]



    for (let i = 0; i < students.length; i++) {
        for (let j = i+1; j < students.length; j++) {
            if (students[j]['scores'] > students[i]['scores']) {
                var temp = students[j]
                students[j] = students[i]
                students[i] = temp
            }
            
        }
        
    }

console.log(students)