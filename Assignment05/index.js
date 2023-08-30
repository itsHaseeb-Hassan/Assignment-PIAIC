"use strict";
// - 
//  -
//  - 
//  - 
//  -
//  - 
// Program 01 Statement
console.log("\x1b[32m%s\x1b[0m", "Develop a program that calculates and prints the sum of the first n even numbers using a for loop.\n");
let nNumber = 10;
let sum = 0;
for (let i = 1; i <= nNumber; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("\x1b[36m%s\x1b[0m", "sum of n even numbers is:", sum + "\n");
// Program 02 Statement
console.log("\x1b[32m%s\x1b[0m", "Implement a program that uses a for loop to iterate through an array of numbers and print even numbers.\n");
let evenOddNumber = [2, 3, 5, 7, 6, 8, 10, 25, 34, 56, 45];
let evenNumber = [];
for (let i = 0; i < evenOddNumber.length; i++) {
    if (evenOddNumber[i] % 2 === 0) {
        evenNumber.push(evenOddNumber[i]);
    }
}
console.log("\x1b[36m%s\x1b[0m", "Even Number Array", evenNumber + "\n");
// Program 03 Statement
console.log("\x1b[32m%s\x1b[0m", "Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones\n");
for (let i = 0; i < evenOddNumber.length; i++) {
    if (evenOddNumber[i] % 2 === 0) {
        evenOddNumber.splice(i, 1);
        i--;
    }
}
console.log("\x1b[36m%s\x1b[0m", "Odd Number Array", evenOddNumber, "\n");
// Program 04 Statement
console.log("\x1b[32m%s\x1b[0m", "Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.\n");
let pi = 3.14;
function areaOfCircle(radius) {
    let areaCircle = pi * radius * radius;
    return areaCircle;
}
console.log("\x1b[36m%s\x1b[0m", "Radius of Circle:", areaOfCircle(5), "\n");
// Program 05 Statement
console.log("\x1b[32m%s\x1b[0m", " Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.\n");
let gradesNumber = [90, 80, 70, 60, 50, 40, 30];
for (let i = 0; i < gradesNumber.length; i++) {
    if (gradesNumber[i] < 50) {
        gradesNumber.splice(i, 1);
        i--;
    }
}
console.log("\x1b[36m%s\x1b[0m", "Passing Grades Number:", gradesNumber, "\n");
// Program 06 Statement
console.log("\x1b[32m%s\x1b[0m", "Write a program that uses a function to find the largest element in an array of numbers.\n");
function largestNumber(findNumber) {
    let largest = findNumber[0];
    for (let i = 0; i < findNumber.length; i++) {
        if (findNumber[i] > largest) {
            largest = findNumber[i];
        }
    }
    return largest;
}
console.log("\x1b[36m%s\x1b[0m", "Largest Number is:", largestNumber([756, 201, 506, 32, 98]));
