function hitungNama(names){
    var obj = {}
    var kamus = 'abcdefghijklmnopqrstuwvxyz'
    for(var a = 0; a < kamus.length; a++){
        // console.log(kamus[a])
        for(var i = 0; i < names.length; i++){
            // console.log(names[i])
            for(var j = 0; j < names[i].length; j++){
                // console.log(names[i][j])
                if (kamus[a] == names[i][j]) {
                    // console.log('tes')
                    if(obj[names[i][j]] == undefined){
                        obj[names[i][j]] = 0
                    }
                    obj[names[i][j]] +=1
                }
            }
        }
    }
    // console.log(obj)
    return obj
}

console.log(hitungNama(['ayu', 'audric', 'daniel']))
/**
 * { a: 3, c: 1, d: 2, e: 1, i: 2, l: 1, n: 1, r: 1, u: 2, y: 1 }
 */
