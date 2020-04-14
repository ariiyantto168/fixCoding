function balikString(backwords) {
    
    // console.log(backwords)
    var string = ''
    for (let i = backwords.length-2; i >=0; i--) {
        string += backwords[i]
        
    }
    return string
}

console.log(balikString("hello world!"));