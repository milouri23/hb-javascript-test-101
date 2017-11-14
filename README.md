# hb-javascript-test-101
Javascript basic exercises to practice functional programming

# HUGE - Bootcamp Test
_______________________________________________________________________________________________________
Please resolve all the exercises using all the resources you can get. Using the internet and asking others is allowed. 

## HTML and CSS
Implement the given layout using valid HTML and CSS that can run in the latest version of Google Chrome.
- Use semantic HTML
- Use media queries to implement a simple layout for the small viewport.
- Use best practices where the layout is liquid / responsive.
- Choose the colors you want.
- Use the right units and measures.	
- The bar at the top should always be there, even if the user scroll down.

## Javascript
- Create a function that is capable of generate a random RGB color object.
```
generateRandomNumber();
// {r:100, g: 100, b: 100}
```
- Create a function that is capable of filtering out numbers less than 0 from an array of numbers.
```
filterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]);
// [0 , 34, 54]
```
- Create a function that is capable of maping an array of numbers into strings.
```
mapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]);
// ["-4", "-6", "-5", "0", "34", "54", "-7"]
```
- Create a function that is capable of printing into the console the type of the passed variable.
```
printType('1'); // "string"
```
- Create a function that is capable of identify if the passed string is a palindrome or not. It should return a boolean.
```
isPalindrome("madam"); // true
```
- Create a Class in Javascript that represents a person capable of having "name" and "age" as instance variables, and a method that prints out the name into the console. (Class and Prototype syntax is allowed)
```
const student = new Person('John', 25);
student.printName(); // "John"
```
- Create a function that is capable of receiving an instance of the Person Class and print into the console it's age.z
```
const student = new Person('John', 25);
printOutPersonAge(student); // 25
```
