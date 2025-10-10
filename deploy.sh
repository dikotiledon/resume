#!/bin/bash

# Build the Next.js application
echo "Building the Next.js application..."
pnpm build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed. Exiting."
    exit 1
fi

echo "Build completed successfully."

# Copy the out directory to the nginx web root
echo "Copying files to nginx web root..."
sudo cp -r out/* /var/www/html/

# Set proper permissions
echo "Setting proper permissions..."
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/

# Restart nginx
echo "Restarting nginx..."
sudo systemctl restart nginx

echo "Deployment completed successfully!"
