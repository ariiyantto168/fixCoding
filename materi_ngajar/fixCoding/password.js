/*Logic Challenge - Password Generator

Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

 1. Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

 2. Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

 3. Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

 4. Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah
  kita manipulasi

### NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals(str) {
  var vocal = [
    ['a', 'b'],
    ['e', 'f'],
    ['i', 'j'],
    ['o', 'p'],
    ['u', 'v'],
    ['A', 'B'],
    ['E', 'F'],
    ['I', 'J'],
    ['O', 'P'],
    ['U', 'V'],
  ];
  var alpabet = '';
  var isFind = false;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vocal.length; j++) {
      if (str[i] === vocal[j][0]) {
        alpabet += vocal[j][1];
        isFind = true;
      }
    }
    if (!isFind) {
      alpabet += str[i];
    }
    isFind = false;
  }
  return alpabet;
}

function reverseWord(str) {
  var newAlpabet = '';
  for (var k = str.length - 1; k >= 0; k--) {
    newAlpabet += str[k];
  }
  return newAlpabet;
}

function setLowerUpperCase(str) {
  var LowerUpper = '';
  for (var l = 0; l < str.length; l++) {
    if (str[l] === str[l].toLowerCase()) {
      LowerUpper += str[l].toUpperCase();
    } else {
      LowerUpper += str[l].toLowerCase();
    }
  }
  return LowerUpper;
}

function removeSpaces(str) {
  var removespace = '';
  for (var m = 0; m < str.length; m++) {
    if (str[m] === ' ') {
      removespace += '';
    } else {
      removespace += str[m];
    }
  }
  return removespace;
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  var alpabets = changeVocals(name);
  var reverse = reverseWord(alpabets);
  var LowUp = setLowerUpperCase(reverse);
  var remove = removeSpaces(LowUp);
  return remove;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
