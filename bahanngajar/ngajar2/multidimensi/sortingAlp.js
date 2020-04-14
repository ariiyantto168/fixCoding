function groupAnimals(animals) {
    //sort
    for (let i = 1; i < animals.length; i++) {
        for (let j = 0; j < i; j++) {
            if (animals[i][0] < animals[j][0]) {
                var temp = animals[i];
                animals[i] = animals[j];
                animals[j] = temp; 
            }
        }
    }

    var hasil = [];

    for (let k = 0; k < animals.length; k++) {
        var cek = false;

        for (var l = 0; l < hasil.length; l++) {
            if (hasil[l][0][0] === animals[k][0]) {
                cek = true;
                hasil[l].push(animals[k]);
            }
        }

        if (!cek) {
            hasil[l] = [];
            hasil[l].push(animals[k])
        }
    }

    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]