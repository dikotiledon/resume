# Deployment Instructions

This document provides instructions for deploying the CV/Resume website to an nginx server.

## Prerequisites

1. Node.js and pnpm installed
2. nginx installed on your server
3. SSH access to your server (if deploying remotely)

## Build Process

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Build the static site:
   ```bash
   pnpm build
   ```

   This will generate a static site in the `out` directory.

## Nginx Configuration

1. Copy the provided `nginx.conf` file to your nginx configuration directory:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/cv.riandikartiko.com
   ```

2. Create a symbolic link to enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/cv.riandikartiko.com /etc/nginx/sites-enabled/
   ```

3. Test the nginx configuration:
   ```bash
   sudo nginx -t
   ```

4. Restart nginx:
   ```bash
   sudo systemctl restart nginx
   ```

## Deployment

### Manual Deployment

1. Copy the contents of the `out` directory to your nginx web root:
   ```bash
   sudo cp -r out/* /var/www/html/
   ```

2. Set proper permissions:
   ```bash
   sudo chown -R www-data:www-data /var/www/html/
   sudo chmod -R 755 /var/www/html/
   ```

### Automated Deployment

On Unix-like systems, you can use the provided `deploy.sh` script:
```bash
chmod +x deploy.sh
./deploy.sh
```

On Windows, you can use the provided `deploy.bat` script:
```cmd
deploy.bat
```

## SSL Configuration (Recommended)

For production deployment, it's recommended to use SSL. You can use Let's Encrypt with Certbot:

1. Install Certbot:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. Obtain SSL certificate:
   ```bash
   sudo certbot --nginx -d cv.riandikartiko.com
   ```

3. Follow the prompts to complete the SSL setup.

## Troubleshooting

1. If the site is not loading:
   - Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`
   - Verify the nginx configuration: `sudo nginx -t`
   - Ensure the files have correct permissions

2. If images are not loading:
   - Verify the image paths in the generated static files
   - Check that the image files exist in the `_next/static` directory

3. If the build fails:
   - Ensure all dependencies are installed: `pnpm install`
   - Check for TypeScript errors: `pnpm check`
