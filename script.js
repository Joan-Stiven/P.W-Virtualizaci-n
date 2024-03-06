// Función para cambiar la clase activa en la barra de navegación
function setActiveLink() {
    // Obtiene todos los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('nav a');

    // Itera sobre cada enlace y verifica si su href coincide con la URL actual
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active'); // Agrega la clase 'active' al enlace coincidente
        } else {
            link.classList.remove('active'); // Elimina la clase 'active' de los enlaces no coincidentes
        }
    });
}

// Función principal que se ejecuta cuando se carga la página
function main() {
    setActiveLink(); // Establece el enlace activo en la barra de navegación
}

// Ejecuta la función principal cuando se carga completamente la página
window.addEventListener('load', main);