// print Even numbers in given array

let myArray = [11, 22, 33, 44, 55, 66, 77, 44];
// console.log(myArray.splice(2, 1));
let newArray = [];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 !== 0) {
    newArray.push(myArray[i]);
  }
}

// console.log(`odd numbers are: `, newArray);

// console.log(myArray.shift());
// console.log(myArray.pop());
// console.log(myArray.unshift(111));
// console.log(myArray);

// delete all occurrence of element in given array

function deleteElement(myArray, element){
    for(let j = 0; j<myArray.length; j++){
        if(myArray[j] == element)
        {
          myArray.splice(j, 1)
        }
    } return myArray;
}

let arr = deleteElement(myArray, 44)
// console.log(arr);


// function deleteElement(myArray, element){
//   return myArray.filter(val => val !== element);    
// }
// const arr = deleteElement(myArray, 44)
// console.log(arr);


//find the power of a number using for loop

function numPower(num, pow) {
  let power = 1
  for(let i = 0; i<pow; i++){
    power = power * num;
  }
  return power
}

console.log(numPower(3, 2))

