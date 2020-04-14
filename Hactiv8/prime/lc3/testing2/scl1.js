/*
****************
Tournament Mobile Legends
****************
tournamentMobileLegends adalah sebuah function yang menerima parameter berupa array of object.
username akan di ambil 5 username mmr terbesar berdasarkan jumlah game yang di mainkan dan 2 username mmr terkecil akan menjadi backup pemain.


*/

function ranked(rank){

    var jumlah = 0;
    var hasil = {}
    
    for (var i = 0; i < rank.length; i++) {
        jumlah += rank[i].mmr;
    }

    var score = jumlah / rank.length;

    for (var j = 0; j < rank.length; j++) {
        if (rank[j].mmr >= score) {
            if (hasil.starter === undefined) {
                hasil.starter = [];
            }

            hasil.starter.push(rank[j].username);
        }
        else {
            if (hasil.cadangan === undefined) {
                hasil.cadangan = [];
            }

            hasil.cadangan.push(rank[j].username);
        }
    }

    return hasil;
}

console.log(ranked([
   {username:'ataufiq', rank:'mythic', mmr: 780 }, 
   {username:'daniel', rank:'legend', mmr: 881 },
   {username:'audrick', rank:'epic', mmr: 890 },
   {username:'semmi', rank:'mythic', mmr:901 },
   {username:'ari', rank:'mythic', mmr: 770 },
   {username:'ayu', rank:'mythic', mmr: 880 },
   {username:'alun', rank:'mythic', mmr: 910 },
]));
/*
{ cadangan: [ 'ataufiq', 'ari' ],
  starter: [ 'daniel', 'audrick', 'semmi', 'ayu', 'alun' ] }
*/
