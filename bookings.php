<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Bookings - Philippine Tour</title>
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
    <script src="js/bookings.js" defer></script>
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

    <!-- Bookings Banner -->
    <section class="bg-primary text-white py-12">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-4">My Bookings</h2>
            <p class="text-xl">Manage your upcoming and past tours</p>
        </div>
    </section>

    <!-- Bookings Content -->
    <div class="container mx-auto px-4 py-12">
        <!-- Tabs -->
        <div class="mb-8 border-b border-gray-200">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center">
                <li class="mr-2">
                    <button class="tab-btn active inline-block p-4 border-b-2 border-secondary text-secondary rounded-t-lg" data-tab="upcoming">Upcoming Tours</button>
                </li>
                <li class="mr-2">
                    <button class="tab-btn inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 rounded-t-lg" data-tab="past">Past Tours</button>
                </li>
                <li>
                    <button class="tab-btn inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 rounded-t-lg" data-tab="all">All Bookings</button>
                </li>
            </ul>
        </div>

        <!-- Tab Content -->
        <div class="tab-content" id="upcomingTab">
            <div id="upcomingBookings" class="space-y-6">
                <!-- Bookings will be loaded here -->
                <div class="text-center py-8 text-gray-500">Loading your bookings...</div>
            </div>
        </div>

        <div class="tab-content hidden" id="pastTab">
            <div id="pastBookings" class="space-y-6">
                <!-- Past bookings will be loaded here -->
                <div class="text-center py-8 text-gray-500">Loading your past bookings...</div>
            </div>
        </div>

        <div class="tab-content hidden" id="allTab">
            <div id="allBookings" class="space-y-6">
                <!-- All bookings will be loaded here -->
                <div class="text-center py-8 text-gray-500">Loading all your bookings...</div>
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