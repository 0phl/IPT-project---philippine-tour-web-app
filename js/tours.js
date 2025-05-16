document.addEventListener('DOMContentLoaded', function() {
    // Sample tour data
    const tours = [
        {
            id: 1,
            name: 'Boracay Island Getaway',
            location: 'Aklan, Western Visayas',
            category: 'beach',
            duration: '3 days, 2 nights',
            price: 15000,
            rating: 5,
            reviews: 245,
            image: 'https://boracayinformer.com/wp-content/uploads/2024/10/inbound8053735243835763425-1080x560.jpg',
            description: 'Experience the world-famous white sand beaches of Boracay with this 3-day package.'
        },
        {
            id: 2,
            name: 'Banaue Rice Terraces Trek',
            location: 'Ifugao, Luzon',
            category: 'adventure',
            duration: '4 days, 3 nights',
            price: 12500,
            rating: 4,
            reviews: 128,
            image: 'https://test.johnfisalbon.com/wp-content/uploads/2022/05/Banaue-1.jpg',
            description: 'Explore the ancient rice terraces of Banaue and immerse in local culture.'
        },
        {
            id: 3,
            name: 'Coron Island Hopping',
            location: 'Palawan',
            category: 'nature',
            duration: '5 days, 4 nights',
            price: 18000,
            rating: 5,
            reviews: 189,
            image: 'https://escapeartistkatie.com/wp-content/uploads/2023/07/Bankga-boat-and-boardwalk-1024x538.jpg.webp',
            description: 'Discover the hidden lagoons and pristine beaches of Coron, Palawan.'
        },
        {
            id: 4,
            name: 'Manila Heritage Tour',
            location: 'Manila, Luzon',
            category: 'cultural',
            duration: '1 day',
            price: 3500,
            rating: 4,
            reviews: 76,
            image: 'https://gttp.images.tshiftcdn.com/423787/x/0/.jpg?w=360&h=220&fit=crop&auto=format%2Ccompress&q=32&dpr=2&ixlib=react-9.8.1',
            description: 'Explore the rich history and culture of Manila with this guided city tour.'
        },
        {
            id: 5,
            name: 'Cebu Island Adventure',
            location: 'Cebu, Visayas',
            category: 'adventure',
            duration: '4 days, 3 nights',
            price: 14000,
            rating: 5,
            reviews: 156,
            image: 'https://www.agoda.com/wp-content/uploads/2023/12/Featured-image-Cebu-1244x700.jpg',
            description: 'From whale sharks to waterfalls, experience the best of Cebu Island.'
        },
        {
            id: 6,
            name: 'Siargao Surf Camp',
            location: 'Siargao, Mindanao',
            category: 'beach',
            duration: '6 days, 5 nights',
            price: 20000,
            rating: 5,
            reviews: 210,
            image: 'https://www.bestsurfdestinations.com/wp-content/uploads/2021/02/Lexias-Hostel-and-Workspace.webp',
            description: 'Learn to surf in the Philippines\' surfing capital with expert instructors.'
        }
    ];

    // Always update tours in localStorage with the latest data
    localStorage.setItem('tours', JSON.stringify(tours));

    // Filter functionality
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', filterTours);
    }

    // Function to filter tours
    function filterTours() {
        const destination = document.getElementById('destination').value;
        const duration = document.getElementById('duration').value;
        const activity = document.getElementById('activity').value;

        // Get tours from localStorage
        const allTours = JSON.parse(localStorage.getItem('tours')) || tours;

        // Filter tours based on selected criteria
        let filteredTours = allTours;

        if (destination) {
            filteredTours = filteredTours.filter(tour => tour.location.toLowerCase().includes(destination.toLowerCase()));
        }

        if (activity) {
            filteredTours = filteredTours.filter(tour => tour.category === activity);
        }

        if (duration) {
            // Simple duration filtering logic
            if (duration === '1-3') {
                filteredTours = filteredTours.filter(tour => tour.duration.includes('1 day') || tour.duration.includes('2 days') || tour.duration.includes('3 days'));
            } else if (duration === '4-7') {
                filteredTours = filteredTours.filter(tour => tour.duration.includes('4 days') || tour.duration.includes('5 days') || tour.duration.includes('6 days') || tour.duration.includes('7 days'));
            } else if (duration === '8+') {
                filteredTours = filteredTours.filter(tour => {
                    const days = parseInt(tour.duration.split(' ')[0]);
                    return days >= 8;
                });
            }
        }

        // Display filtered tours
        displayTours(filteredTours);
    }

    // Function to display tours
    function displayTours(toursToDisplay) {
        const toursList = document.getElementById('toursList');
        if (!toursList) return;

        // Clear current tours
        toursList.innerHTML = '';

        if (toursToDisplay.length === 0) {
            toursList.innerHTML = '<div class="col-span-3 text-center py-8"><p class="text-gray-700 text-lg">No tours found matching your criteria. Please try different filters.</p></div>';
            return;
        }

        // Add each tour to the list
        toursToDisplay.forEach(tour => {
            const tourElement = document.createElement('div');
            tourElement.className = 'bg-white rounded-lg overflow-hidden shadow-lg';

            // Get category badge color
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

            tourElement.innerHTML = `
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
                        <a href="tour-details.php?id=${tour.id}#wishlist" class="block text-center bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 px-4 rounded-lg transition duration-300">
                            Add to Wishlist
                        </a>
                    </div>
                </div>
            `;

            toursList.appendChild(tourElement);
        });
    }

    // Initial display of all tours
    const allTours = JSON.parse(localStorage.getItem('tours')) || tours;
    displayTours(allTours);
});