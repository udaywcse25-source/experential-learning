// Initialize EmailJS
emailjs.init("nFAQZdna05hf1U06d");

document
    .getElementById("contactForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        const templateParams = {

            from_name: document.getElementById("name").value,

            from_email: document.getElementById("email").value,

            message: document.getElementById("message").value
        };

        emailjs.send(
            "service_zgcmh5q",
            "template_vauanhg",
            templateParams
        )

        .then(function(response) {

            alert("Message Sent Successfully!");

            document.getElementById("contactForm").reset();

            console.log("SUCCESS!", response);

        })

        .catch(function(error) {

            alert("Failed To Send Message!");

            console.log("FAILED...", error);

        });

    });