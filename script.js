// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments du bouton hamburger et du menu
    const menuToggle = document.getElementById('menu-toggle'); // Le bouton hamburger
    const navMenu = document.getElementById('nav-menu'); // Le menu de navigation
  
    // Vérifier que les éléments existent avant d'ajouter l'événement
    if (menuToggle && navMenu) {
      // Ajouter un écouteur d'événements sur le bouton hamburger
      menuToggle.addEventListener('click', function() {
        // Ajouter ou supprimer la classe 'active' sur le menu
        navMenu.classList.toggle('active');
      });
    }
  });
  const container = document.querySelector('.container');

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    container.style.setProperty('--mouse-x', `${x}%`);
    container.style.setProperty('--mouse-y', `${y}%`);
  });
    