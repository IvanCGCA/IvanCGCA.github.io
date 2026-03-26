// Efecto de máquina de escribir para el subtítulo
const text = "QA Backend Engineer especializado en API Testing, Microservicios y Sistemas Financieros.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.querySelector("#hero p").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Ejecutar cuando cargue la página
window.onload = () => {
    document.querySelector("#hero p").innerHTML = ""; // Limpia el texto inicial
    typeWriter();
};