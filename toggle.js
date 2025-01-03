// JavaScript to toggle the menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('open'); // Add or remove the "open" class
});

// Close the menu when any link is clicked
const menuLinks = document.querySelectorAll('#nav-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        const menu = document.getElementById('nav-menu');
        menu.classList.remove('open'); // Remove the "open" class to hide the menu
    });
});