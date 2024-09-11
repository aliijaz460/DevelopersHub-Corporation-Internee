document.addEventListener("DOMContentLoaded", () => {
    showSection("about");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove("active");
        if (section.id === sectionId) {
            section.classList.add("active");
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = event.target.getAttribute("data-target");
        showSection(target);
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;

    if (name === "") {
        valid = false;
        alert("Name is required.");
    }

    if (email === "") {
        valid = false;
        alert("Email is required.");
    } else if (!validateEmail(email)) {
        valid = false;
        alert("Invalid email address.");
    }

    if (message === "") {
        valid = false;
        alert("Message is required.");
    }

    if (valid) {
        document.getElementById("contactForm").reset();
        document.getElementById("successMessage").style.display = "block";
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
