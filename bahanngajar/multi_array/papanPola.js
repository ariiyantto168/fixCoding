// // membuat array multidimensi board

function createBoard(rows, columns) {
    var newArray = [];
    var x = 1;
    
    for(var i=1; i<=rows; i++){
      // console.log(i);
      
      var arr = [];
      for(var j=1; j<=columns; j++){
        // console.log(x++);
        arr.push(x++);
      }
      newArray.push(arr);
    }
    return newArray;
  }
  
  console.log(createBoard(6, 5));
// console.log(createBoard(5, 4));


// multidmensi array

// ap fungsi multidimensi Array


// kumpulan dari beberapa array

// var pesanan = [
// ['mie ayam', 1],
// ['es teh manis', 1],
// ['nasi goreng', 1]
// ]
// // console.log(pesanan)

// // pesanan.push(['ayam goreng', 1])
// // console.log(pesanan)

// console.log(pesanan[1][0])


// [1,2,3,4,5,6,7,8,9,10,11,12]


// // menghitung bintang multdimensi array 
// [
//   ['*','a','*','b','*','*','c'],
//   ['a','*','b','z','e','*','c'],
//   ['y','i','d','z','f','g','e']
// ]

// // mengubah * menjadi #
// [
//   ['*','a','*','b','*','*','c'],
//   ['a','*','b','z','e','*','c'],
//   ['y','i','d','z','f','g','e']
// ]


// var nama = [
// ["a", "r", "i"],
// ["y","a","n","t","o"]
// ]
// // output : ari yanto

