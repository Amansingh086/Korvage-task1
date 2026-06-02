"use client";

import { initializeApp, getApps, initializeApp as initApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Validate Firebase configuration
const requiredFields = ["apiKey", "authDomain", "projectId", "appId"] as const;
const missingFields = requiredFields.filter(
  (field) => !firebaseConfig[field]
);

if (missingFields.length > 0) {
  console.error(
    `❌ Firebase Configuration Error: Missing required environment variables: ${missingFields.join(", ")}`
  );
  console.error("📋 Please ensure these variables are set in .env.local:");
  console.error("   - NEXT_PUBLIC_FIREBASE_API_KEY");
  console.error("   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN");
  console.error("   - NEXT_PUBLIC_FIREBASE_PROJECT_ID");
  console.error("   - NEXT_PUBLIC_FIREBASE_APP_ID");
}

let app;
let auth;

try {
  // Initialize Firebase - reuse existing app if already initialized
  const existingApps = getApps();
  if (existingApps.length === 0) {
    app = initApp(firebaseConfig);
    console.log("✅ Firebase initialized successfully");
  } else {
    app = existingApps[0];
    console.log("✅ Using existing Firebase app instance");
  }

  // Get Auth instance
  auth = getAuth(app);
  console.log("✅ Firebase Auth initialized successfully");
  console.log("   Auth Domain:", firebaseConfig.authDomain);
  console.log("   Project ID:", firebaseConfig.projectId);
} catch (error) {
  console.error("❌ Firebase initialization error:", error);
  throw new Error(
    `Firebase initialization failed. Error: ${error instanceof Error ? error.message : "Unknown error"}. Make sure Firebase Auth is enabled in your Firebase Console.`
  );
}

export { auth };
