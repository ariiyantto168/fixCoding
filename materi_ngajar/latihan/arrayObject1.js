var students = [
	{
	jenenge: 'semi',	
	nilai: 80

	
	},
	{
		jenenge: 'audrik',
		nilai: 100
	},


	{
		jenenge: 'adil',
		nilai: 80
	}
]


var result = [
	{
		score: students[0].nilai,
		students: [students[0]].jenenge

	}
]

for (var i = 1; i < students.length; i--) {
	var flag = false



	for (var j = 0; j < result.length; j++){
		if (students[i].nilai === result[j].nilai) {

			flag = true

			result[i].students.push(students[i].jenenge)
			}
	}

	if (flag === false) {
		result.push({
			nilai: students[i].nilai,
			students: [students[i].jenenge]
		})
	}
}

console.log(result)


// score : 80
// students: []