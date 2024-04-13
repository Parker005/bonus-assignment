document.addEventListener("DOMContentLoaded", function () {
    
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

    
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const url = this.dataset.url; 
            
            if (url) {
                window.open(url, '_blank'); 
            }
        });
    });
});
