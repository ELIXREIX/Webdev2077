// script.js

// Add an event listener to the Submit button
document.getElementById("submit-button").addEventListener("click", function (e) {
    // Prevent the default form submission
    e.preventDefault();

    // Replace with your email address
    var emailAddress = "gofafafa10@gmail.com";

    // Create a "mailto" link
    var mailtoLink = "mailto:" + emailAddress;

    // Open the user's default email client
    window.location.href = mailtoLink;
});
