function initialGroupingDescending(studentsArr) {
    for (var i = 1; i<studentsArr.length; i++){
        for (var j = 0; j<i; j++){
          if (studentsArr[i][0] > studentsArr[j][0]){
            var temp = studentsArr[i]
            studentsArr[i] = studentsArr[j]
            studentsArr[j] = temp
          }
        }
      }
    
    var data = [];
    //var temp = [];
    for (var i = 0; i < studentsArr.length; i++) {
      var flag = false;
      var check;
      for (var j = 0; j < data.length; j++) {
        if (data[j][0] == studentsArr[i][0]) {
          flag = true;
          check = j;
        }
      }
  
      if (!flag) {
        var temp = [studentsArr[i][0], studentsArr[i]];
        data.push(temp);
      } else {
        data[check].push(studentsArr[i]);
      }
    }
  
    return data;
  }
  
  console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
  /*
  [
    [ 'J', 'Joni', 'Jono' ],
    [ 'B', 'Budi', 'Badu' ]
  ]
  */
  
  console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
  /*
  [
    [ 'Y', 'Yusuf' ],
    [ 'M', 'Mickey' ],
    [ 'G', 'Gong' ],
    [ 'D', 'Donald' ],
    [ 'A', 'Ali' ]
  ]
  */
  
  console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
  /*
  [
    [ 'S', 'Stone', 'Sticker' ],
    [ 'R', 'Rock', 'Rocker' ],
    [ 'B', 'Brick' ]
  ]
  */
  