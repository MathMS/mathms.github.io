document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#BDC3C7';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
