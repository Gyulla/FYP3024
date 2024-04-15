<?php
// Example: Clear cart session or data
// This script should be invoked when the user clicks on the "Clear Cart" button

// Start session (if not already started)
session_start();

// Clear cart data from session (replace 'cart' with your session key)
unset($_SESSION['cart']);

// Redirect back to the view cart page
header('Location: view_cart.html');
exit;
?>
