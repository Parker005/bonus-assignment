document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const target = document.querySelector(this.getAttribute('href'));
    
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle project links
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const url = this.dataset.url; // Get URL from data-url attribute
            
            if (url) {
                window.open(url, '_blank'); // Open link in a new tab
            }
        });
    });
});
