var students = [
[
	name: : "a",
	batch: "b",
	score: "95"
],
[
	name: : "c",
	batch: "d",
	score: "90"
],
[
	name: : "e",
	batch: "f",
	score: "100"
],
[
	name: : "g",
	batch: "h",
	score: "95"
][
	[
		score: 100,
		students("i")

	]
	[
		score: 100,
		students("i")

	]
	[
		score: 100,
		students("j")

	]
	]

];


var result = [

	score.students[0].score,
	students: [students[0].name]
]


for (var i = 1 i < students.length; i++) {
	
	var flag = false
	for (var j = 0; j < result.length; j++) {
		if (students[i].score == result[j].score) {

			result[i].students.push(students[i].name)
			flag = true;
	
		}
	}

	if (flag == false) {
		result.push([
			score: students[i].score
			students: [students[i].name]
			]);
	}

	// for (var k = 0; k < result.length; k++) {
	// 	if (result[k] ==) {}
	// }
}

console.log(result)
