//functions and classes declarations
function generateRandomNumber() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

function filterNegativeNumbers(numbers) {
    if (typeof(numbers) === 'undefined') {
        return [];
    }
    
    const noNegativeNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            noNegativeNumbers.push(number);
        }
    }
    return noNegativeNumbers;
}

function functionalFilterNegativeNumbers(numbers) {
    if (typeof(numbers) === 'undefined') {
        return [];
    }

    return numbers.filter(function(number) {
        return number >= 0;
    });
}

function mapNumbersIntoStrings(numbers) {
    if (typeof(numbers) === 'undefined') {
        return [];
    }
    
    const stringOfNumbers = [];
    for (const number of numbers) {
        stringOfNumbers.push(String(number)); 
    }
    return stringOfNumbers;
}

function functionalMapNumbersIntoStrings(numbers) {
    if (typeof(numbers) === 'undefined') {
        return [];
    }

    return numbers.map(String);
}

function printType(variable) {
    return typeof(variable);
}   

function isPalindrome(word) {
    if (typeof(word) === 'undefined') {
        return false;
    }

    return word.toLowerCase().split("").reverse().join("") == word.toLowerCase();    
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printName() {
        console.log(this.name);
    }
}

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.printName = function() {
//     console.log(this.name);
// };

function printOutPersonAge(person) {
    console.log(person.age);
}
/* End of function and classes declaration */

/* Testing */
const prueba1 = [1, 3, 6, 8, 12, 15, 88, 10001, 33284];
const prueba2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const prueba3 = [-1, -4, -2, -3, -5, -8, -14];

console.log(generateRandomNumber());

console.log(filterNegativeNumbers());
console.log(filterNegativeNumbers([]));
console.log(filterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(filterNegativeNumbers(prueba1));
console.log(filterNegativeNumbers(prueba2));
console.log(filterNegativeNumbers(prueba3));

console.log(functionalFilterNegativeNumbers());
console.log(functionalFilterNegativeNumbers([]));
console.log(functionalFilterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(functionalFilterNegativeNumbers(prueba1));
console.log(functionalFilterNegativeNumbers(prueba2));
console.log(functionalFilterNegativeNumbers(prueba3));

console.log(mapNumbersIntoStrings());
console.log(mapNumbersIntoStrings([]));
console.log(mapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));

console.log(functionalMapNumbersIntoStrings());
console.log(functionalMapNumbersIntoStrings([]));
console.log(functionalMapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));

console.log(printType(0));
console.log(printType([]));
console.log(printType('1'));
console.log(printType(true));
console.log(printType());
console.log(printType({a: '1', b: '2'}));

console.log(isPalindrome());
console.log(isPalindrome(""));
console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('cocacola'));
console.log(isPalindrome('anitalavalatina'));
console.log(isPalindrome('anita lava la tina'));

const student = new Person('John', 25);
student.printName(); // "John"
printOutPersonAge(student); // 25
/* End of testing */