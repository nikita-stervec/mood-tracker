import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'yourApiData',
  authDomain: 'yourApiData',
  projectId: 'yourApiData',
  storageBucket: 'yourApiData',
  messagingSenderId: 'yourApiData',
  appId: 'yourApiData',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;
