document.addEventListener('DOMContentLoaded', function() {
    // Load user data
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        document.getElementById('userName').textContent = user.fullName || user.email.split('@')[0];
    }

    // Initialize bookings if not exists
    if (!localStorage.getItem('bookings')) {
        localStorage.setItem('bookings', JSON.stringify([]));
    }

    // Load user's bookings count
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const userBookings = bookings.filter(booking => {
        return booking.userId === JSON.parse(currentUser).id;
    });

    // Update stats using the specific IDs
    // Upcoming trips (future dates)
    const upcomingTrips = userBookings.filter(booking => {
        return new Date(booking.startDate) > new Date();
    });
    const upcomingTripsElement = document.getElementById('upcomingTripsCount');
    if (upcomingTripsElement) {
        upcomingTripsElement.textContent = upcomingTrips.length;
    }

    // Completed tours (past dates)
    const completedTours = userBookings.filter(booking => {
        return new Date(booking.startDate) < new Date();
    });
    const completedToursElement = document.getElementById('completedToursCount');
    if (completedToursElement) {
        completedToursElement.textContent = completedTours.length;
    }

    // Load user's wishlist items count
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const userWishlistItems = wishlist.filter(item => {
        return item.userId === JSON.parse(currentUser).id;
    });

    const wishlistItemsElement = document.getElementById('wishlistItemsCount');
    if (wishlistItemsElement) {
        wishlistItemsElement.textContent = userWishlistItems.length;
    }
});