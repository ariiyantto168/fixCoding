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
	},
		[
				{
					score: 80,
					students:('semi')
				},
				{
					score: 100,
					students:('audrik')
				},
				{
					score: 80,
					students:('adil')
				}
		]
];



var result = [
	{
		score: students[0].nilai,
		students: [students[0]].jenenge
	}
];

console.log(students)


for (var i=0; i < students.length; i++) {
	console.log(students[i])
	var flag = false
	for (var j = 0; j < result.length; j++) {
		console.log(students[i])
		
		if (students[i].nilai == result[j].nilai) {
			flag = true
			result[i].students.push(students[i].jenenge)
		}		
	}	
	
	if(flag == false){
		result.push({
			nilai: students[i].nilai,
			students: [students[i].jenenge]
		})
	}
}


console.log(result)


