function hewan(group) {
    
    //sort
    for (let i = 0; i < group.length; i++) {
        for (let j = 0; j < i; j++) {
            if (group[i][0] < group[j][0]) {
                var temp = group[i]
                group[i] = group[j]
                group[j] = temp
            }
            
        }
        
    }
    var hasil = []

    for (var k = 0; k < group.length; k++) {
        var cek = false;

        for (var l = 0; l < hasil.length; l++){
            if (hasil[l][0][0] === group[k][0]) {
                cek = true;
                hasil[l].push(group[k]);
            }
        }
        if (!cek) {
            hasil[l] = [];
            hasil[l].push(group[k])
        }

        
        
     }

    return hasil



}



console.log(hewan(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(hewan(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

// console.log(hewan(['z','b','a','d','c']));