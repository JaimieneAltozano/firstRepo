const name = prompt("Enter ur name");
let age = parseInt(prompt("Your age"));

let status = (age >= 18) ? "Compra un ataúd" : "¿Será que aún cabes en la cuna?";

alert(`${name}, ${status}`);


//else{
//    alert("Try again");
//}

let userConsent = confirm("Do u want to sleep?");

if (userConsent) {
    alert("Pay me first");
}else{
    alert("Why you didn't want to marry with the computer?");
}

