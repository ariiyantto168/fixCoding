function bestStudent(list) {
	var total = 0;
	for (var i = 0; i < list.length; i++) {
		total += list[i].score
	}
	var rata2 = total/list.length

	for (let i = 0; i < list.length; i++) {
		for (let j = 0; j < list.length; j++) {
			if (list[i].score > list[j].score
				) {
				if (list[i].score < list[j].score
					) {
					let temp = list[i]
					list[i] = list[j]
					list[j] = list[i]
				}
			}
		}
	}
}

// kenapa undefined dia harus di return variable nya