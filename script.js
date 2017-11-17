export function generateRandomColor() {
    return {
        r: Math.floor( Math.random() * 256 ),
        g: Math.floor( Math.random() * 256 ),
        b: Math.floor( Math.random() * 256 )
    };
}

export function filterNegativeNumbers(numbers) {
    const noNegativeNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            noNegativeNumbers.push( number );
        } 
    }
    return noNegativeNumbers;
}

export function functionalFilterNegativeNumbers(numbers) {
    return numbers.filter( number => number >= 0 )
}

export function mapNumbersIntoStrings(numbers) {
    const numbersInStringType = [];
    for (const number of numbers) {
        numbersInStringType.push( String(number) );
    }
    return numbersInStringType;
}

export function functionalMapNumbersIntoStrings(numbers) {
    return numbers.map( String );
}

export function printType( variable ) {
    console.log( typeof variable );
}   

export function isPalindrome(word) {
    const normalizedWord = word.toLowerCase().replace( /[\W_]/g, '' );
    return normalizedWord.split( '' ).reverse().join( '' ) === normalizedWord;    
}

export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() { 
        console.log( this.name );
    }
}

export function printOutPersonAge(person) {
    console.log( person.age );
}