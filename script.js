
// Used to toggle the menu on small screens when clicking on the menu button
function mobileMenuToggle() {
    const x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
});

function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var formData = new FormData(this);

    // You can perform further validation or processing here

    // Send form data using fetch or XMLHttpRequest
    fetch("your-server-endpoint", {
        method: "POST",
        body: formData
    })
        .then(response => {
            if (response.ok) {
                alert("Form submitted successfully!");
                // Reset the form after successful submission
                document.getElementById("contactForm").reset();
            } else {
                throw new Error("Error in form submission.");
            }
        })
        .catch(error => {
            console.error("Form submission error:", error);
            alert("There was an error submitting the form. Please try again later.");
        });
}

document.getElementById("contactForm").addEventListener("submit", handleFormSubmission);


