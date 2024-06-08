import { Auth } from 'firebase/auth'
import { Firestore } from 'firebase/firestore'

interface FirebaseConfigInterface {
	firebaseFirestore: Firestore
	firebaseAuth: Auth
}

export { FirebaseConfigInterface }
