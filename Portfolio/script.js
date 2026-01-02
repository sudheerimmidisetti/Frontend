document.addEventListener('DOMContentLoaded', function() {

    const linesToType = [
        { element: document.getElementById('line1'), text: "Hi, I'm Sudheer Immidisetti" },
        { element: document.getElementById('line2'), text: "An Aspiring Frontend Developer" },
        { element: document.getElementById('line3'), text: "Crafting innovative solutions with code." }
    ];
    
    const typingSpeed = 75;
    const delayBetweenLines = 500;
    let lineIndex = 0;

    function typeLine() {
        if (lineIndex >= linesToType.length) {
            return;
        }

        const currentLine = linesToType[lineIndex];
        const el = currentLine.element;
        const text = currentLine.text;
        let charIndex = 0;
        
        el.classList.add('cursor');

        const typeChar = () => {
            if (charIndex < text.length) {
                el.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            } else {
                el.classList.remove('cursor');
                lineIndex++;
                setTimeout(typeLine, delayBetweenLines);
            }
        };

        typeChar();
    }
    
    if (document.getElementById('line1')) {
        typeLine();
    }

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }

    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.navbar-menu .nav-link');

    if (sections.length && navLinks.length) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= (sectionTop - 60)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }

    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarLinks = document.getElementById('navbar-links');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });
    }
});