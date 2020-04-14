function words(content){
    var i=0;
    var numberofwords=1;

    while (i<= content.length){
        if (content.substring(i, i+1) == " "){
            numberofwords++;
            i++
        }
        if(content.substring(i, i+1) == "\n"){
            numberofwords++;
            i++
        }
        i++
    
    }
    return numberofwords;


}
console.log(words("ada hujan kalideres"));
