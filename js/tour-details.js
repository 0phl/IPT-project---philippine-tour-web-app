document.addEventListener('DOMContentLoaded', function() {
    // Get tour ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('id');

    if (!tourId) {
        window.location.href = 'tours.php';
        return;
    }

    // Get tours from localStorage
    const tours = JSON.parse(localStorage.getItem('tours')) || [];

    // Find the specific tour
    const tour = tours.find(t => t.id == tourId);

    if (!tour) {
        window.location.href = 'tours.php';
        return;
    }

    // Update page content with tour details
    updateTourDetails(tour);

    // Display recommended tours
    displayRecommendedTours(tours, tour.id);

    // Set up booking form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get current user
            const currentUser = localStorage.getItem('currentUser');
            if (!currentUser) {
                window.location.href = 'login.php';
                return;
            }

            const user = JSON.parse(currentUser);

            // Get form data
            const startDate = document.getElementById('startDate').value;
            const guests = document.getElementById('guests').value;
            const specialRequests = document.getElementById('specialRequests').value;

            // Create booking object
            const booking = {
                id: Date.now().toString(),
                tourId: tour.id,
                tourName: tour.name,
                userId: user.id,
                userName: user.fullName || user.email,
                startDate,
                guests,
                specialRequests,
                totalPrice: tour.price * (guests === '6+' ? 6 : parseInt(guests)),
                status: 'pending',
                createdAt: new Date().toISOString()
            };

            // Get existing bookings
            const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

            // Add new booking
            bookings.push(booking);

            // Save to localStorage
            localStorage.setItem('bookings', JSON.stringify(bookings));

            // Show success message and redirect
            alert('Booking successful! You will be redirected to your bookings page.');
            window.location.href = 'bookings.php';
        });
    }

    // Set minimum date for booking (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

    const startDateInput = document.getElementById('startDate');
    if (startDateInput) {
        startDateInput.min = tomorrowFormatted;
    }
});

