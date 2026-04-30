function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector("input[type='text']").value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email!");
        return;
    }

    alert("Message sent successfully!");
    form.reset();
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "white";
        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#ff9800";
        }
    });
});