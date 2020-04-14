var angka = [ 2, 5, 24, 57, 89, 100 ];
var terbesar = 0;
var terbesar1 = 0
for( i = 0; i < angka.length; i++ ){
  if(angka[i] > terbesar ){
    terbesar = angka[i];
  }
}

console.log(terbesar)