// Function to update the page content with tour details
function updateTourDetails(tour) {
    // Update tour image
    const tourImage = document.querySelector('.h-96 img');
    if (tourImage) {
        tourImage.src = tour.image;
        tourImage.alt = tour.name;
    }

    // Update tour name
    const tourName = document.querySelector('.absolute .text-4xl');
    if (tourName) {
        tourName.textContent = tour.name;
    }

    // Update rating and reviews
    const ratingSpan = document.querySelector('.absolute .flex .text-yellow-400');
    const reviewsSpan = document.querySelector('.absolute .flex .ml-2');
    if (ratingSpan && reviewsSpan) {
        ratingSpan.textContent = '★'.repeat(tour.rating) + '☆'.repeat(5 - tour.rating);
        reviewsSpan.textContent = `(${tour.reviews} reviews)`;
    }

    // Update location
    const locationSpan = document.querySelector('.absolute .flex span:last-child');
    if (locationSpan) {
        locationSpan.textContent = tour.location;
    }

    // Update category
    const categoryDiv = document.querySelector('.absolute .bg-green-100');
    if (categoryDiv) {
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

        // Update category class and text
        categoryDiv.className = categoryColor + ' text-sm font-medium px-3 py-1 rounded-full inline-block';
        categoryDiv.textContent = tour.category.charAt(0).toUpperCase() + tour.category.slice(1);
    }

    // Update overview
    const overviewP = document.querySelector('h2.text-2xl.font-bold.text-primary.mb-4 + p');
    if (overviewP) {
        // Set detailed description based on tour ID
        let detailedDescription = '';
        switch(tour.id) {
            case 1: // Boracay
                detailedDescription = 'Experience the world-famous white sand beaches of Boracay with this 3-day package. Boracay is known for its pristine white sand beaches, crystal-clear waters, and vibrant nightlife. This tour package includes accommodations, island hopping, water activities, and more.';
                break;
            case 2: // Banaue
                detailedDescription = 'Explore the ancient rice terraces of Banaue, a UNESCO World Heritage site often called the "Eighth Wonder of the World." These 2,000-year-old terraces were carved into the mountains by ancestors of the indigenous people. Experience the rich culture and breathtaking landscapes of the Ifugao region.';
                break;
            case 3: // Coron
                detailedDescription = 'Discover the hidden lagoons and pristine beaches of Coron, Palawan. Known for its crystal-clear waters, limestone cliffs, and vibrant coral reefs, Coron offers some of the best island hopping and diving experiences in the Philippines. Explore shipwrecks, swim in natural hot springs, and relax on secluded beaches.';
                break;
            case 4: // Manila
                detailedDescription = 'Explore the rich history and culture of Manila with this guided city tour. Visit historic sites like Intramuros (the Walled City), Fort Santiago, and Rizal Park. Experience the blend of Spanish colonial influence, American heritage, and Filipino culture that makes Manila unique. Perfect for history enthusiasts and first-time visitors.';
                break;
            case 5: // Cebu
                detailedDescription = 'From whale sharks to waterfalls, experience the best of Cebu Island. This adventure tour takes you from the bustling city of Cebu to the natural wonders of Oslob, Kawasan Falls, and Moalboal. Swim with whale sharks, go canyoneering, and snorkel with millions of sardines in the famous sardine run.';
                break;
            case 6: // Siargao
                detailedDescription = 'Learn to surf in the Philippines\' surfing capital with expert instructors. Known as the "Surfing Capital of the Philippines," Siargao offers perfect waves for beginners and pros alike. This package includes surfing lessons, island hopping to nearby attractions like Naked Island and Daku Island, and exploring the famous Cloud 9 surf break.';
                break;
            default:
                detailedDescription = tour.description;
        }
        overviewP.textContent = detailedDescription;
    }

    // Update highlights
    const highlightsHeading = Array.from(document.querySelectorAll('h2')).find(h2 => h2.textContent.includes('Highlights'));
    const highlightsUl = highlightsHeading ? highlightsHeading.nextElementSibling : null;
    if (highlightsUl) {
        // Set highlights based on tour ID
        let highlights = [];
        switch(tour.id) {
            case 1: // Boracay
                // Keep existing highlights
                break;
            case 2: // Banaue
                highlights = [
                    'Trek through the UNESCO World Heritage rice terraces',
                    'Learn about the indigenous Ifugao culture and traditions',
                    'Visit native villages and interact with local communities',
                    'Witness stunning sunrise views over the terraced mountains',
                    'Experience traditional weaving and woodcarving demonstrations'
                ];
                updateListItems(highlightsUl, highlights);
                break;
            case 3: // Coron
                highlights = [
                    'Swim in the crystal-clear waters of Kayangan Lake',
                    'Explore Japanese shipwrecks from World War II',
                    'Relax in natural hot springs after a day of island hopping',
                    'Snorkel among vibrant coral reefs and tropical fish',
                    'Visit the hidden Twin Lagoons and Barracuda Lake'
                ];
                updateListItems(highlightsUl, highlights);
                break;
            case 4: // Manila
                highlights = [
                    'Walk through the historic walled city of Intramuros',
                    'Visit Fort Santiago and learn about national hero Jose Rizal',
                    'Explore the National Museum of the Philippines',
                    'Experience the vibrant street food scene',
                    'Shop at local markets and modern malls'
                ];
                updateListItems(highlightsUl, highlights);
                break;
            case 5: // Cebu
                highlights = [
                    'Swim with whale sharks in Oslob (ethical encounter)',
                    'Go canyoneering at the famous Kawasan Falls',
                    'Snorkel with millions of sardines at the Moalboal sardine run',
                    'Visit the historic Magellan\'s Cross and Basilica del Santo Niño',
                    'Enjoy island hopping around Mactan Island'
                ];
                updateListItems(highlightsUl, highlights);
                break;
            case 6: // Siargao
                highlights = [
                    'Learn to surf with professional instructors at beginner-friendly beaches',
                    'Visit the famous Cloud 9 surf break and watch pro surfers',
                    'Explore the Magpupungko Rock Pools during low tide',
                    'Go island hopping to Naked Island, Daku Island, and Guyam Island',
                    'Experience the laid-back island lifestyle and vibrant surf community'
                ];
                updateListItems(highlightsUl, highlights);
                break;
        }
    }

    // Update itinerary
    const itineraryHeading = Array.from(document.querySelectorAll('h2')).find(h2 => h2.textContent.includes('Itinerary'));
    const itineraryDiv = itineraryHeading ? itineraryHeading.nextElementSibling : null;
    if (itineraryDiv) {
        // Set itinerary based on tour ID
        let itinerary = [];
        switch(tour.id) {
            case 1: // Boracay
                // Keep existing itinerary
                break;
            case 2: // Banaue
                itinerary = [
                    {
                        day: 'Day 1: Manila to Banaue',
                        activities: [
                            'Early morning departure from Manila',
                            'Scenic drive through the mountains of Northern Luzon',
                            'Arrival in Banaue and hotel check-in',
                            'Orientation and briefing about the trek',
                            'Welcome dinner featuring local Ifugao cuisine'
                        ]
                    },
                    {
                        day: 'Day 2: Rice Terraces Trek',
                        activities: [
                            'Breakfast at the hotel',
                            'Full-day trek through the rice terraces with local guide',
                            'Visit to Batad village and amphitheater-like terraces',
                            'Lunch with a local family',
                            'Return to Banaue town for dinner and rest'
                        ]
                    },
                    {
                        day: 'Day 3: Cultural Immersion',
                        activities: [
                            'Breakfast at the hotel',
                            'Visit to local museum and cultural center',
                            'Traditional weaving and woodcarving demonstrations',
                            'Lunch featuring native delicacies',
                            'Free time to explore the town or rest'
                        ]
                    },
                    {
                        day: 'Day 4: Return to Manila',
                        activities: [
                            'Early breakfast at the hotel',
                            'Souvenir shopping at local markets',
                            'Departure for Manila',
                            'Arrival in Manila by evening'
                        ]
                    }
                ];
                updateItinerary(itineraryDiv, itinerary);
                break;
            case 3: // Coron
                itinerary = [
                    {
                        day: 'Day 1: Arrival in Coron',
                        activities: [
                            'Airport pickup and transfer to hotel',
                            'Welcome briefing and tour orientation',
                            'Free time to explore Coron town',
                            'Welcome dinner at a local seafood restaurant'
                        ]
                    },
                    {
                        day: 'Day 2: Island Hopping Tour A',
                        activities: [
                            'Breakfast at the hotel',
                            'Visit to Kayangan Lake, often called the cleanest lake in Asia',
                            'Snorkeling at Coral Garden',
                            'Lunch at Beach 91',
                            'Explore Twin Lagoons',
                            'Return to hotel and free evening'
                        ]
                    },
                    {
                        day: 'Day 3: Island Hopping Tour B',
                        activities: [
                            'Breakfast at the hotel',
                            'Visit to Barracuda Lake for swimming and diving',
                            'Explore Japanese shipwrecks from WWII',
                            'Lunch on a secluded beach',
                            'Snorkeling at Skeleton Wreck',
                            'Relax at Maquinit Hot Springs in the evening'
                        ]
                    },
                    {
                        day: 'Day 4: Beach Day',
                        activities: [
                            'Breakfast at the hotel',
                            'Visit to Malcapuya Island and Banana Island',
                            'Beach activities and relaxation',
                            'Seafood lunch on the beach',
                            'Return to hotel and farewell dinner'
                        ]
                    },
                    {
                        day: 'Day 5: Departure',
                        activities: [
                            'Breakfast at the hotel',
                            'Free time for last-minute shopping',
                            'Hotel checkout and transfer to airport'
                        ]
                    }
                ];
                updateItinerary(itineraryDiv, itinerary);
                break;
            case 4: // Manila
                itinerary = [
                    {
                        day: 'Day 1: Historic Manila Tour',
                        activities: [
                            'Hotel pickup in the morning',
                            'Visit to Rizal Park and Rizal Monument',
                            'Guided tour of Intramuros (the Walled City)',
                            'Explore Fort Santiago and learn about Jose Rizal',
                            'Visit San Agustin Church, a UNESCO World Heritage site',
                            'Lunch at a traditional Filipino restaurant',
                            'Tour of the National Museum of the Philippines',
                            'Return to hotel or drop-off point'
                        ]
                    }
                ];
                updateItinerary(itineraryDiv, itinerary);
                break;
            case 5: // Cebu
                itinerary = [
                    {
                        day: 'Day 1: Arrival and City Tour',
                        activities: [
                            'Airport pickup and transfer to hotel',
                            'City tour including Magellan\'s Cross and Basilica del Santo Niño',
                            'Visit to Fort San Pedro and Cebu Heritage Monument',
                            'Welcome dinner featuring Cebu lechon'
                        ]
                    },
                    {
                        day: 'Day 2: Oslob Whale Shark Experience',
                        activities: [
                            'Early morning departure to Oslob',
                            'Ethical whale shark interaction and swimming',
                            'Visit to Tumalog Falls',
                            'Lunch at a local restaurant',
                            'Return to Cebu City in the evening'
                        ]
                    },
                    {
                        day: 'Day 3: Kawasan Falls Canyoneering',
                        activities: [
                            'Early departure to Badian',
                            'Canyoneering adventure through canyons and natural pools',
                            'Swim at the main Kawasan Falls',
                            'Lunch at a local eatery',
                            'Return to Cebu City'
                        ]
                    },
                    {
                        day: 'Day 4: Moalboal and Departure',
                        activities: [
                            'Morning trip to Moalboal',
                            'Snorkeling with the famous sardine run',
                            'Island hopping to Pescador Island',
                            'Late lunch',
                            'Return to Cebu City and hotel checkout',
                            'Transfer to airport for departure'
                        ]
                    }
                ];
                updateItinerary(itineraryDiv, itinerary);
                break;
            case 6: // Siargao
                itinerary = [
                    {
                        day: 'Day 1: Arrival in Siargao',
                        activities: [
                            'Airport pickup and transfer to resort',
                            'Welcome briefing and surf orientation',
                            'Free time to explore General Luna area',
                            'Welcome dinner at a beachfront restaurant'
                        ]
                    },
                    {
                        day: 'Day 2: Beginner Surf Lessons',
                        activities: [
                            'Breakfast at the resort',
                            'Morning surf lesson at beginner-friendly beach',
                            'Lunch break',
                            'Afternoon surf session with instructors',
                            'Free evening to explore local restaurants and bars'
                        ]
                    },
                    {
                        day: 'Day 3: Island Hopping Tour',
                        activities: [
                            'Breakfast at the resort',
                            'Full-day island hopping to Naked Island, Daku Island, and Guyam Island',
                            'Snorkeling and beach activities',
                            'Seafood lunch on Daku Island',
                            'Return to resort in the late afternoon'
                        ]
                    },
                    {
                        day: 'Day 4: Intermediate Surf Lessons',
                        activities: [
                            'Breakfast at the resort',
                            'Morning surf session at intermediate spots',
                            'Lunch break',
                            'Visit to Cloud 9 viewing deck to watch pro surfers',
                            'Free time for additional surfing or relaxation'
                        ]
                    },
                    {
                        day: 'Day 5: Magpupungko Rock Pools',
                        activities: [
                            'Breakfast at the resort',
                            'Visit to Magpupungko Rock Pools during low tide',
                            'Cliff jumping and swimming in natural pools',
                            'Lunch at a local eatery',
                            'Afternoon surf session or free time'
                        ]
                    },
                    {
                        day: 'Day 6: Departure',
                        activities: [
                            'Breakfast at the resort',
                            'Final morning surf session (optional)',
                            'Hotel checkout and transfer to airport'
                        ]
                    }
                ];
                updateItinerary(itineraryDiv, itinerary);
                break;
        }
    }

    // Update inclusions
    const inclusionsHeading = Array.from(document.querySelectorAll('h2')).find(h2 => h2.textContent.includes('What\'s Included'));
    const inclusionsUl = inclusionsHeading ? inclusionsHeading.nextElementSibling : null;
    if (inclusionsUl) {
        // Set inclusions based on tour ID
        let inclusions = [];
        switch(tour.id) {
            case 1: // Boracay
                // Keep existing inclusions
                break;
            case 2: // Banaue
                inclusions = [
                    '4 days/3 nights accommodation in Banaue',
                    'Daily breakfast',
                    'Welcome and farewell dinners',
                    'Round-trip transportation from Manila',
                    'Professional local guide',
                    'All entrance fees and permits',
                    'Cultural demonstrations and activities',
                    'Bottled water during treks'
                ];
                updateListItems(inclusionsUl, inclusions);
                break;
            case 3: // Coron
                inclusions = [
                    '5 days/4 nights accommodation in a beachfront resort',
                    'Daily breakfast',
                    'Welcome and farewell dinners',
                    'Two full-day island hopping tours with lunch',
                    'Hot springs entrance fee',
                    'Snorkeling gear rental',
                    'Airport transfers',
                    'English-speaking guide',
                    'All boat fees and environmental fees'
                ];
                updateListItems(inclusionsUl, inclusions);
                break;
            case 4: // Manila
                inclusions = [
                    'Full-day guided tour of Manila',
                    'Air-conditioned transportation',
                    'Professional English-speaking guide',
                    'Lunch at a traditional Filipino restaurant',
                    'Entrance fees to all attractions',
                    'Bottled water',
                    'Hotel pickup and drop-off within Manila'
                ];
                updateListItems(inclusionsUl, inclusions);
                break;
            case 5: // Cebu
                inclusions = [
                    '4 days/3 nights accommodation in Cebu City',
                    'Daily breakfast',
                    'Welcome dinner featuring Cebu lechon',
                    'City tour with entrance fees',
                    'Whale shark interaction fee',
                    'Canyoneering adventure with gear rental',
                    'Snorkeling gear for sardine run',
                    'All transportation during the tour',
                    'English-speaking guide',
                    'Airport transfers'
                ];
                updateListItems(inclusionsUl, inclusions);
                break;
            case 6: // Siargao
                inclusions = [
                    '6 days/5 nights accommodation in a surf resort',
                    'Daily breakfast',
                    'Welcome dinner',
                    '4 surf lessons with professional instructors',
                    'Surfboard rental during lessons',
                    'Island hopping tour with lunch',
                    'Magpupungko Rock Pools excursion',
                    'Airport transfers',
                    'All transportation during the tour',
                    'English-speaking guide'
                ];
                updateListItems(inclusionsUl, inclusions);
                break;
        }
    }

    // Update booking section
    const priceSpan = document.querySelector('.flex.justify-between.mb-2 .font-bold.text-primary');
    if (priceSpan) {
        priceSpan.textContent = `₱${tour.price.toLocaleString()}`;
    }

    const durationSpan = document.querySelector('.flex.justify-between.mb-2 + .flex.justify-between span:last-child');
    if (durationSpan) {
        durationSpan.textContent = tour.duration;
    }
}

