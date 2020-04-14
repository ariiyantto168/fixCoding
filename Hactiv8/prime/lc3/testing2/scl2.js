/*
****************
Grouping role mobile legends
****************
function role merupakan kelompok untuk setiap role dan kemampuan berbeda beda dan jenis kemampuan masing masing.
tentukan lah hero berdasarkan role  dan kemampuan masing - masing.

*/




function role(kelompok){

    var temp = {}
    for (let i = 0; i < kelompok.length; i++) {
        if (temp[kelompok[i].role] == undefined) {
            temp[kelompok[i].role] = []
        }
    }
    for (let j = 0; j < kelompok.length; j++) {
        temp[kelompok[j].role].push(kelompok[j].hero)
    }
    // hasil.push(temp)

    return temp
}

console.log(role([
    {hero: 'alucard', role:'fighter', rank:'master'},
    {hero: 'ruby', role:'fighter', rank:'epic'},
    {hero: 'wanwan', role:'marksman', rank:'legend'},
    {hero: 'auoroa', role:'mage', rank:'epic'},
    {hero: 'karie', role:'marksman', rank:'epic'},
    {hero: 'tigerial', role:'tank', rank:'epic'},
    {hero: 'jhonson', role:'tank', rank:'master'},
]))
/*
{ fighter: [ 'alucard', 'ruby' ],
  marksman: [ 'wanwan', 'karie' ],
  mage: [ 'auoroa' ],
  tank: [ 'tigerial', 'jhonson'] 
}
*/