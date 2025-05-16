document.addEventListener('DOMContentLoaded', function() {
    // Get current user
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.php';
        return;
    }
    
    const user = JSON.parse(currentUser);
    
    // Get all wishlist items
    const allWishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Filter wishlist items for current user
    const userWishlistItems = allWishlistItems.filter(item => item.userId === user.id);
    
    // Get tours for reference
    const tours = JSON.parse(localStorage.getItem('tours')) || [];
    
    // Display wishlist
    displayWishlist(userWishlistItems, tours);
});

// Function to display wishlist items
function displayWishlist(wishlistItems, tours) {
    const wishlistContainer = document.getElementById('wishlistContainer');
    const emptyWishlistMessage = document.getElementById('emptyWishlist');
    
    if (!wishlistContainer) return;
    
    // Clear current content
    wishlistContainer.innerHTML = '';
    
    // Show empty message if no items
    if (wishlistItems.length === 0) {
        wishlistContainer.classList.add('hidden');
        emptyWishlistMessage.classList.remove('hidden');
        return;
    }
    
    // Hide empty message
    wishlistContainer.classList.remove('hidden');
    emptyWishlistMessage.classList.add('hidden');
    
    // Display each wishlist item
    wishlistItems.forEach(item => {
        const tour = tours.find(t => t.id == item.tourId);
        if (!tour) return;
        
        // Determine category color
        let categoryColor = '';
        switch(tour.category) {
            case 'beach':
                categoryColor = 'bg-green-100 text-green-800';
                break;
            case 'adventure':
                categoryColor = 'bg-yellow-100 text-yellow-800';
                break;
            case 'cultural':
                categoryColor = 'bg-purple-100 text-purple-800';
                break;
            case 'nature':
                categoryColor = 'bg-blue-100 text-blue-800';
                break;
            default:
                categoryColor = 'bg-gray-100 text-gray-800';
        }
        
        // Create stars based on rating
        const stars = '★'.repeat(tour.rating) + '☆'.repeat(5 - tour.rating);
        
        // Create wishlist item element
        const wishlistItemElement = document.createElement('div');
        wishlistItemElement.className = 'bg-white rounded-lg overflow-hidden shadow-lg';
        wishlistItemElement.innerHTML = `
            <img src="${tour.image}" alt="${tour.name}" class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-primary">${tour.name}</h3>
                    <span class="${categoryColor} text-xs font-medium px-2.5 py-0.5 rounded">${tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}</span>
                </div>
                <div class="flex items-center mb-2">
                    <span class="text-yellow-500">${stars}</span>
                    <span class="ml-1 text-gray-600 text-sm">(${tour.reviews} reviews)</span>
                </div>
                <p class="text-gray-700 mb-4">${tour.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-lg font-bold text-primary">₱${tour.price.toLocaleString()}</span>
                    <a href="tour-details.php?id=${tour.id}" class="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg transition duration-300">View Details</a>
                </div>
                <div class="mt-3">
                    <button class="remove-from-wishlist w-full bg-red-100 hover:bg-red-200 text-red-800 font-bold py-2 px-4 rounded-lg transition duration-300" data-id="${item.id}">
                        Remove from Wishlist
                    </button>
                </div>
            </div>
        `;
        
        wishlistContainer.appendChild(wishlistItemElement);
    });
    
    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-from-wishlist');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            removeFromWishlist(itemId);
        });
    });
}

// Function to remove an item from wishlist
function removeFromWishlist(itemId) {
    // Get all wishlist items
    const allWishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Find the item to remove
    const itemIndex = allWishlistItems.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        // Remove the item
        allWishlistItems.splice(itemIndex, 1);
        
        // Save updated wishlist
        localStorage.setItem('wishlist', JSON.stringify(allWishlistItems));
        
        // Reload the page to reflect changes
        window.location.reload();
    }
}
