export function generateRandomColor() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

export function filterNegativeNumbers(numbers) {
    const noNegativeNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            noNegativeNumbers.push(number);
        }
    }
    return noNegativeNumbers;
}

export function functionalFilterNegativeNumbers(numbers) {
    return numbers.filter(function(number) {
        return number >= 0;
    });
}

export function mapNumbersIntoStrings(numbers) {
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

export function printOutPersonAge(person) {
    console.log(person.age);
}