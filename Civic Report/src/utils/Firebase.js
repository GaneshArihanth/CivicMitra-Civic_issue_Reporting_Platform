import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getAuth, connectAuthEmulator, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const APP_NAME = "Civic Mitra";
let app;
let db;
let auth;
let storage;

// Initialize Firebase services
const initializeFirebase = async () => {
  try {
    // Initialize Firebase
    const existingApp = getApps().find(a => a.name === APP_NAME);
    app = existingApp || initializeApp(firebaseConfig, APP_NAME);

    console.log('[Firebase] Initializing Firebase services...');

    // Initialize services with persistence
    db = initializeFirestore(app, {
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager()
      })
    });

    auth = getAuth(app);
    storage = getStorage(app, "gs://abcd-44084.appspot.com");

    // Enable auth persistence
    try {
      await setPersistence(auth, browserLocalPersistence);
      console.log('[Firebase] Auth persistence enabled');
      console.log('[Firebase] Firestore offline persistence enabled with cache settings');
    } catch (err) {
      console.warn('[Firebase] Error enabling persistence:', err);
    }

    // Configure emulators in development
    if (import.meta.env.DEV) {
      console.log('[Firebase] Running in development mode');
      try {
        // Uncomment and configure these if you're using Firebase Emulators
        // connectAuthEmulator(auth, "http://localhost:9099");
        // connectFirestoreEmulator(db, 'localhost', 8080);
        // connectStorageEmulator(storage, 'localhost', 9199);
        console.log('[Firebase] Emulator configuration skipped');
      } catch (emulatorError) {
        console.warn('[Firebase] Emulator connection error:', emulatorError);
      }
    }

    console.log('[Firebase] Firebase services initialized successfully');
    return { app, db, auth, storage };
  } catch (error) {
    console.error('[Firebase] Error initializing Firebase:', error);
    throw error;
  }
};

// Initialize Firebase immediately
const firebaseInitPromise = initializeFirebase();

// Export initialized services
export {
  firebaseInitPromise,
  app,
  db,
  auth,
  storage
};

// Export the initialization function for explicit initialization if needed
export default initializeFirebase;
