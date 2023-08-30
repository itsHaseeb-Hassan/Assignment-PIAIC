// Write a program that uses filter to remove all negative numbers from an array of numbers

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.


// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.


// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.


// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

function removeNegativeNumber(myArray:number[]):number[]{
      return myArray.filter(number=>number>=0);
}

console.log("Even Number Array is",removeNegativeNumber([-2,-3,-4,5,6,7,8,-12]));

function multiplyByTwo(myArray:number[]):number[]{
     return myArray.map(value=>value*2);
}
console.log("Multiply By Two",multiplyByTwo([1,2,3,4,5]));



function fiveFruits(fruits:string[]):string[]{
    return fruits.filter((fruit)=>fruit.length>5);
}

console.log("More than 5 character fruits",fiveFruits(["apple", "banana", "cherry", "date", "grape"]));


function squareEvenNumbers(numbers:number[]):number[]{
 return(  numbers.filter(number=>number % 2 ===0).map(value=>value*2));
}

console.log("Square Number of even Numbers",squareEvenNumbers([1,2,3,4,5,6,7,8,9,10]));

function tempFahrenhiet(myArray:number[]):number[]{
  return(myArray.map(number=>(number*9/5)+32));
}

console.log("Temprature in Fahrenheit is:",tempFahrenhiet([0, 10, 20, 30, 40]));

function doubleNumberArray(numbers:number[]):number[]{
    return(numbers.filter(number=>number %2 !== 0).map(value=>value+value));
}
console.log("Double Array of Odd Number is",doubleNumberArray([3, 6, 9, 12, 15, 18]));




    let notSignArray:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];

    notSignArray.forEach(sign=> console.log(sign.concat("!")));