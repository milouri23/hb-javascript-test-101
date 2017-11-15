import {
    generateRandomColor,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings
} from './script.js'

describe('generateRandomColor', () => {
    const keys = ["r", "g", "b"]; 
    const test_items = [];
    for (let i = 0; i < 25; i++) {
        test_items.push(generateRandomColor());
    }

    test('should have items in the range [0, 255]', () => {
        for (let test_item of test_items) {
            for (let key of keys) {
                expect(test_item[key])
                    .toBeGreaterThanOrEqual(0);
                expect(test_item[key])
                    .toBeLessThanOrEqual(255);
            }
        }
    });
    test('should have Integer items', () => {
        for (let test_item of test_items) {
            for (let key of keys) {    
                expect(parseInt(test_item[key]) === test_item[key])
                    .toBe(true);
            }
        }    
    });
});

describe('filterNegativeNumbers', () => {
    test("should return empty array if an empty array is given", () => {
            expect(filterNegativeNumbers([]))
                .toEqual([]);
            expect(functionalFilterNegativeNumbers([]))
                .toEqual([]);            
        });
    test("should return empty array if an array of negative numbers is given", 
        () => {
            expect(filterNegativeNumbers([-3, -4, -8, -2, -6, -7]))
                .toEqual([]);
            expect(functionalFilterNegativeNumbers([-3, -4, -8, -2, -6, -7]))
                .toEqual([]);            
        });
    test("should return the full array if an array of no negative numbers is given", 
        () => {
            expect(filterNegativeNumbers([0, 2, 5, 7, 4, 3, 8, 9]))
                .toEqual([0, 2, 5, 7, 4, 3, 8, 9]);
            expect(functionalFilterNegativeNumbers([0, 2, 5, 7, 4, 3, 8, 9]))
                .toEqual([0, 2, 5, 7, 4, 3, 8, 9]);
        });
    test("should return the full array if an array of no negative numbers is given", 
        () => {
            expect(filterNegativeNumbers([3, -3, 6, 8, -6, -8, 0]))
                .toEqual([3, 6, 8, 0]);
            expect(functionalFilterNegativeNumbers([3, -3, 6, 8, -6, -8, 0]))
                .toEqual([3, 6, 8, 0]);
        });  
});

describe('mapNumbersIntoStrings', () => {
    test("should return empty array if an empty array is given", 
        () => {
        expect(mapNumbersIntoStrings([]))
            .toEqual([]);
        expect(functionalMapNumbersIntoStrings([]))
            .toEqual([]);            
        });
    test("should return number elements in the array as string elements",
        () => {
            expect(mapNumbersIntoStrings([3, 2, 4.5, 8.2, 0]))
                .toEqual(["3", "2", "4.5", "8.2", "0"]);
            expect(mapNumbersIntoStrings([3, 2, 4.5, 8.2, 0]))
                .toEqual(["3", "2", "4.5", "8.2", "0"]);
        });
});