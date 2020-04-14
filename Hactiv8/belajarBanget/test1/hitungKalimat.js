function hitungKata(kalimat){
    //menggunakan for
    var words = 1
    for(var i = 0; i <= kalimat.length; i++){
     
        if (kalimat.substring(i, i+1) == " ") {
            words++
        }
        if (kalimat.substring(i, i+1) == "\n") {
            words++
        }
    }
    return words

    //menggunakan while
    // var i=0;
    // var numberofwords=1;
    
    // while (i<= kalimat.length) {
    //     if(kalimat.substring(i, i+1) == " "){
    //         numberofwords++;
    //         i++
    //     }
    //     if(kalimat.substring(i, i+1) == "\n"){
    //         numberofwords++;
    //         i++
    //     }
    //     i++
    // }
    // return numberofwords;

}

  // TEST CASES
  console.log(hitungKata('I have a dream')); // 4
  console.log(hitungKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungKata('A song to sing')); // 4
  console.log(hitungKata('I')); // 1
  console.log(hitungKata('I believe I can code')); // 5