
// Used to toggle the menu on small screens when clicking on the menu button
function mobileMenuToggle() {
    const x = document.getElementById("navDemo");
    x.classList.toggle("w3-show");
}

document.getElementById("toggle").addEventListener("click", mobileMenuToggle);

// Function to reset the form
function resetForm() {
    document.getElementById("contactForm").reset();
}

// Event listener for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Submit the form asynchronously
    fetch("https://formspree.io/f/xayrbzqa", {
        method: "POST",
        body: new FormData(event.target)
    })
        .then(response => {
            if (response.ok) {
                // If the form submission was successful, reset the form
                resetForm();
                alert("Form submitted successfully!");
            } else {
                // If there was an error, display an error message
                alert("Form submission failed. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
});





