function morph2D(text) {
    var hitung = text.length
    var arr = []
    var col = Math.ceil(Math.sqrt(hitung))
    var number = 0
    var perkalian = col * col
    while (number < perkalian) {
        for (let i= 0;i<col;i++) {
            var temp = []
            for (let j=0;j<col;j++) {
                if (number >= hitung) {
                    temp.push('*')
                    number++;
                } else {
                    temp.push(text[number])
                     number++;
                }
            }
            arr.push(temp)
        }
    }
return arr;
}

console.log(morph2D('abcdef')) 
/**
[ 
  [ 'a', 'b', 'c' ], 
  [ 'd', 'e', 'f' ], 
  [ '*', '*', '*' ] 
]
**/
console.log(morph2D('12345678905')) 
/**
[
  [ '1', '2', '3', '4' ],
  [ '5', '6', '7', '8' ],
  [ '9', '0', '5', '*' ],
  [ '*', '*', '*', '*' ]
]
 */

console.log(morph2D('abc'))
/**
 * [ 
 *  [ 'a', 'b' ], 
 *  [ 'c', '*' ] 
 * ]
 * */