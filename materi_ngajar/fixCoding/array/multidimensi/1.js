    // membuat array multidimensi board

    function createBoard(rows, columns) {
        // function akan membuat array multidimensi untuk membuat papan dengan pola:
        /*
        angka ke samping sesuai panjang columns
        angka ke bawah sesuai jumlah rows
        mis: createBoard(4, 3)
        [
          [1, 2, 3]
          [4, 5, 6]
          [7, 8, 9]
          [10, 11, 12]
        ]
        */
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
      
      console.log(createBoard(4, 3));
    // console.log(createBoard(5, 4));