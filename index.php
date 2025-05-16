<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Philippine Tour - Discover Paradise</title>
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
</head>
<body class="bg-gray-100 min-h-screen">
    <!-- Header -->
    <header class="bg-primary text-white p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">Philippine Tour</h1>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="index.php" class="hover:text-secondary">Home</a></li>
                    <li><a href="http://localhost/ipt-cms/index.php/about-us" class="hover:text-secondary">About Us</a></li>
                    <li><a href="http://localhost/ipt-cms/index.php/tours" class="hover:text-secondary">Tours</a></li>
                    <li><a href="http://localhost/ipt-cms/index.php/galle" class="hover:text-secondary">Gallery</a></li>
                    <li><a href="http://localhost/wordpress" class="hover:text-secondary">Event</a></li>
                    <li><a href="login.php" class="hover:text-secondary">Login</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section with Parallax Effect -->
    <style>
        .parallax-section {
            position: relative;
            overflow: hidden;
            height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .parallax-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 130%;
            background-image: url('https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80');
            background-size: cover;
            background-position: center;
            filter: blur(3px);
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            perspective: 1000px;
            z-index: -1;
            will-change: transform;
            transition: transform 0.05s linear;
        }
        .parallax-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(10, 26, 53, 0.6);
            z-index: -1;
        }
        .parallax-content {
            z-index: 1;
            width: 100%;
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const parallaxBg = document.querySelector('.parallax-bg');
            let ticking = false;
            let lastScrollY = window.pageYOffset;

            function updateParallax() {
                const scrollY = window.pageYOffset;
                // Use requestAnimationFrame for smoother animation
                parallaxBg.style.transform = 'translate3d(0, ' + scrollY * 0.3 + 'px, 0)';
                ticking = false;
                lastScrollY = scrollY;
            }

            window.addEventListener('scroll', function() {
                if (!ticking) {
                    window.requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }, { passive: true });

            // Initial position
            updateParallax();
        });
    </script>
    <section class="parallax-section text-white">
        <div class="parallax-bg"></div>
        <div class="parallax-overlay"></div>
        <div class="parallax-content">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-4xl font-bold mb-4 drop-shadow-lg">Discover the Beauty of the Philippines</h2>
                <p class="text-xl mb-8 drop-shadow-lg">Experience breathtaking beaches, vibrant culture, and unforgettable adventures</p>
                <a href="login.php" class="bg-secondary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">Start Your Journey</a>
            </div>
        </div>
    </section>

    <!-- Featured Destinations -->
    <section class="py-16 container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary">Popular Destinations</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Destination 1 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive/q_auto/c_fill,w_750/blogen/2018/10/33cfb02a-%E7%A7%81%E4%BA%BA%E5%AF%BC%E8%A7%88%E6%B5%B7%E4%B8%8A%E8%B7%B3%E5%B2%9B%E6%B8%B8.jpg" alt="Boracay" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-primary">Boracay Island</h3>
                    <p class="text-gray-700 mb-4">Famous for its white sand beaches and vibrant nightlife.</p>
                    <a href="login.php" class="text-secondary hover:underline">Learn More</a>
                </div>
            </div>
            <!-- Destination 2 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Kayangan_Lake%2C_Coron_-_Palawan.jpg" alt="Palawan" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-primary">Palawan</h3>
                    <p class="text-gray-700 mb-4">Home to the Underground River and stunning limestone cliffs.</p>
                    <a href="login.php" class="text-secondary hover:underline">Learn More</a>
                </div>
            </div>
            <!-- Destination 3 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="https://www.agoda.com/wp-content/uploads/2023/12/Featured-image-Cebu-1244x700.jpg" alt="Cebu" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-primary">Cebu</h3>
                    <p class="text-gray-700 mb-4">Blend of urban life, historical sites, and natural wonders.</p>
                    <a href="login.php" class="text-secondary hover:underline">Learn More</a>
                </div>
            </div>
        </div>
    </section>

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