// // Create a function that takes an array, an index, and a value as parameters.
// Inside the function, use the splice method to insert the value at the specified
//  index in the array.Return the modified array.
function insertAtIndex(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
var originalArray = [6, 10, 18, 4,];
var modifiedArray = insertAtIndex(originalArray, 2, 31);
console.log(modifiedArray);
// Write a program that uses a while loop to print the first 25 integers
var i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}
// Write a program that uses a while loop to print the first 10 even numbers.
var count = 0;
var number = 2;
console.log(" first  ten even number is ");
while (count < 10) {
    console.log(number);
    number += 2;
    count++;
}
// - Create a function that takes a positive integer as parameter and 
// uses a while loop to calculate and return the factorial of that number.
function calculateFactorial(number) {
    if (number < 0) {
        throw new Error("Input must be a positive integer.");
    }
    var factorial = 1;
    var currentNumber = number;
    while (currentNumber > 0) {
        factorial *= currentNumber;
        currentNumber--;
    }
    return factorial;
}
var inputNumber = 5;
var result = calculateFactorial(inputNumber);
console.log("The factorial of ".concat(inputNumber, " is ").concat(result));
// Write a program having an array of numbers if the number is 
// negative it should remove the negative number from the array
function removeNegativeNumbers(arr) {
    var filteredArray = arr.filter(function (number) { return number >= 0; });
    return filteredArray;
}
var numbersArray = [1, -2, 3, -4, 5, -6];
var positiveNumbersArray = removeNegativeNumbers(numbersArray);
console.log("Original Array:", numbersArray);
console.log("Array with Negative Numbers Removed:", positiveNumbersArray);
// Create a function that takes an array of numbers as parameter.
//  Use a while loop to calculate and return the sum of all the numbers in the array.
function calculateSumOfArray(numbers) {
    var sum = 0;
    var index = 0;
    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }
    return sum;
}
var numbersArr = [1, 2, 40, 4, 20];
var sum = calculateSumOfArray(numbersArr);
console.log("The sum of the array is: ".concat(sum));
// Implement a program that takes a list of temperatures in Celsius as input from the user.
//  Convert each temperature to Fahrenheit using the formula F = (C * 9 / 5) + 32 and store
//  the converted temperatures in an array.Use a while loop to perform the conversion for each temperature.
function convertCelsiusToFahrenheit(array) {
    for (var i_1 = 0; i_1 < array.length; i_1++) {
        array[i_1] = (array[i_1] * 9 / 5) + 32;
        i_1++;
    }
    return array;
}
var arry2 = [10, 20, 30, 40, 50];
console.log(convertCelsiusToFahrenheit(arry2));
