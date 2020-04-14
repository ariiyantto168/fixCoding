// var hewan = ["a","b",["d","e"]];
// var totalhewan = hewan.concat("c");

// console.log(totalhewan);

var hewan = ['ayam','bebek',['kambing','sapi']]
// hewan.push('kuda')
// console.log(hewan)

// hewan[1] = "burung"
// console.log(hewan)

hewan[2][1] = "burung"
//console.log(hewan);

var salary = [
    ['*','a','*','b','*','*','c'],
    ['a','*','b','z','e','*','c'],
    ['y','i','d','z','f','g','e']
 ];
 
 var count = 0;

 for(let i=0; i<salary.length; i++) {
    // console.log(salary[i][0]);
    for (let j = 0; j < salary[i].length; j++) {
        // console.log(salary[i][j])
        if(salary[i][j] === "*") {
            count++;
        }
    }
 }
 console.log(count);

//  if(count === 0) {
//      console.log("harusnya integer");
//  } else {
//      console.log("harusnya string");
//  }

//  console.log(count);


