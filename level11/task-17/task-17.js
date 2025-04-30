let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObject = { ...obj1, ...obj2 };

let copiedArray = [...arr1];
copiedArray[0] = 99;

console.log("Combined Array:", combinedArray);
console.log("Combined Object:", combinedObject);
console.log("Original Array:", arr1);
console.log("Modified Copy:", copiedArray);
