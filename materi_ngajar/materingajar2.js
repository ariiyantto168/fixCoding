function filter(arr1, arr2) {
	var arrGabung = arr1.concat(arr2);
	var result = [];

	for (var i = 0; i < arrGabung.length; i++) {
		var check = false;
		for (var j = 0; j < result.length; j++) {
			if (arrGabung[i] == result[j]) {
				check = true;
			}
		}

		if (!check) {
			result.push(arrGabung[i]);
		}
	}

	return result

}

console.log(filter(
	["bola", "penghapus", "pensil", "tip-x"],
	["penggaris", "pulpen", "pensil"]

	));

// penggabungan array dan yang sama kehapus
// buat array baru dan di masukin ke array baru

