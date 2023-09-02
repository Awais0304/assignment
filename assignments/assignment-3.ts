
// // Create a function that takes an array, an index, and a value as parameters.
// Inside the function, use the splice method to insert the value at the specified
//  index in the array.Return the modified array.

function insertAtIndex(arr: number[], index: number, value: number): number[] {

    arr.splice(index, 0, value);


    return arr;
}

let originalArray: number[] = [6, 10, 18, 4,];
let modifiedArray = insertAtIndex(originalArray, 2, 31);
console.log(modifiedArray);




// Write a program that uses a while loop to print the first 25 integers

let i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}



// Write a program that uses a while loop to print the first 10 even numbers.

let count = 0;
let number = 2;
console.log(" first  ten even number is ")
while (count < 10) {

    console.log(number);
    number += 2;
    count++;
}




// - Create a function that takes a positive integer as parameter and 
// uses a while loop to calculate and return the factorial of that number.

function calculateFactorial(number: number): number {
    if (number < 0) {
        throw new Error("Input must be a positive integer.");
    }

    let factorial = 1;
    let currentNumber = number;

    while (currentNumber > 0) {
        factorial *= currentNumber;
        currentNumber--;
    }

    return factorial;
}


let inputNumber = 5;
let result = calculateFactorial(inputNumber);
console.log(`The factorial of ${inputNumber} is ${result}`);



// Write a program having an array of numbers if the number is 
// negative it should remove the negative number from the array

function removeNegativeNumbers(arr: number[]): number[] {

    let filteredArray = arr.filter(number => number >= 0);
    return filteredArray;
}

let numbersArray: number[] = [1, -2, 3, -4, 5, -6];
let positiveNumbersArray = removeNegativeNumbers(numbersArray);

console.log("Original Array:", numbersArray);
console.log("Array with Negative Numbers Removed:", positiveNumbersArray);



// Create a function that takes an array of numbers as parameter.
//  Use a while loop to calculate and return the sum of all the numbers in the array.

function calculateSumOfArray(numbers: number[]): number {
    let sum = 0;
    let index = 0;

    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }

    return sum;
}

let numbersArr: number[] = [1, 2, 40, 4, 20];
let sum = calculateSumOfArray(numbersArr);

console.log(`The sum of the array is: ${sum}`);

// Implement a program that takes a list of temperatures in Celsius as input from the user.
//  Convert each temperature to Fahrenheit using the formula F = (C * 9 / 5) + 32 and store
//  the converted temperatures in an array.Use a while loop to perform the conversion for each temperature.

function convertCelsiusToFahrenheit(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        array[i] = (array[i] * 9/5) + 32;
         i++;
    }
    return array;
}

const arry2: number[] = [10, 20, 30, 40, 50];

console.log(convertCelsiusToFahrenheit(arry2));