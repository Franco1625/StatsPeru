
const botonesVerMas = document.querySelectorAll(".ver-mas");


botonesVerMas.forEach((boton) => {
    boton.addEventListener("click", () => {
        const contenidoCompleto = boton.nextElementSibling;
        const botonVerMenos = boton.nextElementSibling.nextElementSibling;
        contenidoCompleto.style.display = "block";
        boton.style.display = "none";
        botonVerMenos.style.display = "inline"; 
    });
});


const botonesVerMenos = document.querySelectorAll(".ver-menos");


botonesVerMenos.forEach((boton) => {
    boton.addEventListener("click", () => {
        const contenidoCompleto = boton.previousElementSibling;
        const botonVerMas = boton.previousElementSibling.previousElementSibling;
        contenidoCompleto.style.display = "none"; 
        boton.style.display = "none"; 
        botonVerMas.style.display = "inline"; 
    });
});
