import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAI2QiSuAIQnEABuzG7yBngOL5bR2B_14c',
  authDomain: 'fir-authentication-react-3298d.firebaseapp.com',
  projectId: 'fir-authentication-react-3298d',
  storageBucket: 'fir-authentication-react-3298d.appspot.com',
  messagingSenderId: '928493459576',
  appId: '1:928493459576:web:ac2e90869f5ab1a497758d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
