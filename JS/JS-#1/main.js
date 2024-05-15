console.log('Hello World');

let firstName = 'Matteo', lastName = 'Sala'

console.log(firstName, lastName);



// Objects and arrays
let person = {
    name: 'Mario',
    age: 25
}

//Dot notation
// person.name = "Marco"
// console.log(person.name)

//Bracket notation
// person['name'] = 'Luca'
// console.log(person.name)


//Functions
function greet(){
    console.log('Hello ' + person.name +' your age is ' + person.age)
}

greet(person.name, person.age)

