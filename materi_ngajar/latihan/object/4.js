// sam

var person = {
    name: rian,
    hobbies: [
        {
            name: 'treatement',
            priority: 'low'
        },

        {
            name: 'treatement',
            priority: 'low'
        }
    ]

}

// 1.
// console.log(person.hobbies)
person.hobbies.push({
    name: 'Playing',
    priority:'low'
})
console.log(person.hobbies)

// 2.
console.log(person.hobbies[2]);

// 3. merubah isi data array atau value
person.hobbies[2].priority = 'High'
console.log(person.hobbies[2])

// 4. mengahpu key dalam object delete key operator
// - pertama kita harus key object
delete (person.hobbies[2])


var person = {
    name: 'rian',
    hobbies: [
        
        name: 'treatement',
        priority: 'low',
        schedules: {
        {    
            name: 'makan',
            time: 'pagi'

        },
        {
            name: 'minum',
            time: 'alltime'
        }
    },

    

    {
        name: 'treatement',
        priority: 'low'
    }
    ]

}

console.log(person.hobbies)
for (var i = 0; i < person.hobbies.length; i++) {

    console.log(person.hobbies[i])

    for (var j =0; j < person.hobbies[i].schedules.length; j++) {
        delete person.hobbies[i].schedules[j]
        console.log(person.hobbies[i].schedules[j])
        
    }
}


// 5. new has on property
var person = {
    name:'makan',
    hobbies:'futsal'

}

for (var i =0; i < person.hobbies.length; i++) {

    // check value
    // console.log(person)
    if (person.hasOwnProperty('newHobbies') === false) {
        person.newHobbies = []
    }
    // jika ada push data baru
    person.newHobbies.push(person.hobbies[i])
}

// object assign


for (var i =0; i < person.hobbies.length; i++){
    var forbiddenKey = 'duration'

    for(var j = 0; j < person.newHobbies[i].schedules.length; j++){
    //    delete person.newHobbies[i].schedules[j[forbiddenKey]]
        var schedule = person.newHobbies[i].schedules

    for (var k in person.newHobbies[i].schedules[j]) {
       if (k === forbiddenKey) {
           delete schedule[k]
       }
        
    }
        console.log(person.newHobbies[i].schedules[j])
    }
}

