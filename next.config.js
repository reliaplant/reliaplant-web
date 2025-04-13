/** @type {import('next').NextConfig} */
const nextConfig = {
  // Change the output directory from 'build' to your Firebase folder
  // Example: 'firebase/public' or just 'firebase' depending on your Firebase setup
  distDir: 'firebase',
  
  // Keep any other existing configurations
  // ...existing code...
}

module.exports = nextConfig
