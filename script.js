// === Portfolio Data ===

const jokes = [
    "I told my password it had to be eight characters long. It said, “No problem — I’ll be SnowWhite&7Dwarfs.”",
    "Why did the hacker break up with their partner? Too many trust issues and no secure connection.",
    "Cybersecurity is like parenting: You spend all day yelling, “Don’t click that!”",
    "I asked IT if my password was strong enough. They said, “No, but your emotional attachment to it is.”",
    "Why don’t hackers like nature? Too many firewalls in the forest.",
    "A cybersecurity expert’s favorite pickup line: Are you a phishing email? Because I’m strangely drawn to suspicious links.",
    "I renamed my Wi-Fi to “FBI Surveillance Van.” Now nobody in the neighborhood connects to it.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "I'd tell you a UDP joke, but you might not get it.",
    "A SQL query goes into a bar, walks up to two tables and asks... 'Can I join you?'",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why did the functional programmer get thrown out of school? Because he refused to take classes.",
    "Debugging: Being the detective in a crime movie where you are also the murderer.",
    "An IPv6 packet walks into a bar. Nobody talks to him.",
    "My boss said we needed better endpoint protection. So I put little helmets on all the laptops.",
    "Two-factor authentication is great. Now I can forget two things instead of one.",
    "I got locked out after too many password attempts. Apparently “password123” was also everyone else’s strategy."
];

const experienceData = [
    {
        date: "April 2025 - April 2026",
        role: "Security Research Intern",
        company: "COE CNDS Labs, VJTI",
        desc: "Conducted VAPT on IoT devices, physical hardware, routers, firewalls, and enterprise network environments. Worked on firmware extraction, service enumeration, and OT security assessments."
    },
    {
        date: "March - June, 2024",
        role: "Internship - VAPT",
        company: "Cyber Secured India",
        desc: "Performed Vulnerability Assessment & Penetration Testing for web applications, including reconnaissance, vulnerability analysis, and attack-surface assessments. Contributed to OSINT research."
    }
];

const skillsData = [
    {
        category: "Offensive Security & VAPT",
        icon: "fa-shield-halved",
        skills: [
            { name: "Penetration Testing", level: 95 },
            { name: "Active Directory Exploitation", level: 80 },
            { name: "IoT & Hardware Hacking", level: 75 },
            { name: "Red Team Operations", level: 80 }
        ]
    },
    {
        category: "Systems & Networks",
        icon: "fa-network-wired",
        skills: [
            { name: "Linux Administration", level: 90 },
            { name: "Network Security & Firewalls", level: 80 },
            { name: "OT/ICS Security", level: 70 },
            { name: "System Configuration", level: 85 }
        ]
    },
    {
        category: "Development & Tools",
        icon: "fa-code",
        skills: [
            { name: "Web Application Programming", level: 85 },
            { name: "Python / Bash Scripting", level: 80 },
            { name: "Burp Suite, Metasploit, Nmap", level: 95 },
            { name: "Threat Intelligence", level: 85 }
        ]
    }
];

const projectsData = [
    {
        title: "FortiChain: Physical EDR",
        desc: "AI-assisted physical security incident response framework inspired by Endpoint Detection & Response (EDR) systems adhering to zero-trust architecture.",
        image: "images/project-fortichain.png",
        fallbackImg: "images/fortichain.jpg",
        tech: ["Python", "AI Agents", "Zero-Trust", "EDR"],
        link: "#"
    },
    {
        title: "Red Team Home Lab",
        desc: "Self-hosted Active Directory and virtualized cybersecurity home lab for practicing Red Team operations, privilege escalation, and lateral movement.",
        image: "images/project-homelab.png",
        fallbackImg: "images/project-homelab.png",
        tech: ["Active Directory", "Windows/Linux", "Firewalls", "Virtualization"],
        link: "#"
    },
    {
        title: "HackerZone CTF",
        desc: "Beginner-focused CTF platform featuring practical challenges covering web exploitation, recon, cryptography, and penetration testing concepts.",
        image: "images/project-ctf.png",
        fallbackImg: "images/ctf-playground.jpg",
        tech: ["Web Development", "Cryptography", "Reverse Engineering", "Linux"],
        link: "https://hackerzone-ctfplatform.onrender.com/"
    }
];

const blogsData = [
    {
        date: "Oct 15, 2025",
        title: "Bypassing Modern EDR Systems",
        preview: "An in-depth look at how memory injection and syscall unhooking can be used to silently bypass modern enterprise EDR solutions...",
        link: "#"
    },
    {
        date: "Aug 22, 2025",
        title: "IoT Firmware Extraction Techniques",
        preview: "Exploring hardware hacking methodologies to dump and analyze firmware from embedded devices using UART and SPI interfaces...",
        link: "#"
    },
    {
        date: "Jun 10, 2025",
        title: "Active Directory: Kerberoasting 101",
        preview: "A practical guide to understanding and executing Kerberoasting attacks within a misconfigured Active Directory environment...",
        link: "#"
    }
];

