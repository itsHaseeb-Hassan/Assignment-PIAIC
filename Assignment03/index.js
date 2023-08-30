"use strict";
// Program 01 Statement
console.log("\x1b[32m%s\x1b[0m", "Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.\n");
let temperatureCelsius = 32;
let calculateTemperatureFahrenheit = 32 * (9 / 5) + 32;
console.log("\x1b[36m%s\x1b[0m", "Temprature in Fahrenheit", calculateTemperatureFahrenheit, "\n");
// Program 02 Statement
console.log("\x1b[32m%s\x1b[0m", "Write a program that calculates the percentage.\n");
let givenValue = 45;
let totalValue = 60;
let percentage = (givenValue / totalValue) * 100;
const cyanColor = "\x1b[36m"; // Cyan color
const resetColor = "\x1b[33m"; // Reset color to default
// console.log("\x1b[36m%s\x1b[0m","Percentage of givennumber is",percentage+"% \n" );
console.log(`${cyanColor}Percentage of Given Number is ${resetColor} ${percentage}% \n`);
// Program 03 Statement
console.log("\x1b[32m%s\x1b[0m", "Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.\n");
let dayInWeek = 7;
let week = Math.floor(givenValue / dayInWeek);
let remainingDay = Math.floor(givenValue % dayInWeek);
console.log(`${cyanColor}givenValue is${resetColor} ${givenValue} ${cyanColor}is equal to ${resetColor} ${week} ${cyanColor} weeks and ${resetColor}${remainingDay} ${cyanColor} days\n`);
// Program 04 Statement
console.log("\x1b[32m%s\x1b[0m", "Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.\n");
let priceOfProduct = 100;
if (priceOfProduct >= 100) {
    let calculateDiscountPrice = (10 / 100) * priceOfProduct;
    let totalPrice = priceOfProduct - calculateDiscountPrice;
    console.log("\x1b[36m%s\x1b[0m", "Total Price After Discount", totalPrice, "\n");
}
else {
    let calculateDiscountPrice = (5 / 100) * priceOfProduct;
    let totalPrice = priceOfProduct - calculateDiscountPrice;
    console.log("\x1b[36m%s\x1b[0m", "Total Price After Discount", totalPrice, "\n");
}
// Program 05 Statement
console.log("\x1b[32m%s\x1b[0m", "Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print Child If it's between 13 and 19, print Teenager Otherwise, print Adult.\n");
let personAge = 13;
if (personAge <= 12) {
    console.log("\x1b[36m%s\x1b[0m", "Person is child", personAge, "\n");
}
else if (personAge > 12 && personAge <= 19) {
    console.log("\x1b[36m%s\x1b[0m", "Person is Teenager", personAge, "\n");
}
else {
    console.log("\x1b[36m%s\x1b[0m", "Person is adult", personAge, "\n");
}
// Program 06 Statement
console.log("\x1b[32m%s\x1b[0m", "Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.\n");
let tempratureInCelsius = 20;
if (tempratureInCelsius <= 20) {
    const cyanColor = "\x1b[36m"; // Cyan color
    const resetColor = "\x1b[33m"; // Reset color to default
    console.log(`${cyanColor} Whether is cold suggest wear warm clothes ${resetColor} ${tempratureInCelsius} ${resetColor}${"\xB0"} \n`);
}
else {
    const cyanColor = "\x1b[36m"; // Cyan color
    const resetColor = "\x1b[33m"; // Reset color to default
    console.log(`${cyanColor} Whether is hot suggest cotton dress ${resetColor} ${tempratureInCelsius} ${resetColor}${"\xB0"} \n`);
}
// Program 07 Statement
console.log("\x1b[32m%s\x1b[0m", "Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.\n");
let divisibleNumber = 7;
if (divisibleNumber % 3 === 0 && divisibleNumber % 5 === 0) {
    console.log("\x1b[36m%s\x1b[0m", "Number is divisible by 3 or 5", divisibleNumber, "\n");
}
else if (divisibleNumber % 3 === 0) {
    console.log("\x1b[36m%s\x1b[0m", "Number is divisible by one number 3 ", divisibleNumber, "\n");
}
else if (divisibleNumber % 5 === 0) {
    console.log("\x1b[36m%s\x1b[0m", "Number is divisible by 5", divisibleNumber, "\n");
}
else {
    console.log("\x1b[36m%s\x1b[0m", "Number is not divisible by 3 or 5", divisibleNumber, "\n");
}
// Program 08 Statement
console.log("\x1b[32m%s\x1b[0m", "Write a program that checks if the given year is leap year or not.\n");
let numberOfDaysInyear = 365;
if (numberOfDaysInyear === 365) {
    console.log("\x1b[36m%s\x1b[0m", "This year is not leap year", numberOfDaysInyear, "\n");
}
else if (numberOfDaysInyear === 366) {
    console.log("\x1b[36m%s\x1b[0m", "This year is leap year", numberOfDaysInyear, '\n');
}
else {
    console.log("\x1b[36m%s\x1b[0m", "This given value is wrong", numberOfDaysInyear, '\n');
}
// Program 09 Statement
console.log("\x1b[32m%s\x1b[0m", "Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.\n");
let numberOfDaysInWeek = 5;
if (numberOfDaysInWeek <= 7) {
    if (numberOfDaysInWeek === 1) {
        console.log("\x1b[36m%s\x1b[0m", "Name of the Day is Monday and number of Day is", numberOfDaysInWeek, '\n');
    }
    else if (numberOfDaysInWeek === 2) {
        console.log("\x1b[36m%s\x1b[0m", "Name of the Day is Tuesday and number of Day is", numberOfDaysInWeek, '\n');
    }
    else if (numberOfDaysInWeek === 3) {
        console.log("\x1b[36m%s\x1b[0m", "Name of the Day is Wednesday and number of Day is", numberOfDaysInWeek, '\n');
    }
    else if (numberOfDaysInWeek === 4) {
        console.log("\x1b[36m%s\x1b[0m", "Name of the Day is Thursday and number of Day is", numberOfDaysInWeek, '\n');
    }
    else if (numberOfDaysInWeek === 5) {
        console.log("\x1b[36m%s\x1b[0m", "Name of the Day is Friday and number of Day is", numberOfDaysInWeek, '\n');
    }
    else if (numberOfDaysInWeek === 6) {
        console.log("\x1b[36m%s\x1b[0m", "Name of the Day is Saturday and number of Day is", numberOfDaysInWeek, '\n');
    }
    else if (numberOfDaysInWeek === 7) {
        console.log("\x1b[36m%s\x1b[0m", "Name of the Day is Sunday and number of Day is", numberOfDaysInWeek, '\n');
    }
}
// Program 10 Statement
console.log("\x1b[32m%s\x1b[0m", "Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.\n");
let numberOfUnits = 500;
let oneUnitPrice = 28;
if (numberOfUnits < 100) {
    let withOutTaxBill = numberOfUnits * oneUnitPrice;
    console.log("\x1b[36m%s\x1b[0m", "Total Bill Is", withOutTaxBill, '\n');
}
else if (numberOfUnits >= 100 && numberOfUnits < 200) {
    let withOutTaxBill = numberOfUnits * oneUnitPrice;
    let addTax = (10 / 100) * withOutTaxBill;
    let totalBill = withOutTaxBill + addTax;
    console.log("\x1b[36m%s\x1b[0m", "Total Bill Is", totalBill, '\n');
}
else if (numberOfUnits >= 200 && numberOfUnits < 500) {
    let withOutTaxBill = numberOfUnits * oneUnitPrice;
    let addTax = (15 / 100) * withOutTaxBill;
    let totalBill = withOutTaxBill + addTax;
    console.log("\x1b[36m%s\x1b[0m", "Total Bill Is", totalBill, '\n');
}
else {
    let withOutTaxBill = numberOfUnits * oneUnitPrice;
    let addTax = (25 / 100) * withOutTaxBill;
    let totalBill = withOutTaxBill + addTax;
    console.log("\x1b[36m%s\x1b[0m", "Total Bill Is", totalBill, '\n');
}
