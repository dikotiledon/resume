@echo off
echo Building the Next.js application...
pnpm build

if %errorlevel% neq 0 (
    echo Build failed. Exiting.
    exit /b 1
)

echo Build completed successfully.

echo Deployment instructions:
echo 1. The static files are in the "out" directory
echo 2. Copy the contents of the "out" directory to your nginx web root
echo 3. Configure nginx using the provided nginx.conf file
echo 4. Restart nginx

echo Deployment completed successfully!
pause
