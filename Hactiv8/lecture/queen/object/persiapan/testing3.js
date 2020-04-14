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

  apple.minerals.manganese = 'testing'
  delete apple.name
  console.log(apple)
  
// var apple = {};
apple['name'] = 'jeruk';
apple.kingdom = 'testing1';
apple['family'] = 'Rosaceae';
apple.genus = 'Malus';
apple['vitamins'] = ['B1', 'B2', 'B3', 'B5', 'B6', 'B9', 'C', 'E', 'K'];
apple.minerals = {
  manganese: '0.035 mg',
  phosphorus: '11 mg',
  potassium: '107 mg'
};
// console.log(apple)