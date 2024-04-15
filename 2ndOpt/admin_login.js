// JavaScript for Admin Login Page

// Function to handle form submission
function submitAdminLoginForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    // Example: Send form data to server using fetch API
    fetch('admin_login.php', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Handle successful login
            console.log('Admin login successful.');
            // Redirect to admin dashboard or perform other actions
        } else {
            // Handle login failure
            console.error('Admin login failed.');
            // Display error message or perform other actions
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Add event listener for form submission
document.getElementById('adminLoginForm').addEventListener('submit', submitAdminLoginForm);
