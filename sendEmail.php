<?php
// Retrieve form data
$firstName = $_POST['first'];
$lastName = $_POST['second'];
$email = $_POST['email'];
$contactNumber = $_POST['tel'];
$message = $_POST['message'];

// Send email
$to = 'recipient@example.com'; // Specify recipient email address
$subject = 'Contact Form Submission';
$body = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nContact Number: $contactNumber\nMessage: $message";
$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
    echo 'Email sent successfully.';
} else {
    echo 'Failed to send email.';
}
?>
