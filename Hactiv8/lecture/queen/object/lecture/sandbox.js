function hitungNama(nama){

    var obj = {}
    var kamus = 'abcdefghijklmnopqrstuqvxyz'

    for(var a = 0; a < kamus.length; a++){
        // console.log(kamus[a])
        for(var i = 0; i < nama.length; i++){
          //  console.log(nama[i])
          if (kamus[a] == nama[i] ) {
            //   console.log(nama[i])
            if (obj[nama[i]] == undefined) {
                obj[nama[i]] = 0
            }
            obj[nama[i]] += 1
          }
        }
    }
    // console.log(obj)
    return obj

}

console.log(hitungNama(['daniel']))
/**
 * {
 * a:1,
 * d:1,
 * e:1,
 * i:1,
 * l:1
 * }
 */