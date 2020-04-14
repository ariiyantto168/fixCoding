// An object with an array of objects. forInLoop through Object to check if key that is array exists, then forLoop through the array and chnage the values at the index of the array. 



var myCar = {
    make: 'Toyota',
    model: 'Corolla',
    year: 1992,
    accidents: [
      {
        date: '3/15/93',
        damage: '$5,000',
        atFaultForAccident: true
      },{
        date: '7/4/98',
        damage: '$2,200',
        atFaultForAccident: true
      },{
        date: '6/22/99',
        damage: '$7,900',
        atFaultForAccident: true
      }
    ]
  }
  
  
  let fun = (obj, str) => {
      for(let key in obj){
      if(key === str){
           for(let i = 0; i < obj.accidents.length; i++){
               obj.accidents[i].damage = "Nick Celaya"; 
               obj.accidents[i].atFaultForAccident = false; 
           }
          }
      }
      return obj
  }
  
  console.log(obj)
  
  fun(myCar, "accidents"); // damage now = Nick Celaya and atFaultForAccident = false
  
  