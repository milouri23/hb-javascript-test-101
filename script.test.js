import {
    generateRandomColor,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    Person,
    printOutPersonAge
} from './script.js'

describe( 'generateRandomColor', () => {
    const KEYS = ['r', 'g', 'b'];
    const color = generateRandomColor();

    it( 'should have only 3 keys in the next order: r, g, b', () => {
        expect( Object.keys( color ) ).toEqual( KEYS );
    });
    it( 'should not have deterministic values', () => (
        expect( color ).not.toEqual( generateRandomColor() )
    ));
    it( 'should have values in the range [0, 255]', () => {
        for (const key of KEYS) {
            expect( color[key] ).toBeGreaterThanOrEqual( 0 );
            expect( color[key] ).toBeLessThanOrEqual( 255 );
        }
    });
    it( 'should have Integer values', () => {
        for (const key of KEYS) {
            expect( Number.isInteger( color[key] ) ).toBeTruthy();
        }
    });
});

describe( 'filterNegativeNumbers', () => {
    it( 'should return empty array if an empty array is given', () => {
        expect( filterNegativeNumbers( [] ) ).toEqual( [] );
        expect( functionalFilterNegativeNumbers([])).toEqual( [] );      
    });
    it( 'should return empty array if an array of negative numbers is given', () => {
        const negativeNumbers = [-3, -4, -8, -2, -6, -7];
        expect( filterNegativeNumbers( negativeNumbers ) ).toEqual( [] );
        expect( functionalFilterNegativeNumbers( negativeNumbers ) ).toEqual( [] );
    });
    it( 'should return the full array if an array of no negative numbers is given', () => {
        const noNegativeNumbers = [0, 2, 5, 7, 4, 3, 8, 9];
        expect( filterNegativeNumbers( noNegativeNumbers ) ).toEqual( noNegativeNumbers );
        expect( functionalFilterNegativeNumbers( noNegativeNumbers ) ).toEqual( noNegativeNumbers )
    });
    it( 'should return the no negative numbers of the given array', () => {
        const numbers = [3, -3, 6, 8, -6, -8, 0];
        const filteredNumbers = [3, 6, 8, 0]
        expect( filterNegativeNumbers( numbers ) ).toEqual( filteredNumbers );
        expect( functionalFilterNegativeNumbers( numbers ) ).toEqual( filteredNumbers );
    });
});

describe( 'mapNumbersIntoStrings', () => {
    it( 'should return empty array if an empty array is given', () => {
        expect( mapNumbersIntoStrings( [] ) ).toEqual( [] );
        expect( functionalMapNumbersIntoStrings( [] ) ).toEqual( [] );
    });
    it( 'should return number elements in the array as string elements', () => {
        const numbersArray = [3, 2, 4.5, 8.2, 0];
        const stringsArray = ['3', '2', '4.5', '8.2', '0'];
        expect( mapNumbersIntoStrings( numbersArray ) ).toEqual( stringsArray );
        expect( functionalMapNumbersIntoStrings( numbersArray ) ).toEqual( stringsArray );
    });
});

describe( 'printType', () => {
    const spy = jest.spyOn( console, 'log' );

    beforeEach( () => spy.mockClear() );
    it( 'should print the type of a variable', () => {
        const VARIABLES = [undefined, 3.4, 'hola', function(){}, [2, 3, 4], true];
        const TYPES = ['undefined', 'number', 'string', 'function', 'object', 'boolean'];

        for (const index in VARIABLES) {
            printType( VARIABLES[index] );
            expect( spy ).toBeCalledWith( TYPES[index] );
        }
    });
});

describe( 'isPalindrome', () => {
    it( 'should be true with empty strings and single letter or number', () => {
        expect( isPalindrome( '' ) ).toBeTruthy();
        expect( isPalindrome( 't' ) ).toBeTruthy();
    });
    it( 'should work only with numbers and letters' , () => {
        expect(isPalindrome( '1a//* #man{}] ]a +plan a canal: panama1' ) ).toBeTruthy();
    });
    it( 'should be no case-sensitive' , () => {
        expect( isPalindrome( 'Ten aNimaLs I slaM in a nEt' ) ).toBeTruthy();
    });
    it( 'should be false with a no palindrome word or phrase', () => {
        expect( isPalindrome( 'I am not a palindrome phrase' ) ).toBeFalsy();
        expect( isPalindrome( 'Nothing' ) ).toBeFalsy();
    });
});

describe( 'Person', () => {
    const [NAME, AGE] = ["Jhon", 25];
    const person = new Person( NAME, AGE );
    const spy = jest.spyOn ( console, 'log' );

    beforeEach( () => spy.mockClear() );
    it( 'should be able to create a person with name and age', () => {
        for (const key in person) {
            expect( person[key] ).toBeDefined();
        }
    });
    it( 'should print the name of the person in console when Person.printName() is called', () => {
        person.printName();
        expect( spy ).toBeCalledWith( NAME );
    });
    it( 'should print person age in console when printOutPersonAge() is called', () => {
        printOutPersonAge( person );
        expect( spy ).toBeCalledWith( AGE );
    });
});