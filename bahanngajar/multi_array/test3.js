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