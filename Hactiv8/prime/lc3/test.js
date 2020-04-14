function getUglyNumber(num) {
  var result = []
  var angka2 = [2,3,5]

  for (var i = 1; i <= num; i++) {
      var flag = false

      for (var j = 0; j < angka2.length; j++) {
          if (i % angka2[j] == 0) {
              flag = true
          }
      }

      if (flag == true && i % 7 != 0) {
          result.push(i)
      }
  }

  return result
}
console.log(getUglyNumber(10)); //[ 2, 3, 4, 5, 6, 8, 9, 10 ]
console.log(getUglyNumber(20)); //[ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]
console.log(getUglyNumber(4)); //[ 2, 3, 4]
console.log(getUglyNumber(5));