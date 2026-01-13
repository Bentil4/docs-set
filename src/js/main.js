import { resourceList } from './resourcesList';
// import '../../css/main.css';

export let allResources = {};
fetch('./data/data.json')
  .then((response) => response.json())
  .then((data) => {
    allResources = data;
    console.log(data);

    resourceList();
    initHamburgerMenu();
  })
  .catch((error) => {
    (console.error('No data found'), error);
  });

// Hamburger menu functionality
function initHamburgerMenu() {
  const hamburger = document.querySelector('.dashboard__humburg');
  const sidebar = document.querySelector('.dashboard__sidebar');

  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar--open');
      hamburger.classList.toggle('hamburger--open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !sidebar.contains(e.target) && sidebar.classList.contains('sidebar--open')) {
        sidebar.classList.remove('sidebar--open');
        hamburger.classList.remove('hamburger--open');
      }
    });
  }
}
