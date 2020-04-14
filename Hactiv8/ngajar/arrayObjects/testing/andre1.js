// // function getReport(studentGrades) {
// //     let result = [];
// //     for (var i = 0;  i < studentGrades.length; i++){
// //       var cek = false; 
// //       for (var j = 0; j < result.length; j++){
// //         if (studentGrades[i].classCode === result[j].classCode){ // kodingan sebelum nya if (studentGrades[i].classCode == 'A'){ // revisi menggunakan '===' untuk mengecek data langsung di classcode 'apakah class A,B,C'
// //             cek = true /// Dijalankan jika kondisi benar maka di jalankan ke if (!cek)
// //         }
// //       }



// //       if (!cek){
// //         var tampunganobj = {} // membuat tampungan teerlebih dahulu untuk object
// //         tampunganobj.classCode = studentGrades[i].classCode // tampunganobj.classCode(untuk mengambil key object classcode) = studentGrades[i].classCode(untuk mengambil data value classcdoe)
// //         tampunganobj.passed = [] // membuat tampungan array untuk passed di dalam object
// //         tampunganobj.failed = [] // membuat tampungan array untuk failed di dalam object
// //         result.push(tampunganobj) // data setelah di masukan ke tampunganobj di masukan kedalam array
// //       }

// //       if (studentGrades[i].score >= 70) { // baru kodisi punya mas di jalankan setelah membuat tampungan object classcode passed dan failed
// //         for (let j = 0; j < result.length; j++) { 
// //           if (result[j].classCode == studentGrades[i].classCode) {
// //             result[j].passed. push(studentGrades[i].name);
// //           }
// //         }
// //       } else {
// //         for (let j = 0; j < result.length; j++) {
// //           if (result[j].classCode == studentGrades[i].classCode) {
// //             result[j].failed.push(studentGrades[i].name);
// //           }
// //         }
// //       }
// //     }

// //     return result;
// //  }
// //   var studentGrades = [
// //     { name: 'John', score: 80, classCode: 'A' },
// //     { name: 'Mike', score: 60, classCode: 'B' },
// //     { name: 'Budi', score: 70, classCode: 'C' },
// //     { name: 'Siti', score: 50, classCode: 'A' },
// //     { name: 'Aaron', score: 10, classCode: 'A' },
// //     { name: 'Arthur', score: 10, classCode: 'C' },
// //     { name: 'Osass', score: 10, classCode: 'B' },
// //     { name: 'Yolo', score: 90, classCode: 'C' },
// //   ];
// //   console.log(getReport(studentGrades));

// function highestScore(students){
//     var obj = {}
//     for(var i = 0; i< students.length; i++){
//         if(obj[students[i].class] === undefined){
//             obj[students[i].class] = {}
//         }
//         var temp = 0
//         for (var j = 0; j<students.length ; j++){
//             if(students[j].class === students[i].class){
//                 if (temp < students[j].score){
//                     temp = students[j].score
//                     obj[students[i].class].name = students[j].name
//                     obj[students[i].class].score = temp
//                 }
//             }
//         }
//     }
    
//     return obj
// }

// console.log(highestScore([
//     {
//       name: 'Dimitri',
//       score: 90,
//       class: 'foxes'
//     },
//     {
//       name: 'Alexei',
//       score: 85,
//       class: 'wolves'
//     },
//     {
//       name: 'Sergei',
//       score: 74,
//       class: 'foxes'
//     },
//     {
//       name: 'Anastasia',
//       score: 78,
//       class: 'wolves'
//     }
// ]));

// console.log(highestScore([
//     {
//       name: 'Alexander',
//       score: 100,
//       class: 'foxes'
//     },
//     {
//       name: 'Alisa',
//       score: 76,
//       class: 'wolves'
//     },
//     {
//       name: 'Vladimir',
//       score: 92,
//       class: 'foxes'
//     },
//     {
//       name: 'Albert',
//       score: 71,
//       class: 'wolves'
//     },
//     {
//       name: 'Viktor',
//       score: 80,
//       class: 'tigers'
//     }
// ]));
function graduates(students){
    var obj = {}
    for(var i = 0; i< students.length; i++){
        if(obj[students[i].class] === undefined){
            obj[students[i].class] = []
        }
        var temp = 0
        for (var key in obj){
            if(key === students[i].class && students[i].score >= 75){
                obj[students[i].class].push(students[i])
            }            
        }        
    }
    for (var key in obj){
        for (var j = 0; j<obj[key].length; j++){
            delete obj[key][j].class
        }
    }
    return obj
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));


console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
]));