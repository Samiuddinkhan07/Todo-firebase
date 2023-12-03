import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';

class Auth {
  constructor() {
    const config = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_APP_ID,
      measurementId: import.meta.env.VITE_MEASUREMENT_ID,
    };
    const app = initializeApp(config);
    this.db = getFirestore(app);
    this.auth = getAuth(app);
  }

  async createUser({ email, password }) {
    try {
      return await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error('Failed to Create Firebase User', error.message);
    }
  }

  async userSignIn({email,password}){
    try {
      return await signInWithEmailAndPassword(this.auth,email,password);
    } catch (error) {
      console.log("Failed to SignIn",error)
    }
  }
}

const authConfig = new Auth();

export default authConfig;
