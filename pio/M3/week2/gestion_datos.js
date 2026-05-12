// Create product objects
const products = [];
const product1 = [];
const product2 = [];

products[product1 [{
    "id": 1,
    "name": "Pato",
    "price": 12
}], product2 [{
    "id": 2,
    "name": "Pollito",
    "price": 11
}]];

// "Set" practice ;D
const nums = new Set([1, 1, 1, 2, 3, 3, 4, 5, 5]);
nums.add("a");

let count = "";
for (const i of nums) {
    count +=i + "\n";
}
const h1 = document.getElementById("h1").textContent = count;
count = ""; // Reset so it will not have duplications
let answer = nums.has("1");
const exist = document.getElementById("exist").innerHTML = "The answer is... " + answer; // false because it is not a string
nums.delete(2);
for (const i of nums) {
    count += i + "\n";
}
const deleted = document.getElementById("deleted").textContent = "A number has been deleted " + count; // Here could had a duplication but "count" was reset

// "Map" practice
