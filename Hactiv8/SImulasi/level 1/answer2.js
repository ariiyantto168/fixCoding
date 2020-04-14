/*
   terdapat sebuah function createBoard memiliki 2 parameter rows dan columns untuk membuat multidimensi array jika rows 3 maka memiliki
   3 multidimensi array dan jika columns nya memiliki 4 maka 1 rows memiliki 4 data lihatlah hasil output yang di koment agar kalian mengerti 

*/

function createBoard(rows, colums){
    var kamus = 'abcdefghijklmnoprstuwvxyz'

    var newArray = []
    var x = 0
    
    for(var i=0; i < rows; i++){
      var arr = []
      for(var j = 1; j <=colums; j++){
          arr.push(kamus[x])
          x++
      }
      newArray.push(arr)
    }
    return newArray
}

console.log(createBoard(4 , 3))
  /*

  [ 'a', 'b', 'c' ],
  [ 'd', 'e', 'f' ],
  [ 'g', 'h', 'i' ],
  [ 'j', 'k', 'l' ]

  */

 console.log(createBoard(4, 5));
 /*
 [
    [ 'a', 'b', 'c', 'd', 'e' ],
    [ 'f', 'g', 'h', 'i', 'j' ],
    [ 'k', 'l', 'm', 'n', 'o' ],
    [ 'p', 'r', 's', 't', 'u' ] 
 ]
   */