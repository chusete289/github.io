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
        document.querySelector("#about-text").innerText = "I am a passionate web developer with extensive experience in creating, maintaining, and designing dynamic and responsive websites. I have worked with various technologies and frameworks to deliver customized, high-quality solutions for my clients. My goal is to use my skills to help companies achieve their goals through innovative technological solutions.";
        document.querySelector("#skills h2").innerText = "Skills";
        document.querySelector("#projects h2").innerText = "Projects";
        document.querySelector("#projects .project:nth-child(1) h3").innerText = "E-commerce Platform Development";
        document.querySelector("#projects .project:nth-child(1) p").innerText = "Developed an e-commerce platform using React and Node.js, providing an optimized user experience and advanced product management features.";
        document.querySelector("#projects .project:nth-child(1) a").innerText = "View Project";
        document.querySelector("#projects .project:nth-child(2) h3").innerText = "Project Management Application";
        document.querySelector("#projects .project:nth-child(2) p").innerText = "Created a project management application with Angular and Firebase, enabling real-time collaboration and efficient task and resource management.";
        document.querySelector("#projects .project:nth-child(2) a").innerText = "View Project";
        document.querySelector("#projects .project:nth-child(3) h3").innerText = "Data Analysis Tool";
        document.querySelector("#projects .project:nth-child(3) p").innerText = "Developed a data analysis tool using Python and Django, facilitating the visualization and analysis of large data sets for strategic decision-making.";
        document.querySelector("#projects .project:nth-child(3) a").innerText = "View Project";
        document.querySelector("#contact h2").innerText = "Contact";
        document.querySelector("#contact p:nth-child(2)").innerText = "Email: jesuscarrilero@example.com";
        document.querySelector("#contact p:nth-child(3)").innerText = "Phone: +34 616 460 352";
    }
}
