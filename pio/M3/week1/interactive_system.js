const name = prompt("Enter ur name");
let age = parseInt(prompt("Your age"));

function register(name, age) {
    let status = (age >= 18) ? "compra un ataúd" : "¿será que aún cabes en la cuna?";
    alert(`${name}, tienes ${age} años, ${status}`);
}

while(isNaN(age)) {
    alert("Try again");
    age = parseInt(prompt("Your age"));
}

register(name, age);