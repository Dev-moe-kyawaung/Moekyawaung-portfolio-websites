// Projects Data - Your 15 amazing projects
const projects = [
    {
        name: "Portfolio Bootstrap Pro",
        description: "Professional portfolio built with Bootstrap 5",
        image: "images/portfolio-bootstrap-pro.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-bootstrap-pro",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-bootstrap-pro"
    },
    {
        name: "Portfolio React Modern",
        description: "Modern portfolio website using React & Tailwind",
        image: "images/portfolio-react-modern.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-react-modern",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-react-modern"
    },
    {
        name: "Portfolio HTML Minimal",
        description: "Clean and minimal HTML/CSS portfolio design",
        image: "images/portfolio-html-minimal.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-html-minimal",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-html-minimal"
    },
    {
        name: "Portfolio Flutter Web",
        description: "Cross-platform portfolio built with Flutter Web",
        image: "images/portfolio-flutter-web.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-flutter-web",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-flutter-web"
    },
    {
        name: "Portfolio Gatsby Blog",
        description: "Gatsby portfolio with integrated blog functionality",
        image: "images/portfolio-gatsby-blog.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-gatsby-blog",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-gatsby-blog"
    },
    {
        name: "Portfolio Kotlin Ktor",
        description: "Modern portfolio backend with Kotlin & Ktor",
        image: "images/portfolio-kotlin-ktor.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-kotlin-ktor",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-kotlin-ktor"
    },
    {
        name: "Portfolio Next.js Premium",
        description: "Premium developer portfolio using Next.js 14",
        image: "images/portfolio-nextjs-premium.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-nextjs-premium",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-nextjs-premium"
    },
    {
        name: "Portfolio Angular Enterprise",
        description: "Enterprise-style portfolio with Angular 17",
        image: "images/portfolio-angular-enterprise.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-angular-enterprise",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-angular-enterprise"
    },
    {
        name: "Portfolio Tailwind Glass",
        description: "Glassmorphism portfolio using Tailwind CSS",
        image: "images/portfolio-tailwind-glass.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-tailwind-glass",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-tailwind-glass"
    },
    {
        name: "Portfolio Ruby Sinatra",
        description: "Portfolio app built with Ruby Sinatra framework",
        image: "images/portfolio-ruby-sinatra.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-ruby-sinatra",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-ruby-sinatra"
    },
    {
        name: "Portfolio Three.js 3D",
        description: "Interactive 3D portfolio with Three.js & WebGL",
        image: "images/portfolio-threejs-3d.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-threejs-3d",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-threejs-3d"
    },
    {
        name: "Portfolio Neumorphism UI",
        description: "Neumorphism-inspired portfolio interface design",
        image: "images/portfolio-neumorphism-ui.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-neumorphism-ui",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-neumorphism-ui"
    },
    {
        name: "Portfolio Terminal Style",
        description: "Terminal-style developer portfolio experience",
        image: "images/portfolio-terminal-style.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-terminal-style",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-terminal-style"
    },
    {
        name: "Portfolio Mobile Showcase",
        description: "Mobile app and product showcase portfolio",
        image: "images/portfolio-mobile-showcase.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-mobile-showcase",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-mobile-showcase"
    },
    {
        name: "Portfolio AI Futuristic",
        description: "Futuristic AI-themed portfolio design",
        image: "images/portfolio-ai-futuristic.jpg",
        github: "https://github.com/Dev-moe-kyawaung/portfolio-ai-futuristic",
        demo: "https://dev-moe-kyawaung.github.io/portfolio-ai-futuristic"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1500);

    // Initialize projects
    initProjects();
    
    // Navigation
    initNavigation();
    
    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form
    initContactForm();
    
    // Scroll animations
    initScrollAnimations();
});

// Initialize Projects
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.name}" loading="lazy">
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                <a href="${project.github}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i> Code
                </a>
                <a href="${project.demo}" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Demo
                </a>
            </div>
        </div>
    `;
    return card;
}

// Navigation Mobile
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        const button = form.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = 'Sending...';
        button.disabled = true;
        
        setTimeout(() => {
            alert('Thank you! Your message has been sent. 🚀');
            form.reset();
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all project cards and sections
    document.querySelectorAll('.project-card, .about, .skills, .contact').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(12, 12, 12, 0.95)';
        navbar.style.backdropFilter = 'blur(30px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});
