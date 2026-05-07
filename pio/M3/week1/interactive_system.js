function register(name, age) {
    let status = (age >= 18) ? "compra un ataúd" : "¿será que aún cabes en la cuna?";
    alert(`${name}, ${age}, ${status}`);
}

const name = prompt("Enter ur name");
let age = parseInt(prompt("Your age"));

while(isNaN(age)) {
    alert("Try again");
    age = parseInt(prompt("Your age"));
}

register(name, age);