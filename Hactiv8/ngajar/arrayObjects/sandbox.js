

// var students = [
//     ["yoyok", 18],
//     ["Fadhil", 23],
//     ["junaidi", 24]
// ]

// var fields = ["name", "age"]
// var arr = []
// for (let i = 0; i < students.length; i++) {
//     var obj = {}
//     for (let j = 0; j < fields.length; j++) {
//         obj[fields[j]] = students[i][j]
        
//     }
//     arr.push(obj)
// }
// console.log(arr)




// console.log(students)


// // menampilan isi object dan menambah nilai umur
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name)
//     students[i].age++
//     console.log(students[i])
// }

// var students = [
//     {
//         name : 'ariyanto',
//         age : 23,
//         friends : ['raldes', 'ade'],
//         scores : 100
//     },
//     {
//         name : 'taufik',
//         age : 22,
//         friends : ['vian', 'daniel'],
//         scores : 80
//     },
//     {
//         name: 'vian',
//         age : 24,
//         friends : ['ayu','audrick'],
//         scores : 97
//     },
//     {
//         name: 'daniel',
//         age : 25,
//         friends : ['vian','audrick'],
//         scores : 85
//     },
//     {
//         name: 'ayu',
//         age : 25,
//         friends : ['vian','audrick'],
//         scores : 99
//     }
// ]

// var newStudents = {
//     name: 'ariyanto',
//     age: 24,
//     friends: ['vian','audrick','rahmat'],
//     scores: 88
// }

// students.push(newStudents)
// console.log(students)


// menampilkan umur

// var hasil = []
// for(var i = 0; i < students.length; i++){
    
//     if(students[i].age > 20){
//         var obj = {
//             name: students[i].name,
//             age: students[i].age
//         }
//     hasil.push(obj)
//     }

// }
// console.log(hasil)


// var students = [
//     {
//         name : 'audrick',
//         age : 23,
//         friend : ['raldes', 'ade'],
//         scores : 100
//     },
//     {
//         name : 'taufik',
//         age : 17,
//         friend : ['vian', 'daniel','ayu'],
//         scores : 80
//     },
//     {
//         name: 'vian',
//         age : 24,
//         friend : ['ayu','audrick'],
//         scores : 97
//     },
//     {
//         name: 'ariyanto',
//         age : 25,
//         friend : ['vian','audrick','ridwan'],
//         scores : 85
//     },
//     {
//         name: 'selly endah p',
//         age : 19,
//         friend : ['vian','audrick','ade','ozan'],
//         scores : 99
//     }
// ]

// var hasil = [];
// for (let i = 0; i < students.length; i++) {
//     if (students[i].friend.length > 2) {
//         var obj = {
//             name : students[i].name,
//             friend : students[i].friend
//         }
//         hasil.push(obj);
//     }
// }
// console.log(hasil);

// var hasil = []

// // sort nilai

// for(var i = 1; i < students.length; i++){
//     for (var j = 0; j < i; j++) {
//         if (students[i].scores > students[j].scores) {
//             var temp = students[i]
//             students[i] = students[j]
//             students[j] = temp
//         }
        
//     }
// }

// //membuat objeck
// for(var k = 0; k < students.length; k++){
//     var obj = {
//         name: students[k].name,
//         scores: students[k].scores
//     }
//     hasil.push(obj)
// }

// console.log(hasil)

// function hitungSaya(nama) {
//     var hasilArray = [];
//     var hasil = {};
//     var abjad = 'abcdefghijklmnopqrstuvwxyz';
//     for (var a = 0; a < abjad.length; a++) {
//         for (var i = 0; i < nama.length; i++) {
//             for (var j = 0; j < nama[i].length; j++) {
//                 if (abjad[a] == nama[i][j]) {
//                     if (hasil[nama[i][j]] === undefined) {
//                         hasil[nama[i][j]] = 0
//                     }
//                     hasil[nama[i][j]] += 1
//                 }
//             }
//         }
//     }
//     hasilArray.push(hasil);
//     return hasilArray;
// }
//   console.log(hitungSaya(['fadhil', 'ismail', 'budi', 'untung']));
 /**
 * a: 2,
 * b: 1,
 * d: 2,
 * f: 1,
 * h: 1,
 * i: 4,
 * l: 2,
 * m: 1,
 * n: 2,
 * s: 1,
 * u: 3,
**/
// array of objects


// var arr = []
// for(var i = 0; i < students.length; i++){
//     if (students[i].age > 20 ) {
//         arr.push(students[i])
//     }

// }
// console.log(arr)

// var hasil = []

// for(var i = 0; i < students.length; i++){
//     for (let j = 0; j < students.length; j++) {
//         if (students[i].scores < students[j].scores) {
//             var temp = students[i]
//             students[i] = students[j]
//             students = temp
//             // temp = students[i]   
//         }
        
//     }
    

// }
// // console.log(students)
// for (let k  = 0; k  < students.length; k ++) {
//     var obj = {
//         name: students[k].name,
//         scores: students[k].scores
//     }
    
//     hasil.push(obj)
// }

// console.log(hasil)

// var students = [
//     {
//         name: "ayu",
//         age: 23,
//         scores: 60,
//         friends: ["audric","taufan","ismail"]

//     },
//     {student[0]["name"] = "ariyanto"
// console.log(student)
//         name: "taufik",
//         age: 24,
//         scores:88,
//         friends: ["audric","taufan"]
//     },
//     {
//         name: "ridwan",
//         age: 19,
//         scores: 70,
//         friends: ["bobi","ridwan"]
//     }
// ]
// var hasil = []
// for (let i = 0; i < students.length; i++) {
//     if (students[i].friends.length > 2) {
//         hasil.push(students[i])
//     }
    
// }

// console.log(hasil)




// var nama = ["audrick", "ridwan", "ayu"]

// function hitungSaya(nama){
//     var counter = {}
//     for(var i = 0; i < nama.length; i++){
//         for(var j = 0; j < nama[i].length; j++){
//             if (counter[nama[i][j]] == null) {
//                 counter[nama[i][j]] = 1
//             }else{
//                 counter[nama[i][j]]++
//             }
//         }
//     }
//     return counter
// }

// console.log(hitungSaya(nama))

// function hitungSaya(nama){

//     var hasilArray = []
//     var hasil = {}
//     var abjad = "abcdefghijklmnopqrstuwvxyz"
//     for (let a = 0; a < abjad.length; a++) {
//         console.log(abjad[a])
//         for (let i = 0; i < nama.length; i++) {
//             for (let j = 0; j < nama[i].length; j++) {
//                if (abjad[a] == nama[i][j]) {
//                    if (hasil[nama[i][j]] === undefined) {
//                        hasil[nama[i][j]] = 0
//                    }
//                    hasil[nama[i][j]] +=1
//                }
                
//             }
            
//         }
        
//     }
//     // hasilArray.push(hasil)
//     // return hasilArray

    

// }


// console.log(hitungSaya(["audrick", "ridwan", "ayu"]))

// // 
// // [
// //     {
// //         a:3
// //         b
// //     }
// // ]
var students = [
    {
        name: 'taufik',
        age: 30,
        scores: 97
    },
    {
        name: 'audrick',
        age: 22,
        scores: 95
    },
    {
        name: 'ayu',
        age: 20,
        scores: 99
    },
]

var hasil = []

for(var i = 0; i < students.length; i++){
    for (let j = 0; j < students.length; j++) {
        if (students[i].scores < students[j].scores) {
            var temp = students[i]
            students[i] = students[j]
            students = temp
            // temp = students[i]   
        }
        
    }
    

}
// console.log(students)
for (let k  = 0; k  < students.length; k ++) {
    var obj = {
        name: students[k].name,
        scores: students[k].scores
    }
    
    hasil.push(obj)
}
console.log(hasil)


1 - review 
    - Array
    - Object
    