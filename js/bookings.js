document.addEventListener('DOMContentLoaded', function() {
    // Get current user
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.php';
        return;
    }
    
    const user = JSON.parse(currentUser);
    
    // Get all bookings
    const allBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    
    // Filter bookings for current user
    const userBookings = allBookings.filter(booking => booking.userId === user.id);
    
    // Get tours for reference
    const tours = JSON.parse(localStorage.getItem('tours')) || [];
    
    // Current date for comparison
    const currentDate = new Date();
    
    // Filter upcoming and past bookings
    const upcomingBookings = userBookings.filter(booking => new Date(booking.startDate) >= currentDate);
    const pastBookings = userBookings.filter(booking => new Date(booking.startDate) < currentDate);
    
    // Display bookings
    displayBookings('upcomingBookings', upcomingBookings, tours);
    displayBookings('pastBookings', pastBookings, tours);
    displayBookings('allBookings', userBookings, tours);
    
    // Set up tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active', 'border-secondary', 'text-secondary');
                btn.classList.add('border-transparent', 'hover:text-gray-600', 'hover:border-gray-300');
            });
            
            // Add active class to clicked button
            this.classList.add('active', 'border-secondary', 'text-secondary');
            this.classList.remove('border-transparent', 'hover:text-gray-600', 'hover:border-gray-300');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            // Show selected tab content
            const tabId = this.getAttribute('data-tab') + 'Tab';
            document.getElementById(tabId).classList.remove('hidden');
        });
    });
});

// Function to display bookings
function displayBookings(containerId, bookings, tours) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Clear container
    container.innerHTML = '';
    
    if (bookings.length === 0) {
        container.innerHTML = '<div class="text-center py-8 text-gray-700">No bookings found.</div>';
        return;
    }
    
    // Sort bookings by date (newest first)
    bookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Add each booking to the container
    bookings.forEach(booking => {
        // Find tour details
        const tour = tours.find(t => t.id == booking.tourId) || {
            name: booking.tourName || 'Unknown Tour',
            image: 'https://source.unsplash.com/random/800x600/?philippines',
            location: 'Philippines'
        };
        
        // Format date
        const bookingDate = new Date(booking.startDate);
        const formattedDate = bookingDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Get status color
        let statusColor = '';
        switch(booking.status) {
            case 'confirmed':
                statusColor = 'bg-green-100 text-green-800';
                break;
            case 'pending':
                statusColor = 'bg-yellow-100 text-yellow-800';
                break;
            case 'cancelled':
                statusColor = 'bg-red-100 text-red-800';
                break;
            default:
                statusColor = 'bg-gray-100 text-gray-800';
        }
        
        // Create booking element
        const bookingElement = document.createElement('div');
        bookingElement.className = 'bg-white rounded-lg shadow-md overflow-hidden';
        bookingElement.innerHTML = `
            <div class="md:flex">
                <div class="md:w-1/3">
                    <img src="${tour.image}" alt="${tour.name}" class="h-full w-full object-cover">
                </div>
                <div class="p-6 md:w-2/3">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-primary mb-1">${tour.name}</h3>
                            <p class="text-gray-600">${tour.location}</p>
                        </div>
                        <span class="${statusColor} text-xs font-medium px-2.5 py-0.5 rounded capitalize">${booking.status}</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <p class="text-gray-700"><span class="font-medium">Booking ID:</span> #${booking.id.substring(0, 8)}</p>
                            <p class="text-gray-700"><span class="font-medium">Start Date:</span> ${formattedDate}</p>
                        </div>
                        <div>
                            <p class="text-gray-700"><span class="font-medium">Guests:</span> ${booking.guests}</p>
                            <p class="text-gray-700"><span class="font-medium">Total Price:</span> ₱${booking.totalPrice.toLocaleString()}</p>
                        </div>
                    </div>
                    <div class="border-t pt-4 flex justify-between items-center">
                        <div>
                            <p class="text-gray-600 text-sm">Booked on ${new Date(booking.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div class="space-x-2">
                            ${booking.status !== 'cancelled' && new Date(booking.startDate) > new Date() ? 
                                `<button class="cancel-booking bg-red-100 hover:bg-red-200 text-red-800 font-medium py-1 px-3 rounded-lg transition duration-300" data-id="${booking.id}">Cancel</button>` : ''}
                            <a href="tour-details.php?id=${booking.tourId}" class="bg-primary hover:bg-blue-900 text-white font-medium py-1 px-3 rounded-lg transition duration-300">View Tour</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(bookingElement);
    });
    
    // Add event listeners to cancel buttons
    const cancelButtons = container.querySelectorAll('.cancel-booking');
    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookingId = this.getAttribute('data-id');
            cancelBooking(bookingId);
        });
    });
}

// Function to cancel a booking
function cancelBooking(bookingId) {
    // Confirm cancellation
    if (!confirm('Are you sure you want to cancel this booking?')) {
        return;
    }
    
    // Get all bookings
    const allBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    
    // Find the booking to cancel
    const bookingIndex = allBookings.findIndex(booking => booking.id === bookingId);
    
    if (bookingIndex !== -1) {
        // Update booking status
        allBookings[bookingIndex].status = 'cancelled';
        
        // Save updated bookings
        localStorage.setItem('bookings', JSON.stringify(allBookings));
        
        // Reload the page to reflect changes
        window.location.reload();
    }
}