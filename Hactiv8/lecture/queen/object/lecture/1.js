var database = {
    indomilk: {
      produk: 'Susu Indomilk',
      harga: 5000
    },
    blueband: {
      produk: 'Blue Band',
      harga: 3000
    },
    sensi: {
      produk: 'Surgical Mask Sensi 3 Ply',
      harga: 180000
    }
  }
  function sortDatabase(inDatabase) {
    var keys = Object.keys(inDatabase)
    
    for(var i = 0; i < keys.length; i++){
      // console.log(keys[i])
      for(var j = 0; j < keys.length-1; j++){
       if(inDatabase[keys[j]]['harga'] > inDatabase[keys[j +1]]['harga']) {
         var temp = keys[j]
         keys[j] = keys[j+1]
         keys[j+1] = temp 
       }
      }
    }
    return keys
  }

  console.log(sortDatabase(database));