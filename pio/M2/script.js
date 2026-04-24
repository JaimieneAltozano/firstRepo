const cerrar = document.getElementById("cerrar");
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");

abrir.addEventListener("click", () => {
    nav.classList.add("nav");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("nav");
});

