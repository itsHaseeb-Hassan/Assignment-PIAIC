"use strict";
// - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
//  - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
//  - Write a program that uses a while loop to print the first 25 integers.
//  - Write a program that uses a while loop to print the first 10 even numbers.
//  - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
//  - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
//  - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
function insertDelete(myArray, i, value) {
    myArray.splice(i, 0, value);
    return myArray;
}
let newArray = insertDelete([2, 3, 5, 6, 7, 8], 3, 34);
console.log("new Array is", newArray);
let startNumber = 1;
while (startNumber <= 25) {
    console.log("number is", startNumber);
    startNumber++;
}
let myNumber = 1;
while (myNumber <= 20) {
    if (myNumber % 2 === 0) {
        console.log(myNumber);
    }
    myNumber++;
}
function fictorial(positiveInteger) {
    let fact = 1;
    for (let i = 1; i <= positiveInteger; i++) {
        fact *= i;
    }
    console.log("factorial is", fact);
}
fictorial(5);
let multipleNumberArray = [-7, 2, 3, 4, 5, -1, -2, -3];
for (let i = 0; i <= multipleNumberArray.length; i++) {
    if (multipleNumberArray[i] < 0) {
        multipleNumberArray.splice(i, 1);
        i--;
    }
}
console.log(multipleNumberArray);
function sumFunc(myArray) {
    let sumNumber = 0;
    for (let i = 0; i < myArray.length; i++) {
        sumNumber += myArray[i];
    }
    return sumNumber;
}
console.log("sum is all Array Number:", sumFunc([2, 4, 5, 6, 8, 10, 12]));
let tempArray = [3, 4, 5, 6, 7];
let index = 0;
let fahTemp = [];
while (index < tempArray.length) {
    let tempF = (tempArray[index] * 9 / 5) + 32;
    fahTemp.push(tempF);
    index++;
}
console.log(fahTemp);
