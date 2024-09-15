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
