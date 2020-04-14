/**
 * Elementalist Battle.
 * 
 * Function akan menerima input berupa object player dan array berisi serangan yang akan dihadapi player tersebut. 
 * Seorang player memiliki nama, health, dan element. 
 * -health : merupakan nyawa dari pemain, dari  0 - 100
 * -element: merupakan elemen dari pemain
 * 
 * Terdapat 3 jenis element: wind, fire, dan water.
 * Tiap elemen memiliki DAMAGE yang sama yaitu 25
 * Berikut ini aturan untuk elemen tersebut:
 * 
 * -fire bisa memberikan damage kepada wind    fire > wind
 * -water bisa memberikan damage fire          water > fire
 * -wind bisa memberikan damage water          wind > water
 * 
 * damage
 * Selain 3 itu, tidak ada efeknya, misal untuk kasus water:
 * water tidak bisa memberikan damage kepada wind
 * water tidak bisa memberikan damage kepada water
 * 
 * -Jika health player sudah 0, maka keluarkan output "Player `name` meninggal"
 * -Jika health player masih ada, maka output object player tersebut
 * 
 * RULES:
 *  - Tuliskan Pseudocode kalian, No pseudocode = 0 !!!
 *  - Dilarang menggunakan .filter .reduce .in
 */

 /**
  * PSEUDOCODE
  * 
  */
function elementBattle(player, attacks) {
    
}
  console.log(elementBattle({
    name: "Aang",
    health: 100,
    element: "wind"
  }, ["water", "fire", "fire", "wind"]));
  //{ name: 'Aang', health: 50, element: 'wind' }
  
  
  console.log(elementBattle({
    name: 'Zuko', 
    element: "fire",
    health: 100
  }, ['water','water','water','water','water']))
  // Player Zuko meninggal

  console.log(elementBattle({
    name: 'Katara', 
    element: "water", 
    health: 25
  }, ['water','fire', 'fire', 'wind', 'fire']))
  // Player Katara meninggal