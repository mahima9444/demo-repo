//Fibonacci Series

let num1 = 0, num2 = 1, nextNum;

function fibonacciSeries(num){
    
    for(let i = 0; i<num; i++){
console.log(num1);
nextNum = num1 + num2;
num1 = num2;
num2 = nextNum;
    }
}

fibonacciSeries(10)