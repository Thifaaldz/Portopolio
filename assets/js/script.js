document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Effect
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});

// Hover Animation for Section Transitions
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transition = 'transform 0.3s';
        section.style.transform = 'scale(1.05)';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transition = 'transform 0.3s';
        section.style.transform = 'scale(1)';
    });
});
