function switchLanguage(language) {
    if (language === 'es') {
        document.getElementById('about-text').innerText = 'Soy un desarrollador web apasionado por crear soluciones innovadoras y eficientes. Con años de experiencia en el desarrollo frontend y backend, he trabajado en una variedad de proyectos que abarcan desde sitios web corporativos hasta aplicaciones web complejas.';
        document.getElementById('skills-list').innerHTML = `
            <li>HTML, CSS, JavaScript</li>
            <li>React, Vue.js</li>
            <li>Node.js, Express</li>
            <li>MongoDB, MySQL</li>
            <li>Python (Scraping)</li>
        `;
        document.getElementById('projects').innerHTML = `
            <h2>Proyectos</h2>
            <div class="project">
                <h3>Proyecto 1: Aplicación de E-commerce</h3>
                <p>Descripción: Desarrollo de una plataforma de comercio electrónico completa con integración de pasarela de pagos.</p>
                <a href="https://github.com/example/ecommerce" target="_blank">Ver proyecto</a>
            </div>
            <div class="project">
                <h3>Proyecto 2: Sistema de Gestión de Inventarios</h3>
                <p>Descripción: Creación de un sistema para la gestión eficiente de inventarios con funcionalidades de seguimiento en tiempo real.</p>
                <a href="https://github.com/example/inventarios" target="_blank">Ver proyecto</a>
            </div>
            <div class="project">
                <h3>Proyecto 3: Red Social para Viajeros</h3>
                <p>Descripción: Diseño y desarrollo de una red social donde los viajeros pueden compartir experiencias y consejos.</p>
                <a href="https://github.com/example/redsocial" target="_blank">Ver proyecto</a>
            </div>
        `;
        document.getElementById('contact').innerHTML = `
            <h2>Contacto</h2>
            <p>Email: jesuscarrilero@example.com</p>
            <p>Teléfono: +34 616 460 352</p>
        `;
    } else if (language === 'en') {
        document.getElementById('about-text').innerText = 'I am a web developer passionate about creating innovative and efficient solutions. With years of experience in frontend and backend development, I have worked on a variety of projects ranging from corporate websites to complex web applications.';
        document.getElementById('skills-list').innerHTML = `
            <li>HTML, CSS, JavaScript</li>
            <li>React, Vue.js</li>
            <li>Node.js, Express</li>
            <li>MongoDB, MySQL</li>
            <li>Python (Scraping)</li>
        `;
        document.getElementById('projects').innerHTML = `
            <h2>Projects</h2>
            <div class="project">
                <h3>Project ### Estructura del `index.html` con Enlaces y Selección de Idioma:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio de Jesús Carrilero</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
        <div class="language-switcher">
            <a href="#" id="espanol" onclick="switchLanguage('es')"><img src="espanol.png" alt="Español"></a>
            <a href="#" id="ingles" onclick="switchLanguage('en')"><img src="ingles.png" alt="English"></a>
        </div>
    </header>
    <main>
        <section id="hero">
            <img src="profile.jpeg" alt="Jesús Carrilero">
            <h1>Jesús Carrilero</h1>
            <p>Desarrollador Web | Freelancer</p>
        </section>
        <section id="about">
            <h2>Sobre mí</h2>
            <p id="about-text">Soy un desarrollador web apasionado por crear soluciones innovadoras y eficientes. Con años de experiencia en el desarrollo frontend y backend, he trabajado en una variedad de proyectos que abarcan desde sitios web corporativos hasta aplicaciones web complejas.</p>
        </section>
        <section id="skills">
            <h2>Habilidades</h2>
            <ul id="skills-list">
                <li>HTML, CSS, JavaScript</li>
                <li>React, Vue.js</li>
                <li>Node.js, Express</li>
                <li>MongoDB, MySQL</li>
                <li>Python (Scraping)</li>
            </ul>
        </section>
        <section id="projects">
            <h2>Proyectos</h2>
            <div class="project">
                <h3>Proyecto 1: Aplicación de E-commerce</h3>
                <p>Descripción: Desarrollo de una plataforma de comercio electrónico completa con integración de pasarela de pagos.</p>
                <a href="https://github.com/example/ecommerce" target="_blank">Ver proyecto</a>
            </div>
            <div class="project">
                <h3>Proyecto 2: Sistema de Gestión de Inventarios</h3>
                <p>Descripción: Creación de un sistema para la gestión eficiente de inventarios con funcionalidades de seguimiento en tiempo real.</p>
                <a href="https://github.com/example/inventarios" target="_blank">Ver proyecto</a>
            </div>
            <div class="project">
                <h3>Proyecto 3: Red Social para Viajeros</h3>
                <p>Descripción: Diseño y desarrollo de una red social donde los viajeros pueden compartir experiencias y consejos.</p>
                <a href="https://github.com/example/redsocial" target="_blank">Ver proyecto</a>
            </div>
        </section>
        <section id="contact">
            <h2>Contacto</h2>
            <p>Email: jesuscarrilero@example.com</p>
            <p>Teléfono: +34 616 460 352</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Jesús Carrilero. Todos los derechos reservados.</p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
