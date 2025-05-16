// Wishlist functionality for Philippine Tour website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize wishlist if it doesn't exist
    if (!localStorage.getItem('wishlist')) {
        localStorage.setItem('wishlist', JSON.stringify([]));
    }

    // Check if we're on the tour details page
    const addToWishlistBtn = document.getElementById('addToWishlistBtn');
    if (addToWishlistBtn) {
        // Get tour ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const tourId = urlParams.get('id');

        // Check if tour is already in wishlist
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
        const isInWishlist = wishlist.some(item => 
            item.tourId == tourId && item.userId === currentUser.id
        );

        // Update button text and style based on wishlist status
        updateWishlistButtonState(addToWishlistBtn, isInWishlist);

        // Add event listener to the wishlist button
        addToWishlistBtn.addEventListener('click', function() {
            // Get current user
            const currentUser = localStorage.getItem('currentUser');
            if (!currentUser) {
                window.location.href = 'login.php';
                return;
            }

            const user = JSON.parse(currentUser);
            const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            
            // Check if tour is already in wishlist
            const existingIndex = wishlist.findIndex(item => 
                item.tourId == tourId && item.userId === user.id
            );

            if (existingIndex !== -1) {
                // Remove from wishlist
                wishlist.splice(existingIndex, 1);
                updateWishlistButtonState(addToWishlistBtn, false);
            } else {
                // Add to wishlist
                const tours = JSON.parse(localStorage.getItem('tours')) || [];
                const tour = tours.find(t => t.id == tourId);
                
                if (tour) {
                    wishlist.push({
                        id: Date.now().toString(),
                        userId: user.id,
                        tourId: tourId,
                        addedAt: new Date().toISOString()
                    });
                    updateWishlistButtonState(addToWishlistBtn, true);
                }
            }

            // Save updated wishlist
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        });
    }
});

// Function to update wishlist button state
function updateWishlistButtonState(button, isInWishlist) {
    if (isInWishlist) {
        button.textContent = 'Remove from Wishlist';
        button.classList.remove('bg-gray-200', 'hover:bg-gray-300', 'text-gray-800');
        button.classList.add('bg-red-100', 'hover:bg-red-200', 'text-red-800');
    } else {
        button.textContent = 'Add to Wishlist';
        button.classList.remove('bg-red-100', 'hover:bg-red-200', 'text-red-800');
        button.classList.add('bg-gray-200', 'hover:bg-gray-300', 'text-gray-800');
    }
}
