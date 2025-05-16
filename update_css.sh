#!/bin/bash

# List of PHP files to update
files=("dashboard.php" "login.php" "register.php" "tours.php" "tour-details.php" "bookings.php" "wishlist.php")

for file in "${files[@]}"; do
    # Check if file exists
    if [ -f "$file" ]; then
        # Add CSS link after the tailwind config script
        sed -i '/<\/script>/a \    <link rel="stylesheet" href="css\/custom.css">' "$file"
        echo "Updated $file"
    else
        echo "File $file not found"
    fi
done

echo "All files updated successfully!"
