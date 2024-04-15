<?php
// Example: Fetch orders from database and return as JSON response

// Connect to database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "my_database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch orders from database
$sql = "SELECT * FROM orders";
$result = $conn->query($sql);

$orders = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $orders[] = $row;
    }
}

$conn->close();

// Return orders as JSON response
header('Content-Type: application/json');
echo json_encode($orders);
?>
