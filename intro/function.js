//add function
function add (x,y) {
    let addSum = x+y;
    return addSum;
}

let result = add(5,100);
console.log(result)

// sub function

function sub (i,j){
    let subtract = i-j;
    return subtract;
}

let result2 = sub(100,50);
console.log(result2) 


//div function
function div (a,b){
    let divide = a/b;
    return divide;
}

let result3 = div(100,9)
console.log(result3) 

//mul function
function mul (a,b){
    let multiply = a*b;
    return multiply;
}
let result4 = mul(4,5)
console.log(result4)

//odd or even function
function odd(number){
    if (number % 2 == 0){
        return "Even";
    } else {
        return "odd";
    }
}

let result5 = odd(105)
console.log(result5)

//power function

function power(base,exponent){
    let result6 = base** exponent;
    return result6;
}

let result6 = power(2,4);
console.log(result6)


let str1 = "Hello";
let str2 = "World";
let result7 = str1 + " " + str2;
console.log(result7);
 
console.log(Math.log10(100));
 
function calculateCircleCircumference(radius) {
    const pi = Math.PI;
    return 2 * pi * radius;
}

const radius = 5;
const circumference = calculateCircleCircumference(radius);
console.log (`The circumference of the circle with radius ${radius} is ${circumference}`);

//Quadratic Equation
function solveQuadraticEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return "No real solutions";
    } else if (discriminant === 0) {
        return [-b / (2 * a)];
    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant);
        return [(-b + sqrtDiscriminant) / (2 * a), (-b - sqrtDiscriminant) / (2 * a)];
    }
}

// Example usage:
const a = 1;
const b = -3;
const c = 2;
const solutions = solveQuadraticEquation(a, b, c);
console.log(`The solutions to the quadratic equation ${a}x^2 + ${b}x + ${c} = 0 are ${solutions}`);

//palindrome
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

const inputStr = "people";
const isPal = isPalindrome(inputStr);
console.log(`${inputStr} is ${isPal ? "" : "not "}a palindrome`);
