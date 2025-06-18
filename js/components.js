// Function to load HTML components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        
        // If this is the header, initialize the mobile menu
        if (elementId === 'header') {
            initializeMobileMenu();
        }
    } catch (error) {
        console.error(`Error loading ${componentPath}:`, error);
    }
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.navigation-bar');

    if (menuToggle && header && nav) {
        menuToggle.addEventListener('click', function() {
            header.classList.toggle('menu-open');
            document.body.classList.toggle('menu-is-open');
        });

        nav.addEventListener('click', function(e) {
            if (e.target.closest('.nav-option-link')) {
                header.classList.remove('menu-open');
                document.body.classList.remove('menu-is-open');
            }
        });
    }
}

// Load components when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header', '/components/header.html');
    loadComponent('footer', '/components/footer.html');
});
