<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Philippine Tour</title>
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
    <script src="js/dashboard.js" defer></script>
</head>
<body class="bg-gray-100 min-h-screen">
    <!-- Remove any stray numbers that might be appearing here -->
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

    <!-- Welcome Section -->
    <section class="bg-primary text-white py-12">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-4">Welcome, <span id="userName">User</span>!</h2>
            <p class="text-xl">Discover and book your next adventure in the Philippines</p>
        </div>
    </section>

    <!-- Dashboard Content -->
    <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Quick Stats -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4 text-primary">Your Stats</h3>
                <div class="space-y-4">
                    <div class="flex justify-between">
                        <span class="text-gray-600">Upcoming Trips:</span>
                        <span id="upcomingTripsCount" class="font-bold">0</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Completed Tours:</span>
                        <span id="completedToursCount" class="font-bold">0</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Wishlist Items:</span>
                        <span id="wishlistItemsCount" class="font-bold">0</span>
                    </div>
                </div>
                <div class="mt-6">
                    <a href="tours.php" class="block text-center bg-secondary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Browse Tours</a>
                </div>
            </div>

            <!-- Recommended Tours -->
            <div class="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h3 class="text-xl font-bold mb-4 text-primary">Recommended for You</h3>
                <div class="space-y-4">
                    <!-- Tour 1 - Boracay -->
                    <div class="flex border-b pb-4">
                        <img src="https://boracayinformer.com/wp-content/uploads/2024/10/inbound8053735243835763425-1080x560.jpg" alt="Boracay Island" class="w-24 h-24 object-cover rounded-lg">
                        <div class="ml-4">
                            <h4 class="font-bold text-primary">Boracay Island Getaway</h4>
                            <p class="text-gray-600">Aklan, Western Visayas</p>
                            <div class="flex items-center mt-2">
                                <span class="text-yellow-500">★★★★★</span>
                                <span class="ml-2 text-gray-600">(245 reviews)</span>
                            </div>
                            <a href="tour-details.php?id=1" class="text-secondary hover:underline mt-2 inline-block">View Details</a>
                        </div>
                    </div>
                    <!-- Tour 2 - Banaue -->
                    <div class="flex border-b pb-4">
                        <img src="https://test.johnfisalbon.com/wp-content/uploads/2022/05/Banaue-1.jpg" alt="Banaue Rice Terraces" class="w-24 h-24 object-cover rounded-lg">
                        <div class="ml-4">
                            <h4 class="font-bold text-primary">Banaue Rice Terraces Trek</h4>
                            <p class="text-gray-600">Ifugao, Luzon</p>
                            <div class="flex items-center mt-2">
                                <span class="text-yellow-500">★★★★☆</span>
                                <span class="ml-2 text-gray-600">(128 reviews)</span>
                            </div>
                            <a href="tour-details.php?id=2" class="text-secondary hover:underline mt-2 inline-block">View Details</a>
                        </div>
                    </div>
                    <!-- Tour 3 - Coron -->
                    <div class="flex">
                        <img src="https://escapeartistkatie.com/wp-content/uploads/2023/07/Bankga-boat-and-boardwalk-1024x538.jpg.webp" alt="Coron Island" class="w-24 h-24 object-cover rounded-lg">
                        <div class="ml-4">
                            <h4 class="font-bold text-primary">Coron Island Hopping</h4>
                            <p class="text-gray-600">Palawan</p>
                            <div class="flex items-center mt-2">
                                <span class="text-yellow-500">★★★★★</span>
                                <span class="ml-2 text-gray-600">(189 reviews)</span>
                            </div>
                            <a href="tour-details.php?id=3" class="text-secondary hover:underline mt-2 inline-block">View Details</a>
                        </div>
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