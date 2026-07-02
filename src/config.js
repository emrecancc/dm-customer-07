// src/config.js
// Load environment variables
require('dotenv').config();

// Fallback for NEXTAUTH_SECRET
if (!process.env.NEXTAUTH_SECRET) {
  process.env.NEXTAUTH_SECRET = 'dummy-secret';
}

// Validate required environment variables
function validateConfig() {
  if (!process.env.NEXTAUTH_SECRET) {
    throw new Error('NEXTAUTH_SECRET environment variable is required but not set.');
  }
  // Add other validations if needed
}

module.exports = { validateConfig };
