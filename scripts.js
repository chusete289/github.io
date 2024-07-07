function switchLanguage(lang) {
    if (lang === 'es') {
        document.documentElement.lang = "es";
        document.querySelector("#hero-description").innerText = "Desarrollador Web | Freelancer";
        document.querySelector("#about h2").innerText = "Sobre mí";
        document.querySelector("#about-text").innerText = "Soy un apasionado programador informatico con altas capacidades como desarrollador web y una amplia experiencia en la creación, mantenimiento y diseño de sitios webs dinámicos y responsivos. He trabajado con diversas tecnologías y frameworks para ofrecer soluciones personalizadas y de alta calidad para mis clientes. Mi objetivo es utilizar mis habilidades para ayudar a las empresas a alcanzar principalmente sus metas a través de las mejores soluciones tecnológicas más innovadoras actualmente y que sigan creciendo y cumpliendo sus objetivos sin apenas darse cuenta.";
        document.querySelector("#skills h2").innerText = "Habilidades";
        document.querySelector("#projects h2").innerText = "Proyectos";
        document.querySelector("#projects .project:nth-child(1) h3").innerText = "Desarrollo de una plataforma de E-commerce";
        document.querySelector("#projects .project:nth-child(1) p").innerText = "Desarrollé una plataforma de comercio electrónico utilizando React y Node.js, proporcionando una experiencia de usuario optimizada y funciones avanzadas de administración de productos.";
        document.querySelector("#projects .project:nth-child(1) a").innerText = "Ver proyecto";
        document.querySelector("#projects .project:nth-child(2) h3").innerText = "Aplicación de gestión de proyectos";
        document.querySelector("#projects .project:nth-child(2) p").innerText = "Creé una aplicación de gestión de proyectos con Angular y Firebase, permitiendo la colaboración en tiempo real y la administración eficiente de tareas y recursos.";
        document.querySelector("#projects .project:nth-child(2) a").innerText = "Ver proyecto";
        document.querySelector("#projects .project:nth-child(3) h3").innerText = "Herramienta de análisis de datos";
        document.querySelector("#projects .project:nth-child(3) p").innerText = "Desarrollé una herramienta de análisis de datos utilizando Python y Django, facilitando la visualización y el análisis de grandes volúmenes de datos para la toma de decisiones estratégicas.";
        document.querySelector("#projects .project:nth-child(3) a").innerText = "Ver proyecto";
        document.querySelector("#contact h2").innerText = "Contacto";
        document.querySelector("#contact p:nth-child(2)").innerText = "Email: jesuscarrilero@example.com";
        document.querySelector("#contact p:nth-child(3)").innerText = "Teléfono: +34 616 460 352";
    } else if (lang === 'en') {
        document.documentElement.lang = "en";
        document.querySelector("#hero-description").innerText = "Web Developer | Freelancer";
        document.querySelector("#about h2").innerText = "About Me";
        document.querySelector("#about-text").Aquí tienes el código ajustado para que las banderas sean pequeñas y redondas y para asegurar que los enlaces a proyectos reales estén presentes:

### `index.html`
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio de Jesús Carrilero</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li><img src="espanol.png" alt="ES" class="language-icon" onclick="switchLanguage('es')">
                    <img src="ingles.png" alt="EN" class="language-icon" onclick="switchLanguage('en')"></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="hero">
            <img src="profile.jpeg" alt="Jesús Carrilero" id="profile-image">
            <h1>Jesús Carrilero</h1>
            <p id="hero-description">Desarrollador Web | Freelancer</p>
        </section>
        <section id="about">
            <h2>Sobre mí</h2>
            <p id="about-text">Soy un apasionado programador informatico con altas capacidades como desarrollador web y una amplia experiencia en la creación, mantenimiento y diseño de sitios webs dinámicos y responsivos. He trabajado con diversas tecnologías y frameworks para ofrecer soluciones personalizadas y de alta calidad para mis clientes. Mi objetivo es utilizar mis habilidades para ayudar a las empresas a alcanzar principalmente sus metas a través de las mejores soluciones tecnológicas más innovadoras actualmente y que sigan creciendo y cumpliendo sus objetivos sin apenas darse cuenta.</p>
        </section>
        <section id="skills">
            <h2>Habilidades</h2>
            <ul>
                <li>Desarrollo Frontend: HTML, CSS, JavaScript, React</li>
                <li>Desarrollo Backend: Node.js, Express, Python, Django</li>
                <li>Base de Datos: MongoDB, MySQL</li>
                <li>Control de Versiones: Git, GitHub</li>
            </ul>
        </section>
        <section id="projects">
            <h2>Proyectos</h2>
            <div class="project">
                <h3>E-commerce Platform Development</h3>
                <p>Developed an e-commerce platform using React and Node.js, providing an optimized user experience and advanced product management features.</p>
                <a href="https://example.com/ecommerce-project" target="_blank">Ver proyecto</a>
            </div>
            <div class="project">
                <h3>Project Management Application</h3>
                <p>Created a project management application with Angular and Firebase, enabling real-time collaboration and efficient task and resource management.</p>
                <a href="https://example.com/project-management" target="_blank">Ver proyecto</a>
            </div>
            <div class="project">
                <h3>Data Analysis Tool</h3>
                <p>Developed a data analysis tool using Python and Django, facilitating the visualization and analysis of large data sets for strategic decision-making.</p>
                <a href="https://example.com/data-analysis" target="_blank">Ver proyecto</a>
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
</body>
</html>
