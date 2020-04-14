/* 

menentukan jarak antara dari character o dan x 
pada array multidimensi, preview : 
[
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]

[EXAMPLE]
console.log(jarak([
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]))

step by step solving :
[
    ['', '', 'o',''],
    ['', '', '1',''],
    ['', '', '2',''],
    ['x5','4','3','']
]
jika kita perhatikan urutan angka - angka diatas, maka jarak antara 
o dan x adalah 5. dimana posisi x dihitung sebagai 1 langkah 

maka output : 5
*/

function jarak(board) {
  // your code here
  
}

console.log( jarak([
   ['','','o',''],
   ['','','',''],
   ['','','',''],
   ['x','','','']
])) // 5

console.log( jarak([
   ['','','',''],
   ['','x','',''],
   ['','','',''],
   ['o','','','']
])) // 3

console.log( jarak([
  ['','','','o'],
  ['','','',''],
  ['','','',''],
  ['x','','','']
])) // 6

console.log( jarak([
  ['','','','x'],
  ['','','',''],
  ['','','',''],
  ['','','','o']
])) // 3
