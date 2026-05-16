const roles = [
    "Software/Firmware Engineer",
    "Linux System Programmer",
    "Backend Systems Engineer",
    "C++ & TCP/IP Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let deleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!deleting) {
        currentText = roles[index].substring(0, charIndex++);
    } else {
        currentText = roles[index].substring(0, charIndex--);
    }

    typing.textContent = currentText;

    if (!deleting && charIndex === roles[index].length + 1) {
        deleting = true;

        setTimeout(typeEffect, 1200);
        return;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        index = (index + 1) % roles.length;
    }

    setTimeout(typeEffect, deleting ? 40 : 90);
}

typeEffect();

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});