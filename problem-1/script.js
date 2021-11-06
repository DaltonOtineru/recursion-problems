//define a function that accepts a number
// create an if statement
// if the argument passed in is 0, return 1
// if not, return the number*number-1 until 0

function factorial(n){
    if(n === 0){
        return 1;
    } 
        return n * factorial(n - 1);
    }

console.log(factorial(4));

// 24