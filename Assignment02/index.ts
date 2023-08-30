
// Program 01 Statement
console.log("\x1b[32m%s\x1b[0m"," Write a program that calculates the area of a rectangle.\n");
let lengthRectangle:number=14;
let widthRectangle:number=15;
let areaRectangle:number=(lengthRectangle*widthRectangle);
console.log("\x1b[36m%s\x1b[0m","Area of Rectangle:",areaRectangle,"\n");

// Program 02 Statement
console.log("\x1b[32m%s\x1b[0m"," Write a program that takes input and calculates the volume of a cube.\n");
let lengthCube:number=23;
let breadthCube:number=12;
let heightCube:number=10;

let volumeCube:number=lengthCube*breadthCube*heightCube;
console.log("\x1b[36m%s\x1b[0m","Volume of cube is:",volumeCube,"\n");

// Program 03 Statement
console.log("\x1b[32m%s\x1b[0m"," Write a program that checks if a given number is positive, negative, or zero.\n");
let givenNumber:number=16;

if(givenNumber>0){
    console.log("\x1b[36m%s\x1b[0m","Number is Positive:",givenNumber,"\n");
}
else if(givenNumber<0){
    console.log("\x1b[36m%s\x1b[0m","Number is Negative:",givenNumber,"\n");
}
else{
    console.log("\x1b[36m%s\x1b[0m","Number is zero:",givenNumber,"\n");
}

// Program 04 Statement
console.log("\x1b[32m%s\x1b[0m"," Write a program that checks if a given number is even or odd. \n");
if(givenNumber % 2 ===0){
    console.log("\x1b[36m%s\x1b[0m","Number is Even:",givenNumber,"\n");
}
else{
    console.log("\x1b[36m%s\x1b[0m","Number is Odd:",givenNumber,"\n");
}
// Program 05 Statement
console.log("\x1b[32m%s\x1b[0m","Write a program that determines if a person is eligible to vote based on their age. \n");
let personAge:number=15;

if(personAge>=18){
    console.log("\x1b[36m%s\x1b[0m","Person is eligible for vote and age is:",personAge,"\n");
}
else{
    console.log("\x1b[36m%s\x1b[0m","Person is not eligible for vote and age is:",personAge,"\n");
}

// Program 06 Statement
console.log("\x1b[32m%s\x1b[0m"," Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2)/(4%3)-7) \n");
let expressionCalculate:number=(((10 + 5) * 3 - 2)/(4%3)-7);
console.log("\x1b[36m%s\x1b[0m","Expression Result is:",expressionCalculate,"\n");