// Helper function to update list items
function updateListItems(ul, items) {
    if (!ul || !items || !items.length) return;

    // Clear existing items
    ul.innerHTML = '';

    // Add new items
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-disc list-inside';
        li.textContent = item;
        ul.appendChild(li);
    });
}

// Helper function to update itinerary
function updateItinerary(container, itinerary) {
    if (!container || !itinerary || !itinerary.length) return;

    // Clear existing itinerary
    container.innerHTML = '';

    // Add new itinerary
    itinerary.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'mb-6';

        const dayTitle = document.createElement('h3');
        dayTitle.className = 'text-xl font-bold text-primary';
        dayTitle.textContent = day.day;
        dayDiv.appendChild(dayTitle);

        const activitiesList = document.createElement('ul');
        activitiesList.className = 'list-disc list-inside mt-2 text-gray-700';

        day.activities.forEach(activity => {
            const activityItem = document.createElement('li');
            activityItem.textContent = activity;
            activitiesList.appendChild(activityItem);
        });

        dayDiv.appendChild(activitiesList);
        container.appendChild(dayDiv);
    });
}

// Function to display recommended tours
function displayRecommendedTours(allTours, currentTourId) {
    const recommendedToursContainer = document.getElementById('recommendedTours');
    if (!recommendedToursContainer) return;

    // Clear current content
    recommendedToursContainer.innerHTML = '';

    // Filter out the current tour and get 3 random tours
    const otherTours = allTours.filter(tour => tour.id != currentTourId);

    // If there are less than 3 other tours, show all of them
    // Otherwise, get 3 random tours
    let recommendedTours = [];
    if (otherTours.length <= 3) {
        recommendedTours = otherTours;
    } else {
        // Shuffle the array and take the first 3
        recommendedTours = otherTours.sort(() => 0.5 - Math.random()).slice(0, 3);
    }

    // Add each recommended tour to the container
    recommendedTours.forEach(tour => {
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

        // Create tour card
        const tourCard = document.createElement('div');
        tourCard.className = 'bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1';

        tourCard.innerHTML = `
            <img src="${tour.image}" alt="${tour.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-primary">${tour.name}</h3>
                    <span class="${categoryColor} text-xs font-medium px-2 py-0.5 rounded">${tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}</span>
                </div>
                <p class="text-gray-600 text-sm mb-2">${tour.location}</p>
                <div class="flex items-center mb-2">
                    <span class="text-yellow-500 text-sm">${stars}</span>
                    <span class="ml-1 text-gray-600 text-xs">(${tour.reviews} reviews)</span>
                </div>
                <div class="flex justify-between items-center mt-3">
                    <span class="text-primary font-bold">₱${tour.price.toLocaleString()}</span>
                    <a href="tour-details.php?id=${tour.id}" class="bg-secondary hover:bg-blue-600 text-white text-sm font-bold py-1 px-3 rounded transition duration-300">View Details</a>
                </div>
            </div>
        `;

        recommendedToursContainer.appendChild(tourCard);
    });
}