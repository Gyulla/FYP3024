// JavaScript for Shopping Page

// Sample data (replace with your actual data)
const shoppingItemsData = [
    { id: 1, name: 'Item 1', price: 20.00, image: 'item1.jpg' },
    { id: 2, name: 'Item 2', price: 25.00, image: 'item2.jpg' },
    // Add more items as needed
];

// Function to handle add to cart button click
function addToCartHandler(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const itemId = parseInt(event.target.getAttribute('data-id'));
        const selectedItem = shoppingItemsData.find(item => item.id === itemId);
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        // Check if item is already in the cart
        const existingItemIndex = cartItems.findIndex(item => item.id === itemId);
        if (existingItemIndex !== -1) {
            // If item exists in cart, increment quantity
            cartItems[existingItemIndex].quantity++;
        } else {
            // If item is not in cart, add it
            cartItems.push({ ...selectedItem, quantity: 1 });
        }

        // Update localStorage with updated cart items
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        // Optionally, provide feedback to the user
        alert(`${selectedItem.name} added to cart.`);
    }
}

// Display shopping items when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Display shopping items
    const shoppingItemsSection = document.querySelector('.shopping-items');
    shoppingItemsData.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('shopping-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Description of ${item.name}.</p>
            <p class="price">$${item.price.toFixed(2)}</p>
            <button class="btn add-to-cart" data-id="${item.id}">Add to Cart</button>
        `;
        shoppingItemsSection.appendChild(itemElement);
    });

    // Add event listener for add to cart button
    document.querySelector('.shopping-items').addEventListener('click', addToCartHandler);
});
