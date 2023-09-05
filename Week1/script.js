// script.js

// Add an event listener to the Submit button
document.getElementById("submit-button").addEventListener("click", function (e) {
    // Prevent the default form submission
    e.preventDefault();

    // Replace with your email address
    var emailAddress = "gofafafa10@gmail.com";

    // Get the message from the input field
    var message = document.getElementById("message").value;

    // Encode the message for inclusion in the "mailto" link
    var encodedMessage = encodeURIComponent(message);

    // Create a "mailto" link with the message
    var mailtoLink = "mailto:" + emailAddress + "?body=" + encodedMessage;

    // Open the user's default email client
    window.location.href = mailtoLink;
});
