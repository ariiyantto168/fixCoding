// multidimensi 

// var studentsName = [
//     ['ari', 'male'],
//     ['ayu', 'female'],
//     ['taufik', 'male']
// ]

// // console.log(studentsName.push(['vian', 'male']))
// // console.log(studentsName)

// console.log(studentsName[0][0])

// var todos = [

//     ["makan", 3],
//     ["mandi", 2],
//     ["belajar", 4],
//     ["game", 7]
// ]

// var log = ["game","makan", "belajar", "mandi"]

// for (let i = 0; i < log.length; i++) {
//     for (let j = 0; j < todos.length; j++) {
//         if (log[i] === todos[j][0]) {
//             todos[j][1]++;
//         }
        
//     }
// }

// console.log(todos)  




// var nama = [
//     ["a", "r", "i"],
//     ["y","a","n","t","o"]
// ]

// var a = "";
// var b = []

// for(var i = 0; i < nama.length; i++){
//     // console.log(nama[i])
//     for(var j = 0; j < nama[i].length; j++){
//         b.push(nama[i][j]);
//         a += nama[i][j].toString()
//     }
// }

// console.log(a)
// // ariyanto

// var bintang = [
//     ['*','r','*','*','o','i','*'],
//     ['y','o','t','*','y','*','i'],
//     ['g','*','*','k','k','*','o'],
//     ['g','j','k','h','k','*','*'],
//     ['g','j','*','h','k','*','*']
// ];

// var count = 0;

// for(var i = 0; i < bintang.length; i++){
//     // console.log(bintang[i])
//     for(var j = 0; j < bintang[i].length; j++){
//         if(bintang[i][j] === "*"){
//             count++
//         }
//     }
// }

// console.log(count)

// // output : 14


// [1,2,3,4,5,6,7,8,9,10,11,12]
/*
[
[1,2,3],
[4,5,6],
[7,8,9],
[10,11,12]
]
*/

// function createBoard(rows, columns) {
//     var newArray = [];
//     var x = 1;
    
//     for(var i=1; i<=rows; i++){
//       // console.log(i);
      
//       var arr = [];
//       for(var j=1; j<=columns; j++){
//         // console.log(x++);
//         arr.push(x++);
//       }
//       newArray.push(arr);
//     }
//     return newArray;
//   }
  
//   console.log(createBoard(4, 3));