// TEST CASES
//   console.log(palindrome('katak')); // true
//   console.log(palindrome('blanket')); // false
//   console.log(palindrome('civic')); // true
//   console.log(palindrome('kasur rusak')); // true
//   console.log(palindrome('mister')); // false


function palindrome(kata) {
    // you can only write your code here!

    var temp = ''
    for (let i = kata.length-1; i >=0 ;i--) {
        temp += kata[i]
        
    }

    if (temp == kata) {
        return true
    }else{
        return false
    }
    // return temp
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false