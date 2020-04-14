function hitungKembalian(bayar, harga) {
    var pecahanUang = [100000, 50000, 20000, 10000, 5000];
    var kembalian = bayar - harga
    var retVal = {};
    if (harga > bayar) {
      return 'Uang tidak cukup';
    }
    else if (kembalian == 0) {
      return retVal;
    }
    var uangIndex = 0;
    while (kembalian > 0) {
      if (kembalian >= pecahanUang[uangIndex]) {
        kembalian -= pecahanUang[uangIndex];
        if (!(pecahanUang[uangIndex] in retVal)) {
          retVal[pecahanUang[uangIndex]] = 0;
        }
        retVal[pecahanUang[uangIndex]]++;
      } else {
        uangIndex++;
      }
    }
    return retVal;
  }

  console.log(hitungKembalian(1000000, 755000));
  console.log(hitungKembalian(100000, 70000));