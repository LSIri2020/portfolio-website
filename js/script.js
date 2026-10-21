// 1. Menu hamburger
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBtn.textContent = nav.classList.contains('open') ? '×' : '☰';
});

// 2. Validation du formulaire
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valide = true;

    const champs = [
      { id: 'nom', message: 'Veuillez entrer votre nom.' },
      { id: 'email', message: 'Veuillez entrer un email valide.' },
      { id: 'message', message: 'Veuillez écrire un message.' }
    ];

    champs.forEach(({ id, message }) => {
      const champ = document.getElementById(id);
      const erreur = champ.nextElementSibling;
      const valeur = champ.value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valeur);

      if (!valeur || (id === 'email' && !emailOk)) {
        erreur.textContent = message;
        valide = false;
      } else {
        erreur.textContent = '';
      }
    });

    if (valide) {
      document.getElementById('formSuccess').textContent = 'Merci ! Votre message a été envoyé.';
      form.reset();
    }
  });
}