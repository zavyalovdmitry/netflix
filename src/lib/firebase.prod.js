import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyD516dl_aG40jagxqkqsb4GO6ixMHGDVW0',
  authDomain: 'netflix-zd.firebaseapp.com',
  projectId: 'netflix-zd',
  storageBucket: 'netflix-zd.appspot.com',
  messagingSenderId: '627152350536',
  appId: '1:627152350536:web:f9e96d0431bdd88903d77d',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
