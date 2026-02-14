// Typing animation
const roles = [
    "System Programmer",
    "Backend Developer",
    "Linux Environment Specialist",
    "C++ & TCP/IP Engineer"
];

let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function type() {
    const typingElement = document.getElementById("typing");

    if (!isDeleting && charIndex <= roles[index].length) {
        currentRole = roles[index].substring(0, charIndex++);
    } else if (isDeleting && charIndex >= 0) {
        currentRole = roles[index].substring(0, charIndex--);
    }

    typingElement.textContent = currentRole;

    if (!isDeleting && charIndex === roles[index].length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Theme toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});
