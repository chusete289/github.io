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
        document.querySelector("#projects .project:nth-child(2) h3").innerText = "Aplicación de gestión de proyectos";
        document.querySelector("#projects .project:nth-child(2) p").innerText = "Creé una aplicación de gestión de proyectos con Angular y Firebase, permitiendo la colaboración en tiempo real y la administración eficiente de tareas y recursos.";
        document.querySelector("#projects .project:nth-child(3) h3").innerText = "Herramienta de análisis de datos";
        document.querySelector("#projects .project:nth-child(3) p").innerText = "Desarrollé una herramienta de análisis de datos utilizando Python y Django, facilitando la visualización y el análisis de grandes volúmenes de datos para la toma de decisiones estratégicas.";
        document.querySelector("#contact h2").innerText = "Contacto";
        document.querySelector("#contact p:nth-child(2)").innerText = "Email: jesuscarrilero@example.com";
        document.querySelector("#contact p:nth-child(3)").innerText = "Teléfono: +34 616 460 352";
    } else if (lang === 'en') {
        document.documentElement.lang = "en";
        document.querySelector("#hero-description").innerText = "Web Developer | Freelancer";
        document.querySelector("#about h2").innerText = "About Me";
        document.querySelector("#about-text").innerText = "I am a passionate computer programmer with high capabilities as a web developer and extensive experience in creating, maintaining, and designing dynamic and responsive websites. I have worked with various technologies and frameworks to provide customized, high-quality solutions for my clients. My goal is to use my skills to help businesses achieve their goals through the most innovative technological solutions available and to continue growing and meeting their objectives seamlessly.";
        document.querySelector("#skills h2").innerText = "Skills";
       Para resolver los problemas y mejorar el sitio, sigue estos pasos:

### 1. Modificación del HTML

#### `index.html`
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
            <div class="language-switch">
                <img src="espanol.png" alt="Español" id="espanol" class="flag" onclick="switchLanguage('es')">
                <img src="ingles.png" alt="English" id="ingles" class="flag" onclick="switchLanguage('en')">
            </div>
        </nav>
    </header>
    <main>
        <section id="hero">
            <img src="profile.jpeg" alt="Jesús Carrilero">
            <h1>Jesús Carrilero</h1>
            <p id="hero-description">Desarrollador Web | Freelancer</p>
        </section>
        <section id="about">
            <h2>Sobre mí</h2>
            <p id="about-text">
                Soy un apasionado programador informatico con altas capacidades como desarrollador web y una amplia experiencia en la creación, mantenimiento y diseño de sitios webs dinámicos y responsivos. He trabajado con diversas tecnologías y frameworks para ofrecer soluciones personalizadas y de alta calidad para mis clientes. Mi objetivo es utilizar mis habilidades para ayudar a las empresas a alcanzar principalmente sus metas a través de las mejores soluciones tecnológicas más innovadoras actualmente y que sigan creciendo y cumpliendo sus objetivos sin apenas darse cuenta.
            </p>
        </section>
        <section id="skills">
            <h2>Habilidades</h2>
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React, Angular</li>
                <li>Node.js, Express</li>
                <li>MongoDB, SQL</li>
                <li>Python, Django</li>
            </ul>
        </section>
        <section id="projects">
            <h2>Proyectos</h2>
            <div class="project">
                <h3>Desarrollo de una plataforma de E-commerce</h3>
                <p>Desarrollé una plataforma de comercio electrónico utilizando React y Node.js, proporcionando una experiencia de usuario optimizada y funciones avanzadas de administración de productos.</p>
                <a href="https://github.com/chusete289/project-ecommerce" target="_blank">Ver proyecto</a>
            </div>
            <div class="project">
                <h3>Aplicación de gestión de proyectos</h3>
                <p>Creé una aplicación de gestión de proyectos con Angular y Firebase, permitiendo la colaboración en tiempo real y la administración eficiente de tareas y recursos.</p>
                <a href="https://github.com/chusete289/project-management-app" target="_blank">Ver proyecto</a>
            </div>
            <div class="project">
                <h3>Herramienta de análisis de datos</h3>
                <p>Desarrollé una herramienta de análisis de datos utilizando Python y Django, facilitando la visualización y el análisis de grandes volúmenes de datos para la toma de decisiones estratégicas.</p>
                <a href="https://github.com/chusete289/data-analysis-tool" target="_blank">Ver proyecto</a>
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
    <script src="script.js"></script>
</body>
</html>
