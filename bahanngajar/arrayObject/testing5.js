// let obj = {
//     name: 'Krunal',
//     education: 'IT Engineer'
// } ;
// console.log(Object.keys(obj));


// let obj =[
// {
//     name: 'Krunal',
//     education: 'IT Engineer'
// } 
// ]
// console.log(Object(obj));


var cars = [
    {
        make: "honda",
        model: "civic",
        year: 2014,
        color: "blue"
    },
    {
        make: "toyota",
        model: "camry",
        year: 2000,
        color: "red"
    },
    {
        make: "ford",
        model: "mustang",
        year: 2005,
        color: "black"
    },
]

for (let i = 0; i < cars.length; i++) {
    if (cars[i].year < 2010) {
        console.log(cars[i].make + ", " + cars[i].model)
    }
    
}
