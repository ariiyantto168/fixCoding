function transformEmployeeData(array) {
    var result = []; 
    for (var i = 0; i < array.length; i++) {
      var obj = {};
      for (var j = 0; j < array[i].length; j++) {
        var key = array[i][j][0]; 
        var value = array[i][j][1];
        obj[key] = value; 
      }
      console.log('object:',obj); 
      result.push(obj);
    }
    return result;
  }
  
  
  var input = [
      [
          ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
      ],
      [
          ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
      ]
  ];
  
  var output = transformEmployeeData(input);
  console.log(output);
  
  // // [
  //     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
  //     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
  // ]