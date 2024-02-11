/* number & string methods are used in this code.*/ 

/* 1. Reverse a number */

// function reverseNumber(num) {
//     let reversed = 0;
//     while (num > 0) {
//         reversed = reversed * 10 + num % 10;
//         num = Math.floor(num / 10);
//     }
//     return reversed;
// }

// console.log(reverseNumber(1234))

function reverseNumber(num) {
    num = num.toString().split("").reverse().join("");  
    console.log(typeof num);
    return num;
}

// console.log(reverseNumber(9876))

// let num1 = 12345;
// console.log(num1.toString().split("").reverse().join(""));

/* 2. Returns a passed string with letters in alphabetical order */

function sortString(str) {
    console.log({str});
    return str.split('').sort().join(''); 
}

// console.log("string with letters in alphabetical order :" ,sortString("tanu"));

// 3. function that accepts a string as a parameter and converts the first letter of each word into upper case.

function upperCase(str) {
    let array1 = str.split(' ');
    // console.log(array1);
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];
        // console.log(element);
        newArray.push(element.charAt(0).toUpperCase() + element.slice(1));  
    }
    return newArray.join(' ');
}

console.log(upperCase("the quick brown fox"));