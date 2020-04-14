var pets = [
    {nama : 'Dada', umur : 4, hewan : "Kucing"},
    {nama : 'Luffy', umur : 3, hewan : "Kucing"},
    {nama : 'Golden', umur : 10, hewan : "Anjing"},
    {nama : 'Pixel', umur : 2, hewan : "Kucing"},
    {nama : 'Pompom', umur : 1, hewan : "Kucing"},
    {nama : 'Neko', umur : 3, hewan : "Kucing"},
    {nama : 'Snowy', umur : 5, hewan : "Anjing"}
]

var result = {}
for(var i = 0; i < pets.length; i++){
    if(result[pets[i].hewan] == undefined){
        result[pets[i].hewan] = [] 
    }
}
for(var j = 0; j < pets.length; j++){
    result[pets[j].hewan].push(pets[j].nama )  

}

console.log(result)
// tua sm muda
// kelompokin yg kucing dan anjing