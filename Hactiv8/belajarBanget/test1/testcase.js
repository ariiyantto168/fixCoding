/**


  Diberikan sebuah function change dimana menerima inputan berupa number dan karakter.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan angka maka diganti menjadi karakter 'o'
  - jika value merupakan karakter maka diganti menjadi karakter 'x'
  - jika value merupakan simbol '@#$%^&*' di ganti dengan 'y'
  -  

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 'a', 'b' ],
            [ '#', 5, 4 ],
            [ '*', 'a', 9 ]
          ]
  output:
          [
            [o, x, x],
            [y, o, o],
            [y, x, o]
          ]

**/


function change(arr) {
    // your code here
    
  }
  
  console.log(change([
      ['a','a',4,5,'$'],
      ['@','$',5,'d','#'],
      [9,8,'g','t','%'],
  ]));

/**
 * [ 
 * [x,x,o,o,x],
 * [y,y,o,x,y],
 * [o,p,x,x,y]
 * 
 * ]
  **/
  
 console.log(change([
  ['a','$',4,'*','$'],
  ['@','$',5,'d','#'],
  [9,8,'g','t','%'],
]));

/**
* [ 
* [x,y,o,y,x],
* [y,y,o,x,y],
* [o,p,x,x,y]
* 
* ]
**/

