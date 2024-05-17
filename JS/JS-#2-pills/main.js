/*******************************************************************************************       
Esercizio 1: Chiedi il nome dell'utente e stampa un messaggio di saluto
 
let username = prompt('Insert your username')

console.log(username)
********************************************************************************************/


/*********************************************************************************************  
Esercizio 2: Chiedi due numeri e stampa i risultati delle operazioni aritmetiche 
       
let firstNumber = parseInt(prompt('Insert a number'))
let secondNumber = parseInt(prompt('Insert another number'))

const sum = firstNumber + secondNumber
const subtraction = firstNumber - secondNumber
const multiplication = firstNumber * secondNumber
const division = firstNumber / secondNumber

console.log(`The sum is: ${sum}, The subtraction is: ${subtraction},  The multiplication is: ${multiplication}, and the division is: ${division}`):
*********************************************************************************************/


/*********************************************************************************************  
Esercizio 3: Controlla se un numero è pari o dispari

let firstNumber = parseInt(prompt('Insert a number'))

if(firstNumber % 2 == 0){
    console.log('The number is even')
} else {
    console.log('The number is odd')
}
/*********************************************************************************************  


/*********************************************************************************************  
 Esercizio 4: Memorizza 5 numeri in un array e stampali

let array = [];

for (let i = 0; i < 5; i++) {
    let userInput = parseInt(prompt('Insert a number'));
    array.push(userInput);
}
console.log(array); 
*********************************************************************************************/
/*********************************************************************************************  
Esercizio 5: Funzione che calcola il quadrato di un numero

let number = parseInt(prompt('Insert a number'))

function quadratic(number){
    return number * number
}
let quadNumber = quadratic(number)
console.log(`The quadratic of ${number} is: ${quadNumber}`)
*********************************************************************************************/

/*********************************************************************************************  
Esercizio 6: Crea un oggetto persona con proprietà inserite dall'utente e controlla che sia maggiorenne

window.alert('Insert name, age and sex')

let name = prompt('Insert name')
let age = parseInt(prompt('Insert age'))
let sex = prompt('M or F?')

let person = {
    name: name,
    age: age,
    sex: sex
}

if( age > 18){
    console.log("User is an adult")
} else{
    console.log('User is not an adult')
}

console.log(person)
*********************************************************************************************/