// === DOM Manipulation & Logic ===

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector('i');

    themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-theme') === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });

    // 3. Dynamic Joke Rotator
    const jokeText = document.getElementById('joke-text');
    let jokeIndex = 0;

    function changeJoke() {
        jokeText.style.opacity = 0;
        setTimeout(() => {
            jokeText.textContent = jokes[jokeIndex];
            jokeText.style.opacity = 1;
            jokeIndex = (jokeIndex + 1) % jokes.length;
        }, 500); // Wait for fade out
    }
    
    jokeText.style.transition = "opacity 0.5s ease";
    changeJoke(); // Initial call
    setInterval(changeJoke, 10000); // Every 10 seconds

    // 4. Typewriter Effect
    const roles = ["Cybersecurity Engineer.", "Red Team Analyst.", "VAPT Specialist.", "Threat Hunter."];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typeWriterElement = document.getElementById('typewriter');

    function typeEffect() {
        const currentRole = roles[roleIdx];
        
        if (isDeleting) {
            typeWriterElement.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typeWriterElement.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIdx === currentRole.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            typeSpeed = 500; // Pause before typing next
        }

        setTimeout(typeEffect, typeSpeed);
    }
    
    setTimeout(typeEffect, 1000); // Start after 1s

    // 5. Populate Data dynamically
    
    // Experience
    const expContainer = document.getElementById('experience-container');
    experienceData.forEach(exp => {
        expContainer.innerHTML += `
            <div class="experience-item slide-up">
                <span class="exp-date">${exp.date}</span>
                <h4 class="exp-role">${exp.role}</h4>
                <div class="exp-company">${exp.company}</div>
                <p class="exp-desc">${exp.desc}</p>
            </div>
        `;
    });

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    skillsData.forEach(cat => {
        let skillsHTML = '';
        cat.skills.forEach(skill => {
            skillsHTML += `
                <div class="skill-item">
                    <div class="skill-info">
                        <span>${skill.name}</span>
                        <span class="skill-percent" data-val="${skill.level}">0%</span>
                    </div>
                    <div class="skill-bar-bg">
                        <div class="skill-bar-fill" data-width="${skill.level}%" style="width: 0;"></div>
                    </div>
                </div>
            `;
        });

        skillsContainer.innerHTML += `
            <div class="skill-category glass slide-up">
                <h3 class="skill-cat-title"><i class="fas ${cat.icon}"></i> ${cat.category}</h3>
                <div class="skill-list">
                    ${skillsHTML}
                </div>
            </div>
        `;
    });

    // Projects
    const projectsContainer = document.getElementById('projects-container');
    projectsData.forEach(proj => {
        let techHTML = proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
        
        projectsContainer.innerHTML += `
            <div class="project-card glass slide-up">
                <div class="project-img-container">
                    <img src="${proj.image}" onerror="this.src='${proj.fallbackImg}'" alt="${proj.title}" class="project-img">
                    <div class="project-overlay">
                        <a href="${proj.link}" class="icon-btn" aria-label="View Code"><i class="fab fa-github"></i></a>
                        <a href="${proj.link}" class="icon-btn" aria-label="Live Demo"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-desc">${proj.desc}</p>
                    <div class="project-tech">
                        ${techHTML}
                    </div>
                </div>
            </div>
        `;
    });

    // Blogs
    const blogsContainer = document.getElementById('blogs-container');
    blogsData.forEach(blog => {
        blogsContainer.innerHTML += `
            <div class="blog-card glass slide-up">
                <span class="blog-date"><i class="far fa-calendar-alt"></i> ${blog.date}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-preview">${blog.preview}</p>
                <a href="${blog.link}" class="read-more">Read Log <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
    });

    // 6. Scroll Animations & Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If it's a skill bar, animate the width
                if (entry.target.classList.contains('skill-category')) {
                    const fills = entry.target.querySelectorAll('.skill-bar-fill');
                    fills.forEach(fill => {
                        fill.style.width = fill.getAttribute('data-width');
                    });
                    
                    // Animate percentage numbers
                    const percents = entry.target.querySelectorAll('.skill-percent');
                    percents.forEach(percent => {
                        const target = parseInt(percent.getAttribute('data-val'));
                        animateValue(percent, 0, target, 1500);
                    });
                }

                // If it's stats section, animate numbers
                if (entry.target.classList.contains('about-stats')) {
                    const stats = entry.target.querySelectorAll('.stat-num');
                    stats.forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-val'));
                        animateValue(stat, 0, target, 2000);
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide-up, .slide-in-right, .about-stats').forEach(el => {
        observer.observe(el);
    });

    // Helper for number animation
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + (obj.classList.contains('skill-percent') ? '%' : (end > 50 ? '+' : ''));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // 7. Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // 8. Form Submission (Prevent default for UI purposes)
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Executing...';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Payload Delivered';
                btn.classList.replace('btn-primary', 'btn-outline');
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('btn-outline', 'btn-primary');
                }, 3000);
            }, 1500);
        });
    }
});
