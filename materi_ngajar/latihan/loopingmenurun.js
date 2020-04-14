const iceCapsAreMelting = true;
let polarBears = 5;

// Initiate infinite loop
while (iceCapsAreMelting) {
  console.log(`There are ${polarBears} polar bears.`);
  polarBears--;
  // Terminate infinite loop when following condition is true
  if (polarBears === 0) {
    console.log("There are no polar bears left.");
    break;
  }
}