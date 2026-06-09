// Create product objects
const product1 = {id: '1', name: 'Pato', price: 12};
const product2 = {id: '2', name: 'Pollito', price: 11};

// "Set" practice ;D
const nums = new Set([1, 1, 1, 2, 3, 3, 4, 5, 5]);
nums.add("a"); // add(), thought I think that can do it with push() too, 
// only this function add the value in the end, and pop() deletes the end

let count = "";
for (const i of nums) {
    count +=i + "\n";
}
const h1 = document.getElementById("h1").textContent = count;
count = ""; // Reset so it will not have duplications
let answer = nums.has("1"); //has() but... is it the same 'include'? I think yes haha
const exist = document.getElementById("exist").innerHTML = "The answer is... " + answer; // false because it is not a string
nums.delete(2);
for (const i of nums) {
    count += i + "\n";
}
const deleted = document.getElementById("deleted").textContent = "A number has been deleted " + count; // Here could had a duplication but "count" was reset

// "Map" practice
const products = new Map();

// Agregar products 
products.set("Food", {
    name: "Mondongo e' piscao",
    price: 0,
    stock: 0,
    description: "Por eso e' free, because no hay"
});

products.set("Ropa", {
    name: "Smoking",
    price: 12,
    stock: 1,
    description: "No es para chirretes"
});

// Creación de Map
const showMap = document.getElementById('showMap').innerHTML = (products.get("Ropa")).name;

// Show all the products, bucles for
for (const[categoria, info] of products) {
    alert(`Bucle for of:
        Categoría: ${categoria}
        Producto: ${info.name}
        Price: $${info.price}
        Stock: ${info.stock}
        Description: ${info.description}`);
}
/*
alert(Object.keys(product1)); // Show key
alert(Object.values(product1)); // Show value
alert(JSON.stringify(product1)); // Show both :D
*/

// Bucles: forEach
products.forEach((info, categoria) => {
    alert(`Bucle forEach:
        Categoría: ${categoria}
        Producto: ${info.name}
        Price: $${info.price}
        Stock: ${info.stock}
        Description: ${info.description}`);
});

// for... in
// This can't be because this is only for arrays :D

// Object.entries() it's better for simple objects, but for Map, we can use 
// entries() method or Array.from() to convert it to an array of entries
console.log('Entries del objeto product1:', Object.entries(product1));

// for...in is used to iterate over the enumerable properties of an object, but 
// it is not suitable for Map, as Map does not have enumerable properties like a 
// normal object. So we can convert it to an array with Array.from() or use entries()
// method for Map.

for (const key in product1) {
    console.log(`${key}: ${product1[key]}`);
}

// Array is a list, object is a collection of key-value pairs, and Map is a 
// collection of key-value pairs where keys can be of any type (dictionary). 

// For a Map, there is use entries() or Array.from(products.entries())
console.log('Entries del Map products:', Array.from(products.entries()));

for (const [categoria, info] of products.entries()) {
    console.log(`Bucle for...of:
        Categoría: ${categoria}
        Producto: ${info.name}
        Price: $${info.price}
        Stock: ${info.stock}
        Description: ${info.description}`);
}
