var apple = {
    name: 'Apple',
    kingdom: 'Plantae',
    family: 'Rosaceae',
    genus: 'Malus',
    vitamins: ['B1', 'B2', 'B3', 'B5', 'B6', 'B9', 'C', 'E', 'K'],
    minerals: {
      manganese: '0.035 mg',
      phosphorus: '11 mg',
      potassium: '107 mg'
    }
  }

// Option 1
var appleKeys = Object.keys(apple);
for(var i = 0, limit = appleKeys.length; i < limit; i++) {
  console.log(apple[appleKeys[i]]);
}

// Option 2
for (const key in apple) {
  console.log(apple[key]);
}
