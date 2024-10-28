// Función para abrir una ventana específica y cerrar las demás
function abrirVentana(idVentana) {
    // Ocultar todas las ventanas
    let ventanas = document.querySelectorAll('.ventana');
    ventanas.forEach(function(ventana) {
        ventana.style.display = 'none';
    });

    // Mostrar la ventana seleccionada
    document.getElementById(idVentana).style.display = 'block';
}
