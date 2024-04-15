<?php
// Example: Handle customer signup
// You can implement the signup process according to your business logic
// This script should handle form submission from cust_signup.html

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Example: Store user data in database (replace with your database handling logic)

    // Redirect user to login page after successful signup
    header("Location: cust_login.html");
    exit;
}
?>
