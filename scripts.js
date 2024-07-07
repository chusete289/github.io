function setLanguage(language) {
  document.querySelectorAll('[data-es]').forEach((element) => {
    element.innerText = element.getAttribute(`data-${language}`);
  });
}

// Set default language to Spanish
setLanguage('es');

// Add event listeners to language switcher links
document.getElementById('es').addEventListener('click', () => setLanguage('es'));
document.getElementById('en').addEventListener('click', () => setLanguage('en'));
