// select * from tasks t where
// id_challenge > 25
// and id_instructor = 742
// and id_user between 818 and 847

// update tasks
// set score = 60, feedback = 'jangan menggunakan indexof' 
// where id = 46436
// 103
//99
//107


function targetTerdekat(arr) {
    var indek1 = 0;
    var indek2 = 0;
    var tmp = 0;
    var hasil;
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] == 'o') {
            indek1 = i;
        } else if (arr[i] == 'x') {
            indek2 = i;
            break;
        }

        tmp = (indek2 - indek1) * (-1);
        hasil = tmp + 1;
    }
    return hasil;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['o', '', 'x', 'o'])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2