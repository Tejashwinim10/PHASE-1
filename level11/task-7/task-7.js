let favoriteFoods = ["Pizza", "Sushi", "Tacos", "Pasta", "Ice Cream"];
console.log("Original array:", favoriteFoods);

favoriteFoods.push("Burger");
console.log("After adding 'Burger' to the end:", favoriteFoods);

favoriteFoods.shift();
console.log("After removing the first item:", favoriteFoods);

console.log("Length of the array:", favoriteFoods.length);

let pastaIndex = favoriteFoods.indexOf("Pasta");
console.log("Index of 'Pasta':", pastaIndex);

let slicedFoods = favoriteFoods.slice(1, 4);
console.log("Sliced array (index 1 to 3):", slicedFoods);

console.log("Final original array:", favoriteFoods);
console.log("New sliced array:", slicedFoods);
