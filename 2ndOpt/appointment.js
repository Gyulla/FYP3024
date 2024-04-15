// JavaScript for Appointment Page

// Function to handle form submission
function submitAppointmentForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const time = formData.get('time');

    // Example: Send form data to server using fetch API
    fetch('submit_appointment.php', {
        method: 'POST',
        body: JSON.stringify({ name, email, phone, date, time }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Handle successful form submission
            console.log('Appointment booked successfully.');
        } else {
            // Handle error
            console.error('Error booking appointment.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Add event listener for form submission
document.getElementById('appointmentForm').addEventListener('submit', submitAppointmentForm);
