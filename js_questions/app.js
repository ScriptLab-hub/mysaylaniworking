// Step 1: Ask for the user's birth year
var birthYear = prompt("Enter your birth year:");

birthYear = Number(birthYear);


var currentYear = new Date().getFullYear();


var age = currentYear - birthYear;

alert("You are " + age + " years old!");

// 2. Use `prompt()` to get 5 numbers from the user, store them in an array, and then calculate and log the average using a loop.
var numbers = [];
for (var i = 0; i < 5; i++) {
    var number = prompt("Enter number " + (i + 1) + ":");
    numbers.push(Number(number));
}

// 3. Declare an array of 10 numbers. Use a loop to print only the numbers that are divisible by 3.
var array_num = [3,4,5,6,7,8,9,10,12,15];
for (var i = 0; i < array_num.length; i++) {
    if (array_num[i] % 3 === 0) {
        console.log(array_num[i]);
    }
}

// 4. Write a `for` loop to calculate the factorial of a number entered by the user.
var num = prompt("Enter a number to calculate its factorial:");
num = Number(num);
var factorial = 1;
for (var i = 1; i <= num; i++) {
    factorial = factorial * i;
}
console.log("The factorial of " + num + " is " + factorial);

// 5. Create a program that uses `prompt()` to accept a string from the user and prints the string **in reverse** using a loop.
var userString = prompt("Enter a string:");
var reversedString = "";
for (var i = userString.length - 1; i >= 0; i--) {
    reversedString += userString[i];
}
console.log("The reversed string is: " + reversedString);

// 6.How many times a specific letter appears in a given string. Use this in a prompt-based program.
var inputString = prompt("Enter a string:");
var letterToCount = prompt("Enter a letter to count its occurrences:");
var count = 0;
for (var i = 0; i < inputString.length; i++) {
    if (inputString[i].toLowerCase() === letterToCount.toLowerCase()) {
        count++;
    }
}
console.log("The letter '" + letterToCount + "' appears " + count + " times in the string.");

// 7. Ask the user to enter five names (one by one using `prompt()`), store them in an array, then sort the array and display it using `console.log()`.
var names = [];
for (var i = 0; i < 5; i++) {
    var name = prompt("Enter name " + (i + 1) + ":");
    names.push(name);
}
names.sort();
console.log("Sorted names: " + names.join(", "));

// 8. Use `console.log()` to display a multiplication table (1 to 10) of a number entered by the user via `prompt()`.
var multiplicationNumber = prompt("Enter a number to display its multiplication table:");
multiplicationNumber = Number(multiplicationNumber);
console.log("Multiplication table for " + multiplicationNumber + ":");
for (var i = 1; i <= 10; i++) {
    console.log(multiplicationNumber + " x " + i + " = " + (multiplicationNumber * i));
}

// 9. Write a program that asks the user for a sentence and checks how many vowels it contains. Output the count using `console.log()`.
var sentence = prompt("Enter a sentence:");
var vowels = "aeiouAEIOU";  
var vowelCount = 0;
for (var i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
        vowelCount++;
    }
}
console.log("The sentence contains " + vowelCount + " vowels.");

// 10. Create two arrays: one with product names and one with prices. Display each product with its corresponding price using a loop.
var productNames = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
var productPrices = [10,20,30,40,50];
for (var i = 0; i < productNames.length; i++) {
    console.log(productNames[i] + ":Rs " + productPrices[i]);
}

// 11. Ask the user to enter a temperature in Celsius and convert it to Fahrenheit using the formula:
// `F = (C × 9/5) + 32`, and display the result with `alert()`.

var celsius = prompt("Enter temperature in Celsius:");
celsius = Number(celsius);  
var fahrenheit = (celsius * 9/5) + 32;
alert(celsius + "°C is equal to " + fahrenheit + "°F");

// 12. Write a script to check whether a given string is a palindrome (e.g., “madam” or “racecar”).

var palindromeString = prompt("Enter a string to check if it's a palindrome:");
var reversed = palindromeString.split('').reverse().join('');
if (palindromeString === reversed) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}


// 13. Ask the user for a number and determine if it is **prime** or not. Show the result using `alert()`.

var numberToCheck = prompt("Enter a number to check if it's prime:");
numberToCheck = Number(numberToCheck);
var isPrime = true;

if (numberToCheck < 2) {
    isPrime = false;
} else {
    for (var i = 2; i < numberToCheck; i++) {
        if (numberToCheck % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("The number is prime.");
} else {
    console.log("The number is not prime.");
}

// 14. Create an array of 10 random numbers between 1 and 100. Use a loop to find the largest number in the array.
var number = [];
for (var i = 0; i < 10; i++) {
    var userInput = prompt("Enter number " + (i + 1) + ":");
    number.push(Number(userInput));
}

var largestNumber = Math.max(...number);
console.log("The largest number in the array is: " + largestNumber);


// 15. Write a program to simulate a simple calculator. Ask the user for two numbers and an operation (+, −, ×, ÷), and then perform and display the result.
var firstNumber = prompt("Enter the first number:");
var secondNumber = prompt("Enter the second number:");
var operation = prompt("Enter an operation (+, -, *, /):");
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
var result;
switch (operation) {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
        } else {
            alert("Cannot divide by zero.");
            result = null;
        }
        break;
    default:
        alert("Invalid operation.");
        result = null;
}
if (result !== null) {
    console.log("The result is: " + result);
}

// 16.Loop through an array of numbers and create a new array with only the numbers greater than 50. Use a `for` loop and `push()` method.

var originalArray = [10, 55, 23, 67, 45, 80, 30, 90, 12, 50];
var filteredArray = [];
for (var i = 0; i < originalArray.length; i++) {
    if (originalArray[i] > 50) {
        filteredArray.push(originalArray[i]);
    }
}
console.log("Original Array:", originalArray);
console.log("Filtered Array (numbers greater than 50):", filteredArray);
