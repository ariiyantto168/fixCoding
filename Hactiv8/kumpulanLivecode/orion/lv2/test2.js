function parseString(string) {
    //implementasi function disini!
    var temp = {}
    for (let i = 0; i < string.length; i++) {
      if (temp[string[i]] == undefined) {
        temp[string[i]] = 0
      }
      temp[string[i]]++
    }
  
    var kamus = '0123456789'
    for (let j = 0; j < kamus.length; j++) {
      for (const key in temp) {
        if (kamus[j] == key) {
          delete temp[key]
        }
      }
    }
    return temp
  }
  
  
  
  console.log(parseString("h3lloW0r1d")) // { h: 1, l: 2, o: 1, W: 1, r: 1, d: 1 }
  console.log(parseString("abcdefMlpo123")); //{ a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, M: 1, l: 1, p: 1, o: 1 }
  console.log(parseString("nmjlw12hrjeh54ah")); //{ n: 1, m: 1, j: 2, l: 1, w: 1, h: 3, r: 1, e: 1, a: 1 }
  console.log(parseString("")); //{}

  function parseString(string) {
    var obj = {};
  
    for (var i = 0; i < string.length; i++) {
      if (string[i] == Number(string[i])) {
      } else {
        obj[string[i]] = 0;
        for (var j = 0; j < string.length; j++) {
          if (string[i] == string[j]) {
            obj[string[i]]++;
          }
        }
      }
    }
    return obj;
  }
  
  console.log(parseString("h3lloW0r1d")); // { h: 1, l: 2, o: 1, W: 1, r: 1, d: 1 }
  console.log(parseString("abcdefMlpo123")); //{ a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, M: 1, l: 1, p: 1, o: 1 }
  console.log(parseString("nmjlw12hrjeh54ah")); //{ n: 1, m: 1, j: 2, l: 1, w: 1, h: 3, r: 1, e: 1, a: 1 }
  console.log(parseString("")); //{}
  console.log(parseString("AaBBcccee678")); //{}

  function parseString(string){
    var obj = {};
    for (var i in string){
     if (obj[string[i]] == null && ((string[i] >= 'a' && string[i] <= 'z') || (string[i] >= 'A' && string[i] <= 'Z'))) obj[string[i]] = 0;
     if ((string[i] >= 'a' && string[i] <= 'z') || (string[i] >= 'A' && string[i] <= 'Z')) obj[string[i]]++;
    }
    return obj;
  }
 
 
 
  console.log(parseString("h3lloW0r1d")) // { h: 1, l: 2, o: 1, W: 1, r: 1, d: 1 }
  console.log(parseString("abcdefMlpo123")); //{ a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, M: 1, l: 1, p: 1, o: 1 }
  console.log(parseString("nmjlw12hrjeh54ah")); //{ n: 1, m: 1, j: 2, l: 1, w: 1, h: 3, r: 1, e: 1, a: 1 }
  console.log(parseString("")); //{}
 

  function parseString(string){
    var result = {};
    var kamus = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
     for(var i = 0; i < string.length; i++) {
       for(var j = 0; j < kamus.length; j++) {
         if (string[i] == kamus[j]) {
           if(result[string[i]] === undefined) result[string[i]] = 0;
           result[string[i]]++;
           break;
         }
       }
     }
     return result;
   }
  
  
  
   console.log(parseString("h3lloW0r1d")) // { h: 1, l: 2, o: 1, W: 1, r: 1, d: 1 }
   console.log(parseString("abcdefMlpo123")); //{ a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, M: 1, l: 1, p: 1, o: 1 }
   console.log(parseString("nmjlw12hrjeh54ah")); //{ n: 1, m: 1, j: 2, l: 1, w: 1, h: 3, r: 1, e: 1, a: 1 }
   console.log(parseString("")); //{}
   console.log(parseString("aaAAbc6")); //{""}
  
  