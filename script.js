// Project Data
const projects = {
    'fees-app': {
        title: 'Students & Fees Management Application',
        img: 'assets/project1.png',
        desc: 'A robust mobile application built with Flutter and Firebase designed to streamline administrative tasks for educational institutions. It features real-time database updates, secure authentication, and an intuitive dashboard for tracking fee payments and student records.',
        tech: ['Flutter', 'Firebase', 'Dart', 'State Management']
    },
    'career-app': {
        title: 'Career Guidance Application',
        img: 'assets/project2.png',
        desc: 'A comprehensive full-stack web solution that helps students make informed career decisions. Built using ASP.NET Core for a powerful backend API and MySQL for reliable data storage, this application analyzes user interests and provides data-driven career path recommendations.',
        tech: ['ASP.NET Core', 'MySQL', 'Flutter Web', 'REST API']
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        navContainer.classList.toggle('nav-active');

        // Hamburger Animation
        const spans = mobileBtn.querySelectorAll('span');
        if (navContainer.classList.contains('nav-active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            document.body.style.overflow = 'hidden';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        }
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('nav-active');
            document.body.style.overflow = '';
            // Reset hamburger logic repeated for safety
            const spans = mobileBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Modal Logic
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTech = document.getElementById('modal-tech');

    document.querySelectorAll('.project-card').forEach(card => {
        const btn = card.querySelector('.btn-link');
        // Make whole card clickable or just button? Let's make the button trigger it, or the card image
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-id');
            const project = projects[projectId];

            if (project) {
                modalImg.src = project.img;
                modalTitle.textContent = project.title;
                modalDesc.textContent = project.desc;

                // Clear and populate tech
                modalTech.innerHTML = '';
                project.tech.forEach(t => {
                    const span = document.createElement('span');
                    span.textContent = t;
                    modalTech.appendChild(span);
                });

                modal.style.display = 'flex';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
