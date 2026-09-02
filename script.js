/*/* =========================================================
   VISHAL SINGH - PREMIUM PORTFOLIO
   Complete JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. ELEMENT REFERENCES
       ===================================================== */

    const navbar = document.querySelector(".navbar");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-menu a");
    const sections = document.querySelectorAll("section[id]");


    /* =====================================================
       2. MOBILE NAVIGATION
       ===================================================== */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");

            if (navMenu.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }

        });


        // Close menu when clicking navigation link
        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.innerHTML = "☰";

            });

        });

    }


    /* =====================================================
       3. NAVBAR SCROLL EFFECT
       ===================================================== */

    function handleNavbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


    /* =====================================================
       4. SMOOTH SCROLLING
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement =
                document.querySelector(targetId);

            if (!targetElement) {
                return;
            }

            event.preventDefault();

            const navbarHeight =
                navbar ? navbar.offsetHeight : 0;

            const targetPosition =
                targetElement.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });


    /* =====================================================
       5. ACTIVE NAVIGATION LINK
       ===================================================== */

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =====================================================
       6. SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".reveal, " +
        ".section-header, " +
        ".about-content, " +
        ".skill-card, " +
        ".project-card, " +
        ".building-card, " +
        ".philosophy-card, " +
        ".contact-card"
    );


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       7. TYPING ANIMATION
       ===================================================== */

    const typingElement =
        document.querySelector(".typing-text");


    if (typingElement) {

        const roles = [

            "Full Stack Developer",

            "AI/ML Enthusiast",

            "Software Developer",

            "DevOps Learner",

            "Problem Solver"

        ];


        let roleIndex = 0;

        let characterIndex = 0;

        let deleting = false;


        function typeEffect() {

            const currentRole =
                roles[roleIndex];


            if (!deleting) {

                typingElement.textContent =
                    currentRole.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;


                if (
                    characterIndex ===
                    currentRole.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1800
                    );

                    return;

                }

            } else {

                typingElement.textContent =
                    currentRole.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;


                if (characterIndex === 0) {

                    deleting = false;

                    roleIndex =
                        (roleIndex + 1) %
                        roles.length;

                }

            }


            const speed =
                deleting ? 45 : 85;

            setTimeout(
                typeEffect,
                speed
            );

        }


        typeEffect();

    }


    /* =====================================================
       8. ANIMATED COUNTERS
       ===================================================== */

    const counters =
        document.querySelectorAll(
            "[data-target]"
        );


    if ("IntersectionObserver" in window) {

        const counterObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            const counter =
                                entry.target;

                            const target =
                                Number(
                                    counter.dataset.target
                                );

                            let current = 0;

                            const increment =
                                Math.max(
                                    1,
                                    Math.ceil(
                                        target / 80
                                    )
                                );


                            function updateCounter() {

                                current += increment;


                                if (
                                    current >= target
                                ) {

                                    counter.textContent =
                                        target;

                                    return;

                                }


                                counter.textContent =
                                    current;


                                requestAnimationFrame(
                                    updateCounter
                                );

                            }


                            updateCounter();

                            observer.unobserve(
                                counter
                            );

                        }

                    });

                },
                {
                    threshold: 0.7
                }
            );


        counters.forEach(counter => {

            counterObserver.observe(counter);

        });

    }


    /* =====================================================
       9. SKILL CARD INTERACTION
       ===================================================== */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    skillCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "skill-hover"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "skill-hover"
                );

            }
        );

    });


    /* =====================================================
       10. PROJECT CARD INTERACTION
       ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "project-hover"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "project-hover"
                );

            }
        );

    });


    /* =====================================================
       11. 3D CARD EFFECT
       ===================================================== */

    const interactiveCards =
        document.querySelectorAll(
            ".project-card, " +
            ".building-card, " +
            ".philosophy-card"
        );


    interactiveCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                    centerY) * -3;


                const rotateY =
                    ((x - centerX) /
                    centerX) * 3;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       12. CONTACT FORM
       ===================================================== */

    const contactForm =
        document.querySelector(
            ".contact-form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const nameInput =
                    contactForm.querySelector(
                        '[name="name"]'
                    );


                const emailInput =
                    contactForm.querySelector(
                        '[name="email"]'
                    );


                const messageInput =
                    contactForm.querySelector(
                        '[name="message"]'
                    );


                if (
                    !nameInput ||
                    !emailInput ||
                    !messageInput
                ) {

                    showNotification(
                        "Please check the contact form.",
                        "error"
                    );

                    return;

                }


                const name =
                    nameInput.value.trim();


                const email =
                    emailInput.value.trim();


                const message =
                    messageInput.value.trim();


                if (
                    name === "" ||
                    email === "" ||
                    message === ""
                ) {

                    showNotification(
                        "Please fill in all fields.",
                        "error"
                    );

                    return;

                }


                if (!isValidEmail(email)) {

                    showNotification(
                        "Please enter a valid email address.",
                        "error"
                    );

                    return;

                }


                /*
                 * Frontend-only portfolio form.
                 * Later you can connect this to:
                 * Formspree, EmailJS, Firebase,
                 * Node.js backend, etc.
                 */

                showNotification(
                    "Message submitted successfully!",
                    "success"
                );


                contactForm.reset();

            }
        );

    }


    /* =====================================================
       13. EMAIL VALIDATION
       ===================================================== */

    function isValidEmail(email) {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);

    }


    /* =====================================================
       14. NOTIFICATION SYSTEM
       ===================================================== */

    function showNotification(
        message,
        type = "success"
    ) {

        const existingNotification =
            document.querySelector(
                ".portfolio-notification"
            );


        if (existingNotification) {

            existingNotification.remove();

        }


        const notification =
            document.createElement(
                "div"
            );


        notification.className =
            `portfolio-notification ${type}`;


        notification.innerHTML = `

            <span class="notification-icon">
                ${type === "success" ? "✓" : "!"}
            </span>

            <span class="notification-message">
                ${message}
            </span>

            <button
                class="notification-close"
                aria-label="Close notification">
                ×
            </button>

        `;


        document.body.appendChild(
            notification
        );


        requestAnimationFrame(() => {

            notification.classList.add(
                "show"
            );

        });


        const closeButton =
            notification.querySelector(
                ".notification-close"
            );


        closeButton.addEventListener(
            "click",
            () => {

                removeNotification(
                    notification
                );

            }
        );


        setTimeout(() => {

            removeNotification(
                notification
            );

        }, 4000);

    }


    function removeNotification(
        notification
    ) {

        notification.classList.remove(
            "show"
        );


        setTimeout(() => {

            if (
                notification &&
                notification.parentNode
            ) {

                notification.remove();

            }

        }, 300);

    }


    /* =====================================================
       15. BACK TO TOP BUTTON
       ===================================================== */

    const backToTop =
        document.createElement(
            "button"
        );


    backToTop.className =
        "back-to-top";


    backToTop.innerHTML = "↑";


    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    document.body.appendChild(
        backToTop
    );


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    /* =====================================================
       16. CURRENT YEAR
       ===================================================== */

    const yearElement =
        document.getElementById(
            "year"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       17. PAGE LOADING ANIMATION
       ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );


    /* =====================================================
       18. BUTTON RIPPLE EFFECT
       ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn, button"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.classList.add(
                    "ripple"
                );


                const rect =
                    button.getBoundingClientRect();


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                ripple.style.width =
                    `${size}px`;


                ripple.style.height =
                    `${size}px`;


                ripple.style.left =
                    `${event.clientX -
                    rect.left -
                    size / 2}px`;


                ripple.style.top =
                    `${event.clientY -
                    rect.top -
                    size / 2}px`;


                button.appendChild(
                    ripple
                );


                setTimeout(() => {

                    ripple.remove();

                }, 600);

            }
        );

    });


    /* =====================================================
       19. EXTERNAL LINKS
       ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[href^="http"]'
        );


    externalLinks.forEach(link => {

        link.setAttribute(
            "target",
            "_blank"
        );


        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =====================================================
       20. ESC KEY - CLOSE MOBILE MENU
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                navMenu &&
                navMenu.classList.contains(
                    "active"
                )
            ) {

                navMenu.classList.remove(
                    "active"
                );


                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.innerHTML =
                        "☰";

                }

            }

        }
    );


    /* =====================================================
       21. CONSOLE BRANDING
       ===================================================== */

    console.log(
        "%c Vishal Singh | Portfolio ",
        "font-size: 18px; font-weight: bold;"
    );


    console.log(
        "%c Full Stack Developer • AI/ML • DevOps ",
        "font-size: 13px;"
    );


    console.log(
        "Portfolio loaded successfully 🚀"
    );

});
