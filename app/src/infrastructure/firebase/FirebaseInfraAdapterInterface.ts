import { Auth } from 'firebase/auth'
import { Firestore } from 'firebase/firestore'

interface FirebaseInfraAdapterInterface {
	firebaseFirestore: Firestore
	firebaseAuth: Auth
}

export { FirebaseInfraAdapterInterface }
