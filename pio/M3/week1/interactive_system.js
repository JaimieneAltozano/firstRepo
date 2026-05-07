const name = prompt("Enter ur name");
let age = parseInt(prompt("Your age"));

let status = (age >= 18) ? "compra un ataúd" : "¿será que aún cabes en la cuna?";

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

for (let i = 0; i < 5; i++) {
    alert(i);
}

let i = 4;

while (i > -1) {
    alert(i);
    i--;
}