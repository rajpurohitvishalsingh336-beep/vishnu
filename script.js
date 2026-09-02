/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 5, 5, 0.92)";

    } else {

        navbar.style.background =
            "rgba(5, 5, 5, 0.75)";

    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-grid, .skill-card, .project-card"
    );

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================
   TYPING EFFECT
========================= */

const roles = [
    "Full Stack Developer",
    "AI / ML Enthusiast",
    "DevOps Learner",
    "Software Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


/* Create small role indicator */

const heroDescription =
    document.querySelector(".hero-description");


const roleElement =
    document.createElement("div");

roleElement.className = "dynamic-role";

heroDescription.after(roleElement);


function typeRole() {

    const currentRole =
        roles[roleIndex];

    if (!deleting) {

        roleElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1500);

            return;
        }

    } else {

        roleElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(
        typeRole,
        deleting ? 45 : 90
    );
}

typeRole();


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
    document.querySelector("footer span");

if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} Vishal Singh`;

}


/* =========================
   ADD REVEAL CSS
========================= */

const revealStyle =
    document.createElement("style");

revealStyle.textContent = `

    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition:
            opacity 0.8s ease,
            transform 0.8s ease;
    }

    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .dynamic-role {
        color: #888;
        font-family: monospace;
        font-size: 14px;
        margin-top: -20px;
        margin-bottom: 25px;
    }

`;

document.head.appendChild(revealStyle);
