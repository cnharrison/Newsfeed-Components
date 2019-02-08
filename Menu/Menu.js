
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  console.log("toggleMenu firing");
}

menuButton.addEventListener('click', toggleMenu);

// Start Here: Create a reference to the ".menu" class
// create a reference to the ".menu-button" class
// Using your menuButton reference, add a click handler that calls toggleMenu