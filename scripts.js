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
        document.getElementById('contact').innerHTML = `
            <h2>Contacto</h2>
            <p>Email: jesuscarrilero@example.com</p>
            <p>Teléfono: +34 616 460 352</p>
        `;
        // Translate other sections as needed...
    } else if (language === 'en') {
        document.getElementById('about-text').innerText = 'I am a web developer passionate about creating innovative and efficient solutions. With years of experience in frontend and backend development, I have worked on a variety of projects ranging from corporate websites to complex web applications.';
        document.getElementById('skills-list').innerHTML = `
            <li>HTML, CSS, JavaScript</li>
            <li>React, Vue.js</li>
            <li>Node.js, Express</li>
            <li>MongoDB, MySQL</li>
            <li>Python (Scraping)</li>
        `;
        document.getElementById('contact').innerHTML = `
            <h2>Contact</h2>
            <p>Email: jesuscarrilero@example.com</p>
            <p>Phone: +34 616 460 352</p>
        `;
        // Translate other sections as needed...
    }
}
