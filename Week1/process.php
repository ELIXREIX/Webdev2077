<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "gofafafa10@gmail.com"; // Replace with your email address
    $subject = "New contact form submission from $name";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    // Optionally, you can redirect the user to a thank-you page
    header("Location: thank-you.html"); // Replace with the URL of your thank-you page
    exit;
}
?>