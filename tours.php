<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tours - Philippine Tour</title>
    <script src="https://cdn.tailwindcss.com"></script>
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
    <script src="js/auth.js" defer></script>
    <script src="js/tours.js" defer></script>
    <script src="js/wishlist.js" defer></script>
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

    <!-- Tours Banner -->
    <section class="bg-primary text-white py-12">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-4">Explore Philippine Tours</h2>
            <p class="text-xl">Discover the best destinations and experiences across the Philippines</p>
        </div>
    </section>

    <!-- Search and Filter -->
    <div class="container mx-auto px-4 py-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label for="destination" class="block text-gray-700 font-medium mb-2">Destination</label>
                    <select id="destination" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                        <option value="">All Destinations</option>
                        <option value="luzon">Luzon</option>
                        <option value="visayas">Visayas</option>
                        <option value="mindanao">Mindanao</option>
                    </select>
                </div>
                <div>
                    <label for="duration" class="block text-gray-700 font-medium mb-2">Duration</label>
                    <select id="duration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                        <option value="">Any Duration</option>
                        <option value="1-3">1-3 Days</option>
                        <option value="4-7">4-7 Days</option>
                        <option value="8+">8+ Days</option>
                    </select>
                </div>
                <div>
                    <label for="activity" class="block text-gray-700 font-medium mb-2">Activity Type</label>
                    <select id="activity" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                        <option value="">All Activities</option>
                        <option value="beach">Beach</option>
                        <option value="adventure">Adventure</option>
                        <option value="cultural">Cultural</option>
                        <option value="nature">Nature</option>
                    </select>
                </div>
                <div class="flex items-end">
                    <button id="searchBtn" class="w-full bg-secondary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Search Tours</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Tours List -->
    <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="toursList">
            <!-- Tour 1 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="https://boracayinformer.com/wp-content/uploads/2024/10/inbound8053735243835763425-1080x560.jpg" alt="Boracay" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-primary">Boracay Island Getaway</h3>
                        <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Beach</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <span class="text-yellow-500">★★★★★</span>
                        <span class="ml-1 text-gray-600 text-sm">(245 reviews)</span>
                    </div>
                    <p class="text-gray-700 mb-4">Experience the world-famous white sand beaches of Boracay with this 3-day package.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-lg font-bold text-primary">₱15,000</span>
                        <a href="tour-details.php?id=1" class="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg transition duration-300">View Details</a>
                    </div>
                </div>
            </div>
            <!-- Tour 2 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="https://test.johnfisalbon.com/wp-content/uploads/2022/05/Banaue-1.jpg" alt="Banaue" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-primary">Banaue Rice Terraces Trek</h3>
                        <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Adventure</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <span class="text-yellow-500">★★★★☆</span>
                        <span class="ml-1 text-gray-600 text-sm">(128 reviews)</span>
                    </div>
                    <p class="text-gray-700 mb-4">Explore the ancient rice terraces of Banaue and immerse in local culture.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-lg font-bold text-primary">₱12,500</span>
                        <a href="tour-details.php?id=2" class="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg transition duration-300">View Details</a>
                    </div>
                </div>
            </div>
            <!-- Tour 3 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="https://source.unsplash.com/random/800x600/?coron" alt="Coron" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-primary">Coron Island Hopping</h3>
                        <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Nature</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <span class="text-yellow-500">★★★★★</span>
                        <span class="ml-1 text-gray-600 text-sm">(189 reviews)</span>
                    </div>
                    <p class="text-gray-700 mb-4">Discover the hidden lagoons and pristine beaches of Coron, Palawan.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-lg font-bold text-primary">₱18,000</span>
                        <a href="tour-details.php?id=3" class="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg transition duration-300">View Details</a>
                    </div>
                </div>
            </div>
            <!-- Tour 4 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="https://source.unsplash.com/random/800x600/?manila" alt="Manila" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-primary">Manila Heritage Tour</h3>
                        <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Cultural</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <span class="text-yellow-500">★★★★☆</span>
                        <span class="ml-1 text-gray-600 text-sm">(76 reviews)</span>
                    </div>
                    <p class="text-gray-700 mb-4">Explore the rich history and culture of Manila with this guided city tour.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-lg font-bold text-primary">₱3,500</span>
                        <a href="tour-details.php?id=4" class="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg transition duration-300">View Details</a>
                    </div>
                </div>
            </div>
            <!-- Tour 5 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="https://source.unsplash.com/random/800x600/?cebu" alt="Cebu" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-primary">Cebu Island Adventure</h3>
                        <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Adventure</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <span class="text-yellow-500">★★★★★</span>
                        <span class="ml-1 text-gray-600 text-sm">(156 reviews)</span>
                    </div>
                    <p class="text-gray-700 mb-4">From whale sharks to waterfalls, experience the best of Cebu Island.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-lg font-bold text-primary">₱14,000</span>
                        <a href="tour-details.php?id=5" class="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg transition duration-300">View Details</a>
                    </div>
                </div>
            </div>
            <!-- Tour 6 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="https://source.unsplash.com/random/800x600/?siargao" alt="Siargao" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-primary">Siargao Surf Camp</h3>
                        <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Beach</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <span class="text-yellow-500">★★★★★</span>
                        <span class="ml-1 text-gray-600 text-sm">(210 reviews)</span>
                    </div>
                    <p class="text-gray-700 mb-4">Learn to surf in the Philippines' surfing capital with expert instructors.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-lg font-bold text-primary">₱20,000</span>
                        <a href="tour-details.php?id=6" class="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg transition duration-300">View Details</a>
                    </div>
                </div>
            </div>
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