function switchLanguage(lang) {
    if (lang === 'es') {
        document.documentElement.lang = "es";
        document.querySelector("#hero-description").innerText = "Desarrollador Web | Freelancer";
        document.querySelector("#about h2").innerText = "Sobre mí";
        document.querySelector("#about-text").innerText = "Soy un apasionado programador informatico con altas capacidades como desarrollador web y una amplia experiencia en la creación, mantenimiento y diseño de sitios webs dinámicos y responsivos. He trabajado con diversas tecnologías y frameworks para ofrecer soluciones personalizadas y de alta calidad para mis clientes. Mi objetivo es utilizar mis habilidades para ayudar a las empresas a alcanzar principalmente sus metas a través de las mejores soluciones tecnológicas más innovadoras actualmente y que sigan creciendo y cumpliendo sus objetivos sin apenas darse cuenta.";
        document.querySelector("#skills h2").innerText = "Habilidades";
        document.querySelector("#skills ul").innerHTML = `
            <li>Desarrollo Frontend: HTML, CSS, JavaScript, React</li>
            <li>Desarrollo Backend: Node.js, Express, Python, Django</li>
            <li>Base de Datos: MongoDB, MySQL</li>
            <li>Control de Versiones: Git, GitHub</li>`;
        document.querySelector("#projects h2").innerText = "Proyectos";
        document.querySelector("#projects .project:nth-child(1) h3").innerText = "E-commerce Platform: Culinary King";
        document.querySelector("#projects .project:nth-child(1) p").innerText = "Desarrollé una plataforma de comercio electrónico con una colección de productos alimenticios, presentada con características de diseño modernas y CSS avanzado.";
        document.querySelector("#projects .project:nth-child(1) a").innerText = "Ver proyecto";
        document.querySelector("#projects .project:nth-child(2) h3").innerText = "Project Management Application: TravelLite";
        document.querySelector("#projects .project:nth-child(2) p").innerText = "Creé una aplicación web para una agencia de viajes, utilizando Django y MySQL, con un diseño de Materialize CSS.";
        document.querySelector("#projects .project:nth-child(2) a").innerText = "Ver proyecto";
        document.querySelector("#projects .project:nth-child(3) h3").innerText = "Data Analysis Tool: Adventour";
        document.querySelector("#projects .project:nth-child(3) p").innerText = "Desarrollé una herramienta de análisis de datos utilizando HTML, CSS y JavaScript, facilitando la visualización y el análisis de datos para la toma de decisiones estratégicas.";
        document.querySelector("#projects .project:nth-child(3) a").innerText = "Ver proyecto";
        document.querySelector("#contact h2").innerText = "Contacto";
        document.querySelector("#contact p:nth-child(2)").innerText = "Email: jesuscarrilero3@gmail.com";
        document.querySelector("#contact p:nth-child(3)").innerText = "Teléfono: +34 616 460 352";
    } else if (lang === 'en') {
        document.documentElement.lang = "en";
        document.querySelector("#hero-description").innerText = "Web Developer | Freelancer";
        document.querySelector("#about h2").innerText = "About Me";
        document.querySelector("#about-text").innerText = "I am a passionate web developer with extensive experience in creating, maintaining, and designing dynamic and responsive websites. I have worked with various technologies and frameworks to deliver customized, high-quality solutions for my clients. My goal is to use my skills to help companies achieve their goals through innovative technological solutions.";
        document.querySelector("#skills h2").innerText = "Skills";
        document.querySelector("#skills ul").innerHTML = `
            <li>Frontend Development: HTML, CSS, JavaScript, React</li>
            <li>Backend Development: Node.js, Express, Python, Django</li>
            <li>Database: MongoDB, MySQL</li>
            <li>Version Control: Git, GitHub</li>`;
        document.querySelector("#projects h2").innerText = "Projects";
        document.querySelector("#projects .project:nth-child(1) h3").innerText = "E-commerce Platform: Culinary King";
        document.querySelector("#projects .project:nth-child(1) p").innerText = "Developed an e-commerce platform with a collection of food products, presented with modern design features and advancedContinuación del código actualizado para `scripts.js`:

```javascript
            design features and advanced CSS.";
        document.querySelector("#projects .project:nth-child(1) a").innerText = "View Project";
        document.querySelector("#projects .project:nth-child(2) h3").innerText = "Project Management Application: TravelLite";
        document.querySelector("#projects .project:nth-child(2) p").innerText = "Created a web application for a travel agency using Django and MySQL, with a Materialize CSS design.";
        document.querySelector("#projects .project:nth-child(2) a").innerText = "View Project";
        document.querySelector("#projects .project:nth-child(3) h3").innerText = "Data Analysis Tool: Adventour";
        document.querySelector("#projects .project:nth-child(3) p").innerText = "Developed a data analysis tool using HTML, CSS, and JavaScript, facilitating the visualization and analysis of data for strategic decision-making.";
        document.querySelector("#projects .project:nth-child(3) a").innerText = "View Project";
        document.querySelector("#contact h2").innerText = "Contact";
        document.querySelector("#contact p:nth-child(2)").innerText = "Email: jesuscarrilero3@gmail.com";
        document.querySelector("#contact p:nth-child(3)").innerText = "Phone: +34 616 460 352";
    }
}
