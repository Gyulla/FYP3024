// JavaScript for Admin Dashboard Page

// Function to fetch and display customer orders
function displayCustomerOrders() {
    // Example: Fetch customer orders from server using fetch API
    fetch('fetch_orders.php')
    .then(response => response.json())
    .then(orders => {
        const customerOrdersDiv = document.getElementById('customerOrders');
        // Clear previous orders
        customerOrdersDiv.innerHTML = '';
        // Display each order
        orders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.classList.add('order');
            orderDiv.innerHTML = `
                <p><strong>Order ID:</strong> ${order.id}</p>
                <p><strong>Customer Name:</strong> ${order.customer_name}</p>
                <p><strong>Item:</strong> ${order.item}</p>
                <p><strong>Quantity:</strong> ${order.quantity}</p>
                <p><strong>Total Price:</strong> $${order.total_price.toFixed(2)}</p>
                <button class="btn delete-order-btn" data-id="${order.id}">Delete</button>
            `;
            customerOrdersDiv.appendChild(orderDiv);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to handle logout
function logout() {
    // Example: Redirect to logout page
    window.location.href = 'logout.php';
}

// Display customer orders on page load
window.addEventListener('load', displayCustomerOrders);

// Add event listener for logout button click
document.getElementById("logoutBtn").addEventListener("click", function() {
    // Redirect to admin login page
    window.location.href = "admin_login.html";
});

// You may also need to add event listeners and functions for deleting orders dynamically
