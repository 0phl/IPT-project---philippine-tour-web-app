<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Wishlist - Philippine Tour</title>
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
    <script src="js/wishlist-page.js" defer></script>
</head>
<body class="bg-gray-100 min-h-screen flex flex-col">
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

    <!-- Wishlist Banner -->
    <section class="bg-primary text-white py-12">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-4">My Wishlist</h2>
            <p class="text-xl">Tours you've saved for future adventures</p>
        </div>
    </section>

    <!-- Wishlist Content -->
    <div class="container mx-auto px-4 py-12 flex-grow">
        <div id="wishlistContainer" class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Wishlist items will be loaded here -->
            <div class="text-center py-8 text-gray-500 col-span-3">Loading your wishlist...</div>
        </div>

        <!-- Empty Wishlist Message -->
        <div id="emptyWishlist" class="hidden text-center py-12 flex flex-col justify-center min-h-[50vh]">
            <h3 class="text-2xl font-bold text-gray-700 mb-4">Your wishlist is empty</h3>
            <p class="text-gray-600 mb-8">Start exploring tours and add them to your wishlist for future reference.</p>
            <div>
                <a href="tours.php" class="bg-secondary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Explore Tours</a>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-primary text-white py-8 mt-auto">
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
