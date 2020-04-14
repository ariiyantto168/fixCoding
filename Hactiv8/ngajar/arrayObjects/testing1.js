// console.log(student.push({
//     name: "daniel",
//     batch: 38,
//     score: [90,100,100]
// }))

// console.log(student)

// var newStudent = student.push({
//     name: "daniel",
//     batch: 38,
//     score: [90,100,100]
// })

// console.log(student)

// var student = [
//     {
//         name: "andrian",
//         batch: 38,
//         age: 27,
//         score: [90,80,70]
//     },
//     {
//         name: "fadhil",
//         batch: 38,
//         age: 25,
//         score: [90,80,100]
//     },
//     {
//         name: "ayu",
//         batch: 38,
//         age: 19,
//         score: [90,80,100]
//     },
//     {
//         name: "audrick",
//         batch: 38,
//         age: 19,
//         score: [90,80,100]
//     }

// ]



// student[0] = {
//     name: "testing1",
//     batch: 40,
//     score: [100,100,90]
// }

// student[0].name = "testing2"

// console.log(student)

// var hasil = []

// for(var i = 1; i < student.length; i++){
//     for(var j = 0; j < i; j++){
//         if (student[i].score > student[j].score) {
//             var tukar = student[i]
//             student[i] = student[j]
//             student[j] = tukar
//         }
//     }
// }
// for(var k = 0; k < student.length; k++){
//     var obj = {
//         name: student[k].name,
//         score: student[k].score
//     }
//     hasil.push(obj)
// }
// console.log(hasil)



// var hasil = []

//     for(var i = 1; i < student.length; i++){
//         for(var j = 0; j < i; j++){
//             if(student[i].score > student[j].score){
//                 var tukar = student[i]
//                 student[i] = student[j]
//                 student[j] = tukar
//             }
//         }
//     }
//     for(var n = 0; n < student.length; n++){
//         var obj = {
//             name: student[n].name,
//             score: student[n].score
//         }
//     hasil.push(obj)
//     }

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

// var student = [
//     {
//         name: 'daniel',
//         age: 27,
//         friend: ['ayu','audrick','taufick'],   
//         score: 80
//     },
//     {
//         name: 'taufick',
//         age: 20,
//         friend: ['ayu','audrick','taufick','ari'],
//         score: 90
//     },
//     {
//         name: 'ayu',
//         age: 27,
//         friend: ['ayu','audrick','taufick','alun'],
//         score: 88
//     },
//     {
//         name: 'maikell',
//         age: 19,
//         friend: ['ayu','audrick',],
//         score: 99
//     },
// ]



var student = [
    {
        name: "ayu",
        age: 19,
        friend: ['audrick', 'daniel', 'taufik'], //-> 0
        nilai:[90,80,90],
        score: 88
    },
    {
        name: "taufik",
        age: 30,
        friend: ['audrick', 'daniel',], // -> 1
        nilai:[90,80,90],
        score: 98
    },
    {
        name: "daniel",
        age: 19,
        friend: ['audrick','taufik', 'alun'], // -> 2
        nilai:[90,80,90],
        score: 90

    },
]


// for(var i = 0; i < student.length; i++){
//     var total = [0,0]
//     for(var key in student[i]['nilai']){
//         total[0] += student[i]['nilai'][key]
//         total[1]++
//     }
//     student[i]['ratarata'] = total[0] / total[1]
// }

// console.log(student)
// var hasil = []

//     for(var i = 1; i < student.length; i++){
//         for(var j = 0; j < i; j++){
//             if(student[i].score > student[j].score){
//                 var tukar = student[i]
//                 student[i] = student[j]
//                 student[j] = tukar
//             }
//         }
//     }
//     for(var n = 0; n < student.length; n++){
//         var obj = {
//             name: student[n].name,
//             score: student[n].score
//         }
//     hasil.push(obj)
//     }
// console.log(hasil)
