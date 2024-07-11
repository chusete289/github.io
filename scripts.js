function switchLanguage(lang) {
    if (lang === 'es') {
        document.documentElement.lang = "es";
        document.querySelector("#hero-description").innerText = "Desarrollador Web | Freelancer";
        document.querySelector("#about h2").innerText = "Sobre mí";
        document.querySelector("#about-text").innerText = "Soy un apasionado desarrollador web con experiencia en crear, mantener y diseñar sitios web dinámicos y responsivos. Mi objetivo es transformar ideas en proyectos digitales atractivos, ayudando a las empresas a alcanzar sus metas con soluciones tecnológicas innovadoras.";
        document.querySelector("#skills h2").innerText = "Habilidades";
        document.querySelector("#skills ul").innerHTML = `
            <li>Desarrollo Frontend: HTML, CSS, JavaScript, React</li>
            <li>Desarrollo Backend: Node.js, Express, Python, Django</li>
            <li>Base de Datos: MongoDB, MySQL</li>
            <li>Control de Versiones: Git, GitHub</li>`;
        document.querySelector("#projects h2").innerText = "Proyectos";
        document.querySelector("#projects .project:nth-child(1) h3").innerText = "E-commerce Platform: Culinary King";
        document.querySelector("#projects .project:nth-child(1) p").innerText = "Desarrollé una plataforma de comercio electrónico utilizando HTML, CSS, y JavaScript para el frontend, y Node.js y Express para el backend. Implementé MongoDB como base de datos, logrando una solución eficiente y escalable para la gestión de productos alimenticios.";
        document.querySelector("#projects .project:nth-child(1) a").innerText = "Ver proyecto";
        document.querySelector("#projects .project:nth-child(2) h3").innerText = "Project Management Application: TravelLite";
        document.querySelector("#projects .project:nth-child(2) p").innerText = "Creé una aplicación web para una agencia de viajes utilizando Django y MySQL. Integré Materialize CSS para un diseño responsivo y moderno, mejorando la organización y eficiencia del equipo de la agencia.";
        document.querySelector("#projects .project:nth-child(2) a").innerText =```javascript
switchLanguage('en');
document.querySelector("#projects .project:nth-child(3) h3").innerText = "Data Analysis Tool: Adventour";
document.querySelector("#projects .project:nth-child(3) p").innerText = "Desarrollé una herramienta de análisis de datos utilizando HTML, CSS, y JavaScript. La herramienta facilita la visualización de datos y soporta la toma de decisiones estratégicas mediante gráficos interactivos y análisis en tiempo real.";
document.querySelector("#projects .project:nth-child(3) a").innerText = "Ver proyecto";
document.querySelector("#testimonials h2").innerText = "Testimonios";
document.querySelector("#testimonials .testimonial:nth-child(1) p:nth-child(2)").innerText = "Jesús es un desarrollador increíble. Su trabajo ha sido esencial para el éxito de nuestro proyecto.";
document.querySelector("#testimonials .testimonial:nth-child(1) p:nth-child(3)").innerText = "- María González, CEO de TechCorp";
document.querySelector("#testimonials .testimonial:nth-child(2) p:nth-child(2)").innerText = "La calidad y atención al detalle que Jesús ofrece es excepcional. Lo recomendaría sin dudar.";
document.querySelector("#testimonials .testimonial:nth-child(2) p:nth-child(3)").innerText = "- Juan Pérez, Gerente de Proyecto en Innovate Ltd.";
document.querySelector("#contact h2").innerText = "Contacto";
document.querySelector("#contact form label[for='name']").innerText = "Nombre:";
document.querySelector("#contact form label[for='email']").innerText = "Email:";
document.querySelector("#contact form label[for='message']").innerText = "Mensaje:";
document.querySelector("#contact form button").innerText = "Enviar";
}

const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;

function updateCarousel() {
carouselSlide.style.transition = "transform 0.5s ease-in-out";
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

document.querySelector('.next').addEventListener('click', () => {
if (counter >= images.length - 1) {
counter = 0;
} else {
counter++;
}
updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
if (counter <= 0) {
counter = images.length - 1;
} else {
counter--;
}
updateCarousel();
});

setInterval(() => {
if (counter >= images.length - 1) {
counter = 0;
} else {
counter++;
}
updateCarousel();
}, 3000); // Cambia la imagen cada 3 segundos
