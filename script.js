//functions and classes declarations
export function generateRandomColor() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

export function filterNegativeNumbers(numbers) {
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

export function functionalFilterNegativeNumbers(numbers) {
    if (typeof(numbers) === 'undefined') {
        return [];
    }

    return numbers.filter(function(number) {
        return number >= 0;
    });
}

export function mapNumbersIntoStrings(numbers) {
    if (typeof(numbers) === 'undefined') {
        return [];
    }
    
    const stringOfNumbers = [];
    for (const number of numbers) {
        stringOfNumbers.push(String(number)); 
    }
    return stringOfNumbers;
}

export function functionalMapNumbersIntoStrings(numbers) {
    if (typeof(numbers) === 'undefined') {
        return [];
    }

    return numbers.map(String);
}

export function printType(variable) {
    console.log(typeof(variable));
}   

export function isPalindrome(word) {
    if (typeof(word) === 'undefined') {
        return false;
    }

    const normalizedWord = word.toLowerCase().replace(/\W/g,'');

    return normalizedWord.split("").reverse().join("") === normalizedWord;    
}

export class Person {
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

export function printOutPersonAge(person) {
    console.log(person.age);
}
/* End of function and classes declaration */