function angkaPrima(prima) {
    var cek = true

    for (var i = 2; i < prima; i++) {
        if (prima % i === 0 ) {
            cek = false
        }
        
    }
    
    return cek
}
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
