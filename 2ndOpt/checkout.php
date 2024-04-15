<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - KhaZa Bike Workshop</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="brand">
            <a href="index.html">KhaZa Workshop</a>
        </div>
        <div class="nav-links">
            <a href="shopping.html">Shop</a>
            <a href="appointment.html">Appointment</a>
            <a href="admin_login.html">Admin</a>
        </div>
        <div class="account">
            <a href="cust_login.html">Log In</a>
            <a href="view_cart.html">View Cart</a>
        </div>
    </nav>

    <!-- Checkout Form -->
    <section class="checkout-form">
        <h2>Checkout</h2>
        <!-- Add your checkout form here -->
        <form action="process_checkout.php" method="POST">
            <!-- Include fields for user details, payment info, etc. -->
            <button type="submit" class="btn">Complete Purchase</button>
        </form>
    </section>

    <script src="script.js"></script>
</body>
</html>
