//  find product of two arrays

let arr1 = [1, 2, 3, 4]
let arr2 = [11, 10, 6, 6]

function findprod() {
    let newArray = [];
    // if(arr1.length == arr2.length){
        for(let i = 0; i<arr1.length; i++){
            newArray[i] = arr1[i] * arr2[i]; 
        }
    // }
    return newArray;
}

console.log(findprod(arr1, arr2));