/*
   terdapat sebuah function createBoard memiliki 2 parameter rows dan columns untuk membuat multidimensi array jika rows 3 maka memiliki
   3 multidimensi array dan jika columns nya memiliki 4 maka 1 rows memiliki 4 data lihatlah hasil output yang di koment agar kalian mengerti 

*/

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
  
  console.log(createBoard(3, 4));
  /*
  [ 
      [ 1, 2, 3, 4 ], 
      [ 5, 6, 7, 8 ], 
      [ 9, 10, 11, 12 ] 
  ]
  */

 console.log(createBoard(4, 5));
 /*
 [
    [ 1, 2, 3, 4, 5 ],
    [ 6, 7, 8, 9, 10 ],
    [ 11, 12, 13, 14, 15 ],
    [ 16, 17, 18, 19, 20 ] 
 ]
 */