<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Philippine Tour</title>
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
</head>
<body class="bg-gray-100 min-h-screen">
    <!-- Header -->
    <header class="bg-primary text-white p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">Philippine Tour</h1>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="index.php" class="hover:text-secondary">Home</a></li>
                    <li><a href="login.php" class="hover:text-secondary">Login</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Registration Form -->
    <div class="container mx-auto px-4 py-16">
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="bg-primary text-white py-4 px-6">
                <h2 class="text-2xl font-bold">Create an Account</h2>
            </div>
            <div class="p-6">
                <form id="registerForm" class="space-y-4">
                    <div>
                        <label for="fullName" class="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input type="text" id="fullName" name="fullName" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                    </div>
                    <div>
                        <label for="regEmail" class="block text-gray-700 font-medium mb-2">Email</label>
                        <input type="email" id="regEmail" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                    </div>
                    <div>
                        <label for="regPassword" class="block text-gray-700 font-medium mb-2">Password</label>
                        <input type="password" id="regPassword" name="password" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                    </div>
                    <div>
                        <label for="confirmPassword" class="block text-gray-700 font-medium mb-2">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                    </div>
                    <div>
                        <button type="submit" class="w-full bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Register</button>
                    </div>
                </form>
                <div class="mt-4 text-center">
                    <p class="text-gray-700">Already have an account? <a href="login.php" class="text-secondary hover:underline">Login here</a></p>
                </div>
                <div id="registerMessage" class="mt-4 text-center hidden"></div>
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