// JavaScript for View Cart Page

// Function to display cart items
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItemsDiv.innerHTML = ''; // Clear previous cart items

    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p><strong>Name:</strong> ${item.name}</p>
            <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
            <p><strong>Quantity:</strong> ${item.quantity}</p>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
    });
}

// Function to handle checkout
function checkout() {
    // Example: Redirect to checkout page
    window.location.href = 'checkout.php';
}

// Function to clear cart
function clearCart() {
    localStorage.removeItem('cartItems');
    displayCartItems(); // Update the cart display
}

// Display cart items on page load
window.addEventListener('load', displayCartItems);

// Add event listener for checkout button
document.getElementById('checkoutBtn').addEventListener('click', checkout);

// Add event listener for clear cart button
document.getElementById('clearCartBtn').addEventListener('click', clearCart);
