@echo off
echo ===================================================
echo Building and Packaging Next.js Standalone for Live Server...
echo ===================================================
echo.

:: Step 1: Run Next.js production build
echo Running npm run build...
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Build failed! Please resolve errors first.
    pause
    exit /b %errorlevel%
)

:: Step 2: Create a fresh package folder
echo.
echo Packaging build files...
if exist "live_build" (
    echo Cleaning old build...
    rmdir /S /Q "live_build"
)
mkdir "live_build"

:: Step 3: Copy standalone files
xcopy /E /I /Y ".next\standalone" "live_build"

:: Step 4: Copy public assets and static CSS/JS
mkdir "live_build\public"
xcopy /E /I /Y "public" "live_build\public"
mkdir "live_build\.next\static"
xcopy /E /I /Y ".next\static" "live_build\.next\static"

:: Step 5: Copy configuration files
copy "ecosystem.config.js" "live_build\ecosystem.config.js"
if exist ".env" (
    copy ".env" "live_build\.env"
)

echo.
echo ===================================================
echo SUCCESS! Your production-ready folder 'live_build' is ready.
echo.
echo Next Steps:
echo 1. Zip the 'live_build' folder.
echo 2. Upload it to your server.
echo 3. Unzip and run: pm2 start ecosystem.config.js
echo ===================================================
pause
