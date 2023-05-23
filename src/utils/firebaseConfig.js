import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyAIYF9WGUu-Zc0AvJfMry6-fpIlvwIAwOo',
	authDomain: 'multitool-726b7.firebaseapp.com',
	projectId: 'multitool-726b7',
	storageBucket: 'multitool-726b7.appspot.com',
	messagingSenderId: '1013956908289',
	appId: '1:1013956908289:web:e7ca32ce31bfb00350b700',
	databaseURL: 'https://multitool-726b7.eur3.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
