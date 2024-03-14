
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




