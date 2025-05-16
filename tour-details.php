<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tour Details - Philippine Tour</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/custom.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#0a1a35',
                        secondary: '#3b82f6',
                    }
                }
            }
        }
    </script>
    <link rel="stylesheet" href="css/custom.css">
    <script src="js/auth.js" defer></script>
    <link rel="stylesheet" href="css/custom.css">
    <script src="js/tour-details.js" defer></script>
    <link rel="stylesheet" href="css/custom.css">
    <script src="js/wishlist.js" defer></script>
    <link rel="stylesheet" href="css/custom.css">
</head>
<body class="bg-gray-100 min-h-screen">
    <!-- Header -->
    <header class="bg-primary text-white p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">Philippine Tour</h1>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="dashboard.php" class="hover:text-secondary">Dashboard</a></li>
                    <li><a href="tours.php" class="hover:text-secondary">Tours</a></li>
                    <li><a href="bookings.php" class="hover:text-secondary">My Bookings</a></li>
                    <li><a href="wishlist.php" class="hover:text-secondary">My Wishlist</a></li>
                    <li><button id="logoutBtn" class="hover:text-secondary">Logout</button></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Tour Details -->
    <div class="container mx-auto px-4 py-12">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <!-- Tour Images -->
            <div class="relative h-96">
                <img src="https://boracayinformer.com/wp-content/uploads/2024/10/inbound8053735243835763425-1080x560.jpg" alt="Boracay Island" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div class="p-8 text-white">
                        <h1 class="text-4xl font-bold mb-2">Boracay Island Getaway</h1>
                        <div class="flex items-center mb-4">
                            <span class="text-yellow-400">★★★★★</span>
                            <span class="ml-2">(245 reviews)</span>
                            <span class="mx-4">|</span>
                            <span>Aklan, Western Visayas</span>
                        </div>
                        <div class="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block">Beach</div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                <!-- Tour Information -->
                <div class="md:col-span-2 space-y-8">
                    <!-- Overview -->
                    <div>
                        <h2 class="text-2xl font-bold text-primary mb-4">Overview</h2>
                        <p class="text-gray-700">
                            Experience the world-famous white sand beaches of Boracay with this 3-day package. Boracay is known for its pristine white sand beaches, crystal-clear waters, and vibrant nightlife. This tour package includes accommodations, island hopping, water activities, and more.
                        </p>
                    </div>

                    <!-- Highlights -->
                    <div>
                        <h2 class="text-2xl font-bold text-primary mb-4">Highlights</h2>
                        <ul class="list-disc list-inside space-y-2 text-gray-700">
                            <li>Relax on the famous White Beach with its powdery white sand</li>
                            <li>Go island hopping to discover hidden coves and snorkeling spots</li>
                            <li>Try exciting water activities like parasailing and banana boat</li>
                            <li>Experience the vibrant nightlife along the beachfront</li>
                            <li>Witness the breathtaking sunset at Diniwid Beach</li>
                        </ul>
                    </div>

                    <!-- Itinerary -->
                    <div>
                        <h2 class="text-2xl font-bold text-primary mb-4">Itinerary</h2>
                        <div class="space-y-6">
                            <!-- Day 1 -->
                            <div>
                                <h3 class="text-xl font-bold text-primary">Day 1: Arrival and Welcome</h3>
                                <ul class="list-disc list-inside mt-2 text-gray-700">
                                    <li>Airport pickup and transfer to hotel</li>
                                    <li>Welcome drinks and hotel check-in</li>
                                    <li>Free time to explore White Beach</li>
                                    <li>Welcome dinner at a beachfront restaurant</li>
                                </ul>
                            </div>
                            <!-- Day 2 -->
                            <div>
                                <h3 class="text-xl font-bold text-primary">Day 2: Island Hopping Adventure</h3>
                                <ul class="list-disc list-inside mt-2 text-gray-700">
                                    <li>Breakfast at the hotel</li>
                                    <li>Full-day island hopping tour with lunch</li>
                                    <li>Visit to Puka Beach, Crystal Cove, and snorkeling spots</li>
                                    <li>Free evening to enjoy Boracay's nightlife</li>
                                </ul>
                            </div>
                            <!-- Day 3 -->
                            <div>
                                <h3 class="text-xl font-bold text-primary">Day 3: Water Activities and Departure</h3>
                                <ul class="list-disc list-inside mt-2 text-gray-700">
                                    <li>Breakfast at the hotel</li>
                                    <li>Morning water activities (parasailing, banana boat, etc.)</li>
                                    <li>Free time for shopping and relaxation</li>
                                    <li>Hotel checkout and transfer to airport</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Inclusions -->
                    <div>
                        <h2 class="text-2xl font-bold text-primary mb-4">What's Included</h2>
                        <ul class="list-disc list-inside space-y-2 text-gray-700">
                            <li>3 days/2 nights accommodation in a beachfront resort</li>
                            <li>Daily breakfast</li>
                            <li>Welcome dinner</li>
                            <li>Island hopping tour with lunch</li>
                            <li>2 water activities of your choice</li>
                            <li>Airport transfers</li>
                            <li>Local tour guide</li>
                            <li>All entrance fees and permits</li>
                        </ul>
                    </div>

                    <!-- Reviews -->
                    <div>
                        <h2 class="text-2xl font-bold text-primary mb-4">Reviews</h2>
                        <div class="space-y-4">
                            <!-- Review 1 -->
                            <div class="border-b pb-4">
                                <div class="flex items-center mb-2">
                                    <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">JD</div>
                                    <div class="ml-3">
                                        <h4 class="font-bold">John Doe</h4>
                                        <div class="flex items-center">
                                            <span class="text-yellow-500">★★★★★</span>
                                            <span class="ml-2 text-gray-600 text-sm">March 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-700">Amazing experience! The beaches were pristine and the island hopping tour was the highlight of our trip. Our guide was very knowledgeable and friendly.</p>
                            </div>
                            <!-- Review 2 -->
                            <div class="border-b pb-4">
                                <div class="flex items-center mb-2">
                                    <div class="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">MS</div>
                                    <div class="ml-3">
                                        <h4 class="font-bold">Maria Santos</h4>
                                        <div class="flex items-center">
                                            <span class="text-yellow-500">★★★★☆</span>
                                            <span class="ml-2 text-gray-600 text-sm">February 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-700">Great tour package! Everything was well-organized. The only downside was that it was a bit crowded during our visit, but that's expected in a popular destination like Boracay.</p>
                            </div>
                            <!-- Review 3 -->
                            <div>
                                <div class="flex items-center mb-2">
                                    <div class="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">RJ</div>
                                    <div class="ml-3">
                                        <h4 class="font-bold">Robert Johnson</h4>
                                        <div class="flex items-center">
                                            <span class="text-yellow-500">★★★★★</span>
                                            <span class="ml-2 text-gray-600 text-sm">January 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-700">Worth every peso! The accommodations were excellent, and the staff went above and beyond to make our stay memorable. Will definitely book with Philippine Tour again!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Booking Section -->
                <div>
                    <div class="bg-gray-50 p-6 rounded-lg shadow-md sticky top-8">
                        <h2 class="text-2xl font-bold text-primary mb-4">Book This Tour</h2>
                        <div class="mb-4">
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-700">Price per person:</span>
                                <span class="font-bold text-primary">₱15,000</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-700">Duration:</span>
                                <span>3 days, 2 nights</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-700">Group size:</span>
                                <span>Up to 10 people</span>
                            </div>
                        </div>
                        <form id="bookingForm" class="space-y-4">
                            <div>
                                <label for="startDate" class="block text-gray-700 font-medium mb-2">Start Date</label>
                                <input type="date" id="startDate" name="startDate" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                            </div>
                            <div>
                                <label for="guests" class="block text-gray-700 font-medium mb-2">Number of Guests</label>
                                <select id="guests" name="guests" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                                    <option value="1">1 person</option>
                                    <option value="2">2 people</option>
                                    <option value="3">3 people</option>
                                    <option value="4">4 people</option>
                                    <option value="5">5 people</option>
                                    <option value="6+">6+ people</option>
                                </select>
                            </div>
                            <div>
                                <label for="specialRequests" class="block text-gray-700 font-medium mb-2">Special Requests</label>
                                <textarea id="specialRequests" name="specialRequests" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
                            </div>
                            <div>
                                <button type="submit" class="w-full bg-secondary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">Book Now</button>
                            </div>
                            <div class="mt-3">
                                <button id="addToWishlistBtn" type="button" class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-300">Add to Wishlist</button>
                            </div>
                        </form>
                        <div class="mt-4 text-center text-gray-600 text-sm">
                            <p>No payment required now. We'll contact you to confirm availability and process payment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Recommended Tours -->
    <div class="container mx-auto px-4 py-8">
        <h2 class="text-2xl font-bold text-primary mb-6">You May Also Like</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="recommendedTours">
            <!-- Recommended tours will be dynamically added here by JavaScript -->
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-primary text-white py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between">
                <div class="mb-6 md:mb-0">
                    <h2 class="text-2xl font-bold mb-4">Philippine Tour</h2>
                    <p class="text-gray-300">Your gateway to the best Philippine experiences</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">Contact Us</h3>
                    <p class="text-gray-300">Email: info@philippinetour.com</p>
                    <p class="text-gray-300">Phone: +63 123 456 7890</p>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-6 text-center">
                <p class="text-gray-300">&copy; 2025 Philippine Tour. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>