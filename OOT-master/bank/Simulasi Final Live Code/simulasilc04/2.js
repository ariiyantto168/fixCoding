/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/

// PSEUDOCODE
/*
STORE 'kata' with sentence split
STORE 'asterix' with blank
STORE 'output' with blank

WHILE i less than 'words' length
    THEN asterix equal with *
WHILE j lest than 'sentence' length
    IF 'kata'(j) equal to 'words'
    THEN 'output' is 'asterix'
    IF 'kata'(j) not equal to 'words'
    THEN 'output' is kata (j)

DISPLAY 'output'

*/


function sensorSentence ( sentence, words ) {
  let sentenceArr = [];
  let result = '';
  let temp = '';
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      temp += sentence[i];
    }
    
    if (sentence[i] === ' ' || i === sentence.length - 1) {
      sentenceArr.push(temp);
      temp = '';
    }
  }

  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i] == words) {
      for (let j = 0; j < sentenceArr[i].length; j++) {
        temp += '*';
      }
      // sentenceArr[i] = temp;
      result += temp + ' ';
      continue;
    }
    result += sentenceArr[i] + ' ';
  }

  return result;
}


console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''
