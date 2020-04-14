function hitungSaya(nama) {

    var  obj = {}
    var kamus = 'abcdefghijklmnopqrstuqfxyz'
    for(var a = 0; a < kamus.length; a++){
      // console.log(kamus[a])
      for(var i = 0; i < nama.length; i++){
        // console.log(nama[i])
        for(var j = 0; j < nama[i].length; j++){
          // console.log(nama[i][j])
          if(kamus[a] == nama[i][j]){
            // console.log(nama[i][j])
           if(obj[nama[i][j]] == undefined){
             obj[nama[i][j]] = 0
           }

           obj[nama[i][j]] +=1
          }
        }
    }
  }
    return obj
}
  console.log(hitungSaya(['fadhil', 'ismail', 'budi', 'untung']));
 /**
  * { 
  * a: 2,
  b: 1,
  d: 2,
  f: 2,
  g: 1,
  h: 1,
  i: 4,
  l: 2,
  m: 1,
  n: 2,
  s: 1,
  t: 1,
  u: 3 }